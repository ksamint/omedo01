import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DEMO_JOIN_CODE = "DEMO01";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-20">
      <header className="space-y-3">
        <p className="text-muted-foreground text-sm font-medium tracking-wide">全周期 · 现场优先</p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">线下培训游戏化互动平台</h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
          对标 Slido 级低摩擦加入，叠加 Kahoot 式竞赛与企学宝式训前训后数据闭环（首期实现训中骨架与 Prisma
          领域模型）。
        </p>
      </header>

      <section className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link className={cn(buttonVariants())} href={`/s/${DEMO_JOIN_CODE}`}>
          参与者视图（示例）
        </Link>
        <Link className={cn(buttonVariants({ variant: "secondary" }))} href={`/s/${DEMO_JOIN_CODE}/presenter`}>
          讲师控台（示例）
        </Link>
        <Link className={cn(buttonVariants({ variant: "outline" }))} href={`/s/${DEMO_JOIN_CODE}/display`}>
          观众大屏（示例）
        </Link>
      </section>

      <section className="space-y-4 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="text-lg font-medium">文档（仓库内）</h2>
        <ul className="text-muted-foreground list-inside list-disc space-y-2 text-sm leading-relaxed">
          <li>
            <code className="text-foreground">docs/competitive-positioning.md</code> — 竞品与差异化
          </li>
          <li>
            <code className="text-foreground">docs/roles-and-scenarios.md</code> — 角色与场景优先级
          </li>
          <li>
            <code className="text-foreground">docs/mvp-scope.md</code> — MVP 边界
          </li>
          <li>
            <code className="text-foreground">docs/tech-stack-decisions.md</code> — 技术栈
          </li>
          <li>
            <code className="text-foreground">cursor_project_rules/implementation-plan.mdc</code> — 实施记录
          </li>
        </ul>
      </section>
    </main>
  );
}
