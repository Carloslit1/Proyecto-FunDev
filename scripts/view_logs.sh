#!/usr/bin/env bash
# view_logs.sh — logs locales o de CloudWatch
set -e
TARGET="${1:-all}"
case "$TARGET" in
  aws)
    GROUP="${2:-/doggiechic/intranet}"
    echo "☁️  CloudWatch tail: $GROUP"
    aws logs tail "$GROUP" --follow
    ;;
  web|api)
    docker compose logs --tail=100 "$TARGET"
    ;;
  all|*)
    echo "--- web ---";  tail -n 50 logs/web/app.log 2>/dev/null || echo "(sin logs)"
    echo "--- api ---";  tail -n 50 logs/api/api.log 2>/dev/null || echo "(sin logs)"
    ;;
esac
