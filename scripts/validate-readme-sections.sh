#!/usr/bin/env bash
set -euo pipefail

if [ ! -f ".readme-validator.yaml" ]; then
  echo "No .readme-validator.yaml found, skipping section validation"
  exit 0
fi

errors=0

# Parse required sections from config
while IFS= read -r section; do
  [ -z "$section" ] && continue
  if ! grep -q "^### ${section}$" README.md; then
    echo "::error::Required section missing: '### ${section}'"
    ((errors++))
  else
    echo "Found required section: '### ${section}'"
  fi
done < <(yq '.required_sections[]' .readme-validator.yaml 2>/dev/null)

if [ "$errors" -gt 0 ]; then
  echo "README validation failed: ${errors} missing section(s)"
  exit 1
fi

echo "All required sections present"
