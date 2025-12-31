#!/usr/bin/env bash
# Update README with top active repos by merged PRs in last 30 days.
# Requires: GH_TOKEN and GITHUB_USER environment variables

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"
TMP_FILE="/tmp/repos.json"
OUTPUT_FILE="/tmp/top_repos.md"

echo "Fetching merged PRs for user: ${GITHUB_USER}"

# Query GitHub API for all repos and their merged PRs
gh api graphql -f query='
  query($user: String!) {
    user(login: $user) {
      repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}) {
        nodes {
          name
          url
          description
          stargazerCount
          pullRequests(states: MERGED, first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
            nodes {
              mergedAt
            }
            totalCount
          }
        }
      }
    }
  }
' -f user="${GITHUB_USER}" > "${TMP_FILE}"

echo "Processing repository data..."

# Process with Python script
python3 "${SCRIPT_DIR}/process_top_repos.py" "${TMP_FILE}" > "${OUTPUT_FILE}"

# Update README if markers exist
README="${REPO_ROOT}/README.md"
if grep -q "<!--START_SECTION:top-repos-->" "${README}"; then
    echo "Updating README..."
    TOP_REPOS=$(cat "${OUTPUT_FILE}")

    awk -v content="${TOP_REPOS}" '
        /<!--START_SECTION:top-repos-->/ { print; print content; skip=1; next }
        /<!--END_SECTION:top-repos-->/ { skip=0 }
        !skip { print }
    ' "${README}" > "${README}.tmp" && mv "${README}.tmp" "${README}"

    echo "README updated successfully"
else
    echo "Warning: top-repos section markers not found in README"
fi

# Cleanup
rm -f "${TMP_FILE}" "${OUTPUT_FILE}"
