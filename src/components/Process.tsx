export function Process() {
  const steps = [
    { n: "01", h: "Échange initial", p: "On fait le point sur votre organisation actuelle et ce qui coince aujourd'hui." },
    { n: "02", h: "Diagnostic", p: "J'identifie ce qui peut être structuré, simplifié, ou délégué en priorité." },
    { n: "03", h: "Mise en place", p: "Rédaction des process, mise en place des outils ou prise en charge des tâches administratives." },
    { n: "04", h: "Suivi", p: "On ajuste dans la durée, au rythme réel de votre activité." },
  ];
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Comment ça se passe</span>
          <h2>Quatre étapes, un rythme qui reste le vôtre</h2>
          <p>Pas de méthode standard imposée : chaque étape s'ajuste à votre activité et à votre disponibilité.</p>
        </div>
        <div className="timeline">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="snum">{s.n}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
