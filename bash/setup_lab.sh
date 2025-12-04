#!/usr/bin/env bash
# setup_lab.sh - buat struktur lab sederhana
set -e
ROOT=~/siber-lab
mkdir -p "$ROOT"/{logs,scripts,targets,tools}
python3 -m venv "$ROOT/venv"
echo "Lab directory created at: $ROOT"
echo "Activated virtualenv with: source $ROOT/venv/bin/activate"
