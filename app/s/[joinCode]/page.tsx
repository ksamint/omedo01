type ParticipantJoinPageProps = {
  params: Promise<{ joinCode: string }>;
};

export default async function ParticipantJoinPage({ params }: ParticipantJoinPageProps) {
  const { joinCode } = await params;
  return (
    <main className="mx-auto flex min-h-full max-w-lg flex-col gap-6 px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">加入会话</h1>
      <p className="text-muted-foreground text-sm">
        会话代码：<span className="font-mono font-medium text-foreground">{joinCode}</span>
      </p>
      <p className="text-muted-foreground text-sm">
        参与者 UI（昵称、活动列表、答题）将在此路由实现；数据模型见{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">Participant</code> /{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">Activity</code>。
      </p>
    </main>
  );
}
