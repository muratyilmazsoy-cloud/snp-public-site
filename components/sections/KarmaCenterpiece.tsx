type KarmaCenterpieceProps = {
  quote: string;
  translation?: string;
  line: string;
};

export function KarmaCenterpiece({ quote, translation, line }: KarmaCenterpieceProps) {
  return (
    <section className="karma-centerpiece relative flex min-h-screen flex-col items-center justify-center overflow-hidden border border-navy-edge/50 bg-navy-0 px-6 py-16 text-center">
      <div className="karma-dot" />
      <div className="karma-rings" />
      <span className="karma-label karma-label-top eyebrow">Physics</span>
      <span className="karma-label karma-label-right eyebrow">Philosophy</span>
      <span className="karma-label karma-label-bottom eyebrow">Biology</span>
      <span className="karma-label karma-label-left eyebrow">Spirituality</span>

      <div className="relative z-10 max-w-5xl space-y-6">
        <h1>{quote}</h1>
        {translation ? <p className="text-gray-1">{translation}</p> : null}
        <p className="mx-auto max-w-3xl text-gray-1">{line}</p>
      </div>
    </section>
  );
}
