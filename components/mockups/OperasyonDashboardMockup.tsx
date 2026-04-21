export function OperasyonDashboardMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`dashboard-mockup ${compact ? "dashboard-mockup-compact" : ""}`}>
      <div className="dashboard-sidebar">
        <p className="eyebrow text-cyan">SnP</p>
        <h4 className="text-base">Operasyon 4.0</h4>
        <ul className="mt-4 space-y-1 text-xs text-gray-1">
          {['Overview','Compliance','Auditing','Investment','Potential','MSE','Settings'].map((item, i) => (
            <li key={item} className={`rounded px-2 py-1 ${i === 0 ? 'bg-cyan/20 text-cyan' : ''}`}>{item}</li>
          ))}
        </ul>
        <p className="mt-auto text-xs text-gray-1">CFO · Standards</p>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-topbar">
          <div className="dashboard-search">Search...</div>
          <div className="dashboard-live"><span className="live-dot" /> Karma signal · 12:48</div>
        </div>
        <div className="dashboard-grid">
          <article className="dashboard-card">
            <p className="eyebrow text-cyan">Monthly karma score</p>
            <p className="font-mono text-5xl">94/100</p>
            <svg viewBox="0 0 160 40" className="h-10 w-full"><path d="M0 30 L25 28 L45 20 L64 22 L86 14 L108 18 L130 10 L160 8" stroke="#4ab8ff" strokeWidth="2" fill="none"/></svg>
          </article>
          <article className="dashboard-card">
            <p className="eyebrow text-cyan">Company pulse — last 30 days</p>
            <svg viewBox="0 0 220 92" className="h-24 w-full"><path d="M0 72 L30 70 L60 52 L90 56 L120 40 L150 44 L180 26 L220 32" stroke="#4ab8ff" strokeWidth="2" fill="none"/><circle cx="60" cy="52" r="3" fill="#f5a524"/><circle cx="150" cy="44" r="3" fill="#f5a524"/></svg>
          </article>
          <article className="dashboard-card">
            <p className="eyebrow text-cyan">Karma stream</p>
            <ul className="space-y-1 text-xs text-gray-1">
              <li>VAT filing completed · 2m ago</li>
              <li>Bank reconciliation auto-matched · 5m ago</li>
              <li>Capex request approved · 12m ago</li>
              <li>Audit flag resolved · 28m ago</li>
              <li>Payroll batch processed · 1h ago</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
}
