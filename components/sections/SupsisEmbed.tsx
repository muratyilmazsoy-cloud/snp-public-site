"use client";

export function SupsisEmbed() {
  const widgetId = process.env.NEXT_PUBLIC_SUPSIS_WIDGET_ID;

  if (!widgetId) {
    return <div className="border border-gray-2/40 bg-navy-2 p-6 text-gray-1">Bot loading...</div>;
  }

  return (
    <div className="border border-gray-2/40 bg-navy-2 p-6">
      <script async src={`https://widget.supsis.ai/embed.js?id=${widgetId}`} />
      <div id="supsis-widget-container" className="min-h-[480px]" />
    </div>
  );
}
