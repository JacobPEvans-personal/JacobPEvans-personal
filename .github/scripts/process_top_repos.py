#!/usr/bin/env python3
"""Process GitHub API response to find top repos by merged PRs in last 30 days."""

import json
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path


def load_repos_data(input_file: str) -> dict:
    """Load repository data from JSON file."""
    with open(input_file) as f:
        return json.load(f)


def count_recent_merged_prs(repos: list, days: int = 30) -> list:
    """Count merged PRs in the last N days for each repository."""
    since = datetime.now(timezone.utc) - timedelta(days=days)
    results = []

    for repo in repos:
        if not repo["pullRequests"]["nodes"]:
            continue

        count = sum(
            1
            for pr in repo["pullRequests"]["nodes"]
            if pr["mergedAt"]
            and datetime.fromisoformat(pr["mergedAt"].replace("Z", "+00:00")) >= since
        )

        if count > 0:
            results.append(
                {
                    "name": repo["name"],
                    "url": repo["url"],
                    "description": repo["description"] or "No description",
                    "stars": repo["stargazerCount"],
                    "merged_prs": count,
                }
            )

    return results


def generate_markdown_table(repos: list, top_n: int = 5) -> str:
    """Generate markdown table rows for top repos."""
    repos.sort(key=lambda x: x["merged_prs"], reverse=True)
    top_repos = repos[:top_n]

    if not top_repos:
        return "| - | No recent PR activity | - | - | - |"

    emojis = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"]
    lines = []

    for i, repo in enumerate(top_repos):
        desc = repo["description"][:50] + ("..." if len(repo["description"]) > 50 else "")
        lines.append(
            f"| {emojis[i]} | [{repo['name']}]({repo['url']}) | {desc} | {repo['merged_prs']} PRs | ⭐ {repo['stars']} |"
        )

    return "\n".join(lines)


def main():
    """Main entry point."""
    input_file = sys.argv[1] if len(sys.argv) > 1 else "/tmp/repos.json"

    data = load_repos_data(input_file)
    repos = data["data"]["user"]["repositories"]["nodes"]
    results = count_recent_merged_prs(repos)
    markdown = generate_markdown_table(results)

    print(markdown)


if __name__ == "__main__":
    main()
