# ALFATH_ Engineering Portfolio

A statically generated engineering portfolio for Alfath Asqar Tsani. The site presents full-stack systems, data infrastructure, platform engineering, production operations, experience, and education through a cyber-brutalist editorial interface.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion
- `lottie-react`
- `next-themes`
- Local JSON content and local artwork

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

Production verification:

```bash
pnpm build
pnpm start
```

## Content editing

Portfolio content is kept outside the presentation layer:

```text
data/
  projects.json
  experience.json
  skills.json
  education.json
  site.json
```

Edit these files directly. Project components automatically omit unavailable links, empty galleries, and empty metric collections.

## Adding a project

Add a new object to `data/projects.json` with a unique `id` and `slug`. The reusable schema supports title, subtitle, year, role, category, descriptions, challenge, solution, impact, URLs, artwork, gallery, stack, capabilities, metrics, featured/highlight state, production status, and platform description.

Set `featured` to `true` for inclusion on the home page. The `/work/[slug]` case-study route and its metadata are generated automatically.

## Project artwork

- Cover: `1600 × 1000` (8:5)
- Gallery: `1600 × 1000` or `1920 × 1200`
- Store assets under `public/images/projects/`
- Use stable 8:5 framing; dashboard captures should be composed for top-center positioning

The starter artwork is local SVG system art so the repository ships without remote image dependencies.

## Theme behavior

Theme preference uses `next-themes`, follows the operating-system preference initially, and persists the user choice. Light and dark modes have separate surface, text, and border tokens documented in `design.md`.

## Deployment

No API, database, environment variable, or persistent service is required. The site ships as a Docker image (`output: "standalone"`) and deploys to a homelab: Cloudflare Tunnel → nginx → container on `127.0.0.1:3000`.

### Docker

```bash
docker build -t portofolio-asqara .
docker run --rm -p 3000:3000 portofolio-asqara
```

### CI/CD (`.github/workflows/deploy.yml`)

- Pull requests: lint + Docker build (no push).
- Push to `master`: lint → build and push `ghcr.io/asqara/portofolio-asqara:{sha-<commit>,latest}` → join the tailnet and SSH into the homelab, copy `deploy/docker-compose.yml`, pin `IMAGE` in `.env`, then `docker compose pull && up -d --wait`.

#### One-time homelab setup

1. Install Docker (with the compose plugin) on the server and create a deploy user in the `docker` group.
2. Add the deploy public key to that user's `~/.ssh/authorized_keys` (`ssh-keygen -t ed25519 -f deploy_key -N ""`).
3. Tailscale admin console:
   - Access controls: declare `tag:ci` in `tagOwners` and allow `tag:ci` to reach the server on port 22.
   - Settings → Trust credentials → Credential → **OpenID Connect**: issuer *GitHub Actions*, subject `repo:Asqara/portofolio-asqara:environment:production`, scope `auth_keys` (write) with tag `tag:ci`. Copy the Client ID and Audience.
4. nginx: copy `deploy/nginx/portofolio-asqara.conf` into `/etc/nginx/conf.d/`, adjust `server_name`, then `sudo nginx -t && sudo systemctl reload nginx`.
5. Cloudflare Tunnel: point the public hostname (e.g. `asqara.tech`) at `http://localhost:80` (nginx).

The container publishes only on `127.0.0.1:3000`. To use another port, put `APP_PORT=<port>` in `$DEPLOY_PATH/.env` and update the nginx `upstream`. If nginx itself runs in Docker, bind the app somewhere that container can reach instead of loopback.

#### GitHub settings (Settings → Secrets and variables → Actions)

| Name | Kind | Value |
| --- | --- | --- |
| `TS_OAUTH_CLIENT_ID` | secret | Client ID of the Tailscale trust credential |
| `TS_AUDIENCE` | secret | Audience of the Tailscale trust credential |
| `SSH_HOST` | secret | server's MagicDNS name or `100.x.y.z` Tailscale IP |
| `SSH_USER` | secret | deploy user on the server |
| `SSH_PRIVATE_KEY` | secret | contents of `deploy_key` |
| `DEPLOY_PATH` | variable (optional) | defaults to `~/apps/portofolio-asqara` |
| `DOCKER_PLATFORM` | variable (optional) | defaults to `linux/amd64`; use `linux/arm64` for ARM servers |

The deploy job runs in the `production` environment, so protection rules (manual approval, etc.) can be added there.

Update the canonical origin (`https://asqara.tech`) in `src/app/[locale]/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` if the production domain differs.
