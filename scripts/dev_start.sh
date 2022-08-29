#!/bin/bash
#
# Launcher for dev mode
#
# Sets up the bind-mounts for yuebing and the work-dir, builds the docker
# image if not found, and launches it
#
SCRIPT_DIR="$(cd "$(dirname "${0}")" && pwd)"
BASE_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

DOCKER_REPO="cobbzilla/yuebing"
DOCKER_TAG="latest"
DOCKER_NAME="${DOCKER_REPO}:${DOCKER_TAG}"

function die () {
  echo >&2 "${0}: ${1}"
  exit 1
}

if [[ -z "$(docker image ls | grep "${DOCKER_REPO}" | grep "${DOCKER_TAG}")" ]] ; then
  cd "${BASE_DIR}" || die "Error trying to change directories to ${BASE_DIR}"
  yarn docker-build-dev || die "Error building docker dev image"
fi

YB_WORK_DIR=$("${SCRIPT_DIR}"/ensure_work_dir.sh "${BASE_DIR}")
if [[ -z "${YB_WORK_DIR}" ]] ; then
  die "Error initializing YB_WORK_DIR"
fi

cd "${BASE_DIR}" && \
  docker run -it \
    --ulimit nofile=500000:500000 \
    --mount type=bind,source="$(pwd)",target=/usr/src/yuebing \
    --mount type=bind,source="${YB_WORK_DIR}",target=/usr/src/scratch \
    --env-file <(grep -v YB_WORK_DIR .env | sed -e 's/^export //' ; echo "YB_WORK_DIR=/usr/src/scratch") \
    --env HOST=0.0.0.0 \
    --publish 127.0.0.1:3000:3000/tcp \
    "${DOCKER_NAME}"
