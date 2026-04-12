# 技术栈选型（已确认）

| 领域 | 选型 | 说明 |
|------|------|------|
| Web 框架 | Next.js 16（App Router）+ TypeScript | 全栈、RSC、与 Vercel 部署契合 |
| UI | Tailwind CSS v4 + shadcn/ui（Base UI） | 与当前仓库 `components.json` 一致 |
| 数据库 | PostgreSQL + Prisma ORM | 多租户 `organizationId` 隔离；迁移用 `prisma migrate` |
| 缓存 / 实时排行（后续） | Redis | 高频写 `Score`、榜排序 |
| 实时通道（后续） | Socket.io 或 Partykit / 自建 WS | 现场毫秒级同步 |
| 认证（后续） | NextAuth.js 或 Clerk | RBAC 与组织邀请流 |
| 大屏 | 独立路由 + 全屏 CSS + 可选 Cast | 双浏览器窗口即可 MVP |

## 环境变量

- `DATABASE_URL`：见仓库根目录 [.env.example](/.env.example)。  

## Prisma

- 配置文件：`prisma.config.ts`（Prisma 6 生成项目自带）。  
- 业务模型：`prisma/schema.prisma`。  
