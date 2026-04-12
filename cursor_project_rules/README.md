# 项目知识库（cursor_project_rules）

本目录为 Cursor / 代理的上下文边界：**产品定义、权限与安全约定以本目录与 `/docs` 为准。**

| 文档 | 用途 |
|------|------|
| [implementation-plan.mdc](./implementation-plan.mdc) | 功能开发步骤与完成记录 |
| [/docs/competitive-positioning.md](../docs/competitive-positioning.md) | 竞品与差异化 |
| [/docs/roles-and-scenarios.md](../docs/roles-and-scenarios.md) | 角色与场景优先级 |
| [/docs/mvp-scope.md](../docs/mvp-scope.md) | MVP 边界 |
| [/docs/tech-stack-decisions.md](../docs/tech-stack-decisions.md) | 技术栈决策 |

## 安全

- 所有查询必须带 `organizationId`（或从 membership 解析出的租户上下文）。  
- 匿名参与者仅能通过不可猜测的 `joinCode` + 会话内操作令牌访问。  
