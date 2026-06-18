#!/bin/bash

ROOT="$(cd "$(dirname "$0")" && pwd)"

# Colors
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log() { echo -e "${GREEN}[start]${NC} $1"; }
err() { echo -e "${RED}[error]${NC} $1"; }

cleanup() {
  echo ""
  log "Shutting down backend and frontend..."
  kill "$BACKEND_PID" "$FRONTEND_PID" 2>/dev/null
  wait "$BACKEND_PID" "$FRONTEND_PID" 2>/dev/null
  log "Done."
  exit 0
}
trap cleanup SIGINT SIGTERM

# 0. Kill any stale processes on our ports
log "Clearing ports 8888 and 3000..."
lsof -ti tcp:8888 | xargs kill -9 2>/dev/null
lsof -ti tcp:3000 | xargs kill -9 2>/dev/null

# 1. MongoDB via Docker
log "Starting MongoDB container..."
docker compose -f "$ROOT/docker-compose.yml" up -d
if [ $? -ne 0 ]; then
  err "Docker failed to start. Is Docker Desktop running?"
  exit 1
fi
log "MongoDB is up on port 27017."

# 2. Backend
log "Starting backend on port 8888..."
cd "$ROOT/backend"
npm run dev 2>&1 | sed "s/^/$(echo -e "${CYAN}[backend]${NC}") /" &
BACKEND_PID=$!

# Wait for backend to be ready
for i in $(seq 1 15); do
  if curl -s -o /dev/null http://localhost:8888/api/ 2>/dev/null; then
    break
  fi
  sleep 1
done

# 3. Frontend
log "Starting frontend on port 3000..."
cd "$ROOT/frontend"
npm run dev 2>&1 | sed "s/^/$(echo -e "${YELLOW}[frontend]${NC}") /" &
FRONTEND_PID=$!

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  App running at http://localhost:3000  ${NC}"
echo -e "${GREEN}  Login: admin@admin.com / admin123     ${NC}"
echo -e "${GREEN}  Press Ctrl+C to stop all services     ${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

wait "$BACKEND_PID" "$FRONTEND_PID"
