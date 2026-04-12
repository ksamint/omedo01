# MVP 范围（已确认）

## 阶段一 — 训中现场 + 基础游戏化（当前实现目标）

1. 培训师创建 `LiveSession`（目标：60 秒内可分享 `joinCode` / QR）。  
2. 学员扫码或链接加入（支持匿名 `Participant`，可选后续绑定 `User`）。  
3. 实时投票：`POLL`（单选 / 多选）、`WORD_CLOUD`。  
4. 知识竞赛：`QUIZ` + 计时 + `Score` 排行榜。  
5. `QA`：匿名提问 + 点赞排序（数据结构由 `Activity` + `ActivityResponse` 承载）。  
6. 大屏模式：独立路由 `presenter` / `display`（UI 占位，实时通道后续接 WebSocket）。  
7. 基础积分与榜：`Score.points`、`Score.streakCount`。  
8. Session 结束导出：CSV / JSON（接口后续实现，字段与 Prisma 模型对齐）。  

## 阶段二（不在首期代码范围）

- 训前报名、前测、预习任务与 `TrainingProgram` 全流程编排 UI。  
- 训后报告、证书、行动计划追踪。  
- 组织级 BI 看板、SSO、企业微信 / 钉钉深度集成。  
- Redis 排行榜、Socket.io 房间广播（技术选型已写在 `docs/tech-stack-decisions.md`）。  
