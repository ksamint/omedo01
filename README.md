# 线下培训全周期游戏化互动平台（Web）

贯穿训前 / 训中 / 训后的数据主线 + 现场大屏互动 + 游戏化积分成就。技术栈与边界见 [`docs/`](docs/) 与 [`cursor_project_rules/`](cursor_project_rules/)。

## 本地开发

```bash
cp .env.example .env
# 编辑 DATABASE_URL 后：
npx prisma migrate dev
npm run dev
```

其它命令：`npm run build`、`npm run lint`、`npm run test`、`npm run db:generate`。

## 目录

| 路径 | 说明 |
|------|------|
| [prisma/schema.prisma](prisma/schema.prisma) | 多租户与现场会话核心模型 |
| [docs/](docs/) | 竞品、角色、MVP、技术选型 |
| [cursor_project_rules/](cursor_project_rules/) | AI 与协作约定 + `implementation-plan.mdc` |
| [app/s/\[joinCode\]/](app/s/) | 现场会话路由占位（参与者 / 讲师 / 大屏） |

## 推送到 GitHub（仓库名 `omedo01`）

在仓库根目录执行（需已安装 [GitHub CLI](https://cli.github.com/) 且已 `gh auth login`）：

```bash
git add -A
git status   # 确认没有 .env 等敏感文件
git commit -m "Initial project: Next.js, Prisma, docs, and session routes"
gh repo create omedo01 --public --source=. --remote=origin --push
```

若远程已存在、只想改 URL 后推送：

```bash
git remote add origin https://github.com/<你的用户名>/omedo01.git
git push -u origin main
```

也可在 GitHub 网页新建空仓库 `omedo01`，再按页面提示 `git remote add` / `git push`。

## 部署到自有服务器（通用思路）

1. **准备环境**：Node.js 20+、PostgreSQL、进程管理（如 systemd 或 PM2）、反向代理（Nginx/Caddy）。
2. **环境变量**：在服务器设置 `DATABASE_URL`、`NODE_ENV=production`，不要提交 `.env`。
3. **构建与数据库**：

   ```bash
   npm ci
   npx prisma migrate deploy
   npm run build
   ```

4. **启动**：

   ```bash
   npm run start
   ```

   默认监听 `3000`；生产环境应在前面加 HTTPS 反向代理，并把流量转到该端口。

5. **Docker（可选）**：可自行增加 `Dockerfile`（多阶段：`npm ci` → `prisma generate` → `next build` → `node server.js` 或 `next start`），数据库用托管 Postgres 或同机容器；注意镜像内需能访问 `DATABASE_URL`。

**无服务器托管**：若接受厂商托管，也可用 [Vercel](https://vercel.com/) 部署 Next.js，数据库使用 [Neon](https://neon.tech/) / [Supabase](https://supabase.com/) 等 Postgres；将 `DATABASE_URL` 配在托管平台的环境变量中，并在 Build 命令里执行 `prisma generate`（及按需 `migrate deploy`）。
