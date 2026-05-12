// Commit one or more files atomically to a branch via the Git Data API.
//
// When authenticated as a GitHub App, GitHub web-flow signs commits created
// through this API automatically — the resulting commit is verified with no
// extra setup. This is the canonical replacement for runner-side
// `git config` + `git commit` + `git push` blocks, which produce unsigned
// commits because no signing key is loaded on the runner.
//
// Inputs (via env, set on the calling step):
//   TARGET_BRANCH    branch name (e.g. "output")
//   COMMIT_MESSAGE   single-line commit subject
//   FILES            newline-separated file paths (mutually exclusive with DIRECTORY)
//   DIRECTORY        directory whose top-level files should all be committed
//
// Skips the commit if the resulting tree SHA matches the parent's tree SHA
// (i.e. nothing actually changed), preserving the current "no-op skip"
// behavior of the workflows being replaced.

const fs = require('node:fs');
const path = require('node:path');

module.exports = async ({ github, context, core }) => {
  const branch = process.env.TARGET_BRANCH;
  const message = process.env.COMMIT_MESSAGE;
  const filesEnv = process.env.FILES;
  const directory = process.env.DIRECTORY;

  if (!branch || !message) {
    core.setFailed('Missing required env: TARGET_BRANCH, COMMIT_MESSAGE');
    return;
  }
  if (Boolean(filesEnv) === Boolean(directory)) {
    core.setFailed('Provide exactly one of FILES or DIRECTORY');
    return;
  }

  let files;
  if (filesEnv) {
    files = filesEnv.split('\n').map((s) => s.trim()).filter(Boolean);
  } else if (!fs.existsSync(directory)) {
    core.info(`Directory does not exist, nothing to commit: ${directory}`);
    return;
  } else {
    files = fs.readdirSync(directory)
      .map((name) => path.join(directory, name))
      .filter((p) => fs.statSync(p).isFile());
  }

  if (files.length === 0) {
    core.info('No files to commit, skipping');
    return;
  }

  const { owner, repo } = context.repo;

  const { data: ref } = await github.rest.git.getRef({
    owner, repo, ref: `heads/${branch}`,
  });
  const parentSha = ref.object.sha;

  const { data: parentCommit } = await github.rest.git.getCommit({
    owner, repo, commit_sha: parentSha,
  });

  const tree = [];
  for (const filePath of files) {
    if (!fs.existsSync(filePath)) {
      core.info(`Skipping missing file: ${filePath}`);
      continue;
    }
    const content = fs.readFileSync(filePath).toString('base64');
    const { data: blob } = await github.rest.git.createBlob({
      owner, repo, content, encoding: 'base64',
    });
    tree.push({
      path: filePath,
      mode: '100644',
      type: 'blob',
      sha: blob.sha,
    });
  }

  if (tree.length === 0) {
    core.info('No files to commit, skipping');
    return;
  }

  const { data: newTree } = await github.rest.git.createTree({
    owner, repo,
    base_tree: parentCommit.tree.sha,
    tree,
  });

  if (newTree.sha === parentCommit.tree.sha) {
    core.info('No content changes, skipping commit');
    return;
  }

  const { data: commit } = await github.rest.git.createCommit({
    owner, repo, message, tree: newTree.sha, parents: [parentSha],
  });

  await github.rest.git.updateRef({
    owner, repo, ref: `heads/${branch}`, sha: commit.sha,
  });

  core.info(`Created signed commit ${commit.sha.slice(0, 8)} on ${branch}: ${message}`);
};
