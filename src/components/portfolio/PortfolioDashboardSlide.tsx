import type { DashboardVariant } from "@/lib/portfolio";

type Kpi = { label: string; value: string; sub?: string };

const dashboards: Record<
  DashboardVariant,
  { title: string; range: string; kpis: Kpi[]; rows: string[][]; highlight?: string }
> = {
  "med-spa-summary": {
    title: "MED SPA · Meta Ads Case Study",
    range: "Jan 1 – Jan 31 · USA",
    kpis: [
      { label: "Amount spent", value: "$34,568" },
      { label: "Leads", value: "1,089" },
      { label: "Cost per lead", value: "$31.72" },
      { label: "Appointments", value: "482" },
      { label: "Purchases", value: "312" },
      { label: "ROAS", value: "9.18x" },
    ],
    rows: [
      ["Botox campaign", "$12,456", "392", "$31.78", "9.62x"],
      ["Laser hair removal", "$9,786", "308", "$31.76", "9.34x"],
      ["Skin rejuvenation", "$7,689", "241", "$31.93", "8.91x"],
      ["HydraFacial offer", "$4,637", "148", "$31.33", "8.32x"],
    ],
    highlight: "Consult blocks filled 3 weeks straight after creative refresh.",
  },
  "med-spa-leads": {
    title: "MED SPA · Lead quality breakdown",
    range: "Last 30 days",
    kpis: [
      { label: "Instant forms", value: "64%" },
      { label: "Calls from ads", value: "22%" },
      { label: "CPL (qualified)", value: "$28.40" },
      { label: "Booked rate", value: "44%" },
    ],
    rows: [
      ["Injectables", "412 leads", "$29.10 CPL", "46% booked"],
      ["Laser packages", "308 leads", "$30.55 CPL", "41% booked"],
      ["Skin / facials", "241 leads", "$33.20 CPL", "39% booked"],
      ["Retarget warm", "128 leads", "$19.80 CPL", "52% booked"],
    ],
  },
  "home-services-calls": {
    title: "HOME SERVICES · Call & form leads",
    range: "Q2 · Phoenix metro",
    kpis: [
      { label: "Total leads", value: "847" },
      { label: "Phone calls", value: "391" },
      { label: "Cost per lead", value: "$38.20" },
      { label: "Booked jobs", value: "214" },
    ],
    rows: [
      ["Cleaning · Meta", "284", "$36.10", "88 jobs"],
      ["Cleaning · Google", "196", "$41.50", "61 jobs"],
      ["Deep clean promo", "142", "$34.80", "39 jobs"],
      ["Retargeting", "225", "$22.40", "26 jobs"],
    ],
    highlight: "Wrong-number leads cut week two.",
  },
  "home-services-local": {
    title: "CONTRACTORS · Local lead gen",
    range: "30-day sprint",
    kpis: [
      { label: "Spend", value: "$8,420" },
      { label: "Estimate requests", value: "156" },
      { label: "Cost per lead", value: "$53.90" },
      { label: "Closed jobs", value: "41" },
    ],
    rows: [
      ["Roof repair search", "62", "$48.20", "18 closed"],
      ["Remodel broad", "44", "$61.30", "9 closed"],
      ["Meta instant form", "50", "$55.10", "14 closed"],
    ],
  },
  "hvac-seasonal": {
    title: "HVAC · Summer peak push",
    range: "May – Aug",
    kpis: [
      { label: "Spend", value: "$12,600" },
      { label: "Booked jobs", value: "94" },
      { label: "Cost per job", value: "$134" },
      { label: "Call conversion", value: "18.2%" },
    ],
    rows: [
      ["AC repair search", "41 jobs", "$128", "Top zip clusters"],
      ["Maintenance plan", "28 jobs", "$142", "Offer-led"],
      ["Meta lead forms", "25 jobs", "$151", "Geo fenced"],
    ],
    highlight: "Service-area map rebuilt week one.",
  },
  "hvac-search": {
    title: "HVAC · Google Search structure",
    range: "90-day view",
    kpis: [
      { label: "Clicks", value: "18.4K" },
      { label: "Conversions", value: "612" },
      { label: "Avg CPC", value: "$4.82" },
      { label: "Conv. rate", value: "12.4%" },
    ],
    rows: [
      ["Emergency AC", "214 conv.", "$6.10 CPC", "High intent"],
      ["Install quotes", "168 conv.", "$5.40 CPC", "Mid funnel"],
      ["Brand defense", "96 conv.", "$1.20 CPC", "Cheap insurance"],
    ],
  },
  "ecommerce-roas": {
    title: "E-COMMERCE · Purchase scale",
    range: "EU store · 69 campaigns",
    kpis: [
      { label: "Spend", value: "€43,744" },
      { label: "Purchases", value: "8,294" },
      { label: "Cost / purchase", value: "€5.27" },
      { label: "ROAS", value: "4.62x" },
    ],
    rows: [
      ["Prospecting ASC", "3.1K purchases", "€4.90 CPP", "5.1x ROAS"],
      ["Retarget 7-day", "2.4K purchases", "€3.80 CPP", "6.3x ROAS"],
      ["Catalog DPA", "1.9K purchases", "€6.10 CPP", "4.0x ROAS"],
    ],
    highlight: "ROAS stable within first 2 months of rebuild.",
  },
  "google-search": {
    title: "GOOGLE ADS · Search performance",
    range: "12 months",
    kpis: [
      { label: "Conversions", value: "4,269" },
      { label: "Conv. rate", value: "12.59%" },
      { label: "Cost / conv.", value: "$25" },
      { label: "Clicks", value: "37K+" },
    ],
    rows: [
      ["Brand", "892 conv.", "$0.42 CPC", "Defensive"],
      ["High intent non-brand", "2.4K conv.", "$0.61 CPC", "Scale"],
      ["Competitor conquest", "410 conv.", "$1.85 CPC", "Test"],
    ],
  },
  "google-local": {
    title: "GOOGLE ADS · Local services",
    range: "Multi-city",
    kpis: [
      { label: "Calls", value: "1,240" },
      { label: "Direction requests", value: "680" },
      { label: "CPL", value: "$42" },
      { label: "ROAS (value)", value: "18.4x" },
    ],
    rows: [
      ["Chicago landscaping", "410 leads", "$39 CPL", "Tom V. market"],
      ["Denver cleaning", "284 leads", "$36 CPL", "Holly Burns market"],
      ["Phoenix HVAC", "312 leads", "$48 CPL", "Mike R. market"],
    ],
  },
  "meta-leads": {
    title: "META ADS · Lead form scale",
    range: "Lead gen accounts",
    kpis: [
      { label: "Leads", value: "2,180" },
      { label: "CPL", value: "$27.60" },
      { label: "CTR", value: "2.14%" },
      { label: "Frequency", value: "2.1" },
    ],
    rows: [
      ["Instant forms", "1.4K leads", "$25.10", "Primary"],
      ["Click to call", "480 leads", "$31.80", "Mobile heavy"],
      ["Messenger", "300 leads", "$34.50", "Test"],
    ],
  },
  "meta-retarget": {
    title: "META ADS · Retargeting funnel",
    range: "Warm audiences",
    kpis: [
      { label: "Warm CPL", value: "$14.20" },
      { label: "Booked rate", value: "38%" },
      { label: "Spend share", value: "22%" },
      { label: "ROAS lift", value: "+41%" },
    ],
    rows: [
      ["Site visitors 14d", "420 leads", "$12.80", "Highest intent"],
      ["Form abandoners", "188 leads", "$16.40", "Recovery"],
      ["Video viewers 50%", "96 leads", "$18.90", "Mid warm"],
    ],
    highlight: "Retargeting turned off waste on cold-only accounts.",
  },
};

export function PortfolioDashboardSlide({
  variant,
}: {
  variant: DashboardVariant;
}) {
  const d = dashboards[variant];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 shadow-2xl">
      <div className="border-b border-slate-200 bg-white/90 px-5 py-4 sm:px-6">
        <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
          Confidential client work
        </p>
        <h3 className="mt-1 text-lg font-bold tracking-tight sm:text-xl">
          {d.title}
        </h3>
        <p className="text-xs text-slate-500">{d.range}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 border-b border-slate-200 bg-slate-50/80 p-3 sm:grid-cols-3 sm:gap-3 sm:p-4">
        {d.kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-lg border border-slate-200/80 bg-white px-3 py-2 shadow-sm"
          >
            <p className="text-[10px] font-medium text-slate-500">{kpi.label}</p>
            <p className="text-base font-bold text-slate-900 sm:text-lg">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto p-3 sm:p-4">
        <table className="w-full min-w-[480px] text-left text-[11px] sm:text-xs">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500">
              <th className="pb-2 pr-3 font-semibold">Campaign</th>
              <th className="pb-2 pr-3 font-semibold">Spend / Vol.</th>
              <th className="pb-2 pr-3 font-semibold">Leads</th>
              <th className="pb-2 font-semibold">Result</th>
            </tr>
          </thead>
          <tbody>
            {d.rows.map((row) => (
              <tr
                key={row[0]}
                className="border-b border-slate-100 last:border-0"
              >
                {row.map((cell, i) => (
                  <td
                    key={cell}
                    className={`py-2 pr-3 ${i === row.length - 1 ? "font-semibold text-teal-700" : "text-slate-700"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {d.highlight ? (
        <div className="border-t border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-medium text-emerald-800 sm:text-sm">
          {d.highlight}
        </div>
      ) : null}

      <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-2 text-[10px] text-slate-400">
        <span>Marketing with Asmat</span>
        <span>marketingwithasmat.pro/portfolio</span>
      </div>
    </div>
  );
}
