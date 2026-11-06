const hosts: Record<string, string> = {
  "Google Ads": "ads.google.com",
};

export function BrowserFrame({
  platform,
  children,
}: {
  platform: string;
  children: React.ReactNode;
}) {
  const host = hosts[platform] ?? "adsmanager.facebook.com";
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#16161f] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </span>
        <span className="mx-auto truncate rounded-md bg-white/[0.05] px-3 py-1 text-[11px] text-zinc-500">
          {host}
        </span>
        <span className="w-10" />
      </div>
      <div className="relative overflow-hidden bg-white">{children}</div>
    </div>
  );
}
