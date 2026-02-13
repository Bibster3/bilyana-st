#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

canonical_entrypoint="src/main.jsx"
legacy_entrypoints=(
  "src/index.js"
  "src/index.jsx"
  "src/index.ts"
  "src/index.tsx"
)

if [[ ! -f "$canonical_entrypoint" ]]; then
  echo "Error: expected Vite entrypoint '$canonical_entrypoint' is missing."
  exit 1
fi

duplicates=()
for file in "${legacy_entrypoints[@]}"; do
  if [[ -f "$file" ]]; then
    duplicates+=("$file")
  fi
done

if (( ${#duplicates[@]} > 0 )); then
  echo "Error: duplicate entrypoint files detected:"
  printf ' - %s\n' "${duplicates[@]}"
  echo "Keep only '$canonical_entrypoint'."
  exit 1
fi

echo "Entrypoint check passed: only '$canonical_entrypoint' is present."
