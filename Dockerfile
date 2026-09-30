FROM docker.io/library/node:24-trixie-slim

ARG TARGETARCH

ENV \
  DOCKER=true \
  NODE_OPTIONS=--use-openssl-ca \
  PNPM_HOME=/usr/local/pnpm

RUN apt-get update && \
  apt-get -y --no-install-recommends install curl ca-certificates && \
  rm -rf /var/lib/apt/lists/* /var/lib/dpkg/*-old /var/cache/* /var/log/*

ARG HUGO_VERSION=0.160.1
RUN set -x && \
  curl -fsSL "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-${TARGETARCH}.tar.gz" | tar -xvz -C /usr/local/bin/ --wildcards "hugo"

ARG DART_SASS_VERSION=1.105.1
RUN set -x && \
  arch="$TARGETARCH" && \
  if [ "$TARGETARCH" = "amd64" ]; then \
    arch="x64"; \
  fi && \
  curl -fsSL "https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-${arch}.tar.gz" | tar -xvz --strip-components 1 -C /usr/local/bin/ --wildcards "*/sass" --wildcards "*/src/*"

# Configure pnpm.
RUN set -x && \
  corepack enable && \
  mkdir -p ~/.config/pnpm && \
  printf "updateNotifier: false\nstoreDir: ${PNPM_HOME}/store\n" > ~/.config/pnpm/config.yaml

RUN mkdir -p /app
WORKDIR /app

# Install NPM dependencies.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /app/
RUN --mount=type=cache,target=/usr/local/pnpm/store \
  pnpm install

COPY .prettierignore .prettierrc.yml config.yaml eslint.config.js postcss.config.js /app/
COPY assets /app/assets
COPY config /app/config
COPY content /app/content
COPY layouts /app/layouts
COPY vendor/datagov-11ty/styles /app/vendor/datagov-11ty/styles

CMD ["/app/bin/docker-start"]
