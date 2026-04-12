type AudienceDisplayPageProps = {
  params: Promise<{ joinCode: string }>;
};

export default async function AudienceDisplayPage({ params }: AudienceDisplayPageProps) {
  const { joinCode } = await params;
  return (
    <main className="flex min-h-full flex-col items-center justify-center gap-4 bg-background px-6 py-24 text-center">
      <p className="text-muted-foreground text-sm uppercase tracking-widest">Audience display</p>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{joinCode}</h1>
      <p className="text-muted-foreground max-w-xl text-sm">
        全屏投射视图（投票结果、词云、排行榜）将在此路由渲染；建议使用独立浏览器窗口全屏展示。
      </p>
    </main>
  );
}
