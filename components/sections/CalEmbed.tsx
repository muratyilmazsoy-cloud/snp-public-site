type CalEmbedProps = { title: string; fallbackText: string };

export function CalEmbed({ title, fallbackText }: CalEmbedProps) {
  const calUrl = process.env.CAL_COM_URL;
  if (!calUrl) {
    return <div className="border border-gray-2/40 bg-navy-2 p-6 text-gray-1">{fallbackText}</div>;
  }

  return (
    <section className="space-y-4">
      <h3 className="text-2xl font-medium">{title}</h3>
      <iframe src={calUrl} title={title} className="h-[640px] w-full border border-gray-2/40 bg-navy-2" />
    </section>
  );
}
