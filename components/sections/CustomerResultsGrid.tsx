const fallback=[
  {industry:'MANUFACTURING',metric:'40% less audit prep time',context:'A mid-sized manufacturer reduced quarterly audit prep from 5 weeks to 3 weeks.',year:'2025'},
  {industry:'LOGISTICS',metric:'31% faster reconciliations',context:'A logistics network stabilized month-end close through always-on matching.',year:'2025'},
  {industry:'HOLDING',metric:'22% better cash visibility',context:'A holding group synchronized portfolio finance on one live pulse.',year:'2025'},
];
export function CustomerResultsGrid(){return <section className="grid gap-4 md:grid-cols-3">{fallback.map((c)=> <article key={c.metric} className="card-surface p-6"><p className="eyebrow text-cyan">{c.industry}</p><h3>{c.metric}</h3><p className="mt-3 text-gray-1">{c.context}</p><p className="mt-4 text-xs text-gray-2">Anonymized · {c.year}</p></article>)}</section>}
