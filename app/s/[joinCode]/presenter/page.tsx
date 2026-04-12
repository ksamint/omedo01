type PresenterConsolePageProps = {
  params: Promise<{ joinCode: string }>;
};

export default async function PresenterConsolePage({ params }: PresenterConsolePageProps) {
  const { joinCode } = await params;
  return (
    <main className="mx-auto flex min-h-full max-w-4xl flex-col gap-6 px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">讲师控台</h1>
      <p className="text-muted-foreground text-sm">
        会话代码：<span className="font-mono font-medium text-foreground">{joinCode}</span>
      </p>
      <p className="text-muted-foreground text-sm">
        活动队列、大屏同步、导出控制将在此实现；需校验{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">LiveSession.hostUserId</code> 与当前登录用户。
      </p>
    </main>
  );
}
