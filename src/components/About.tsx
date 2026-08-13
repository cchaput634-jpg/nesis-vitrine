export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-inner">
          <div className="about-photo-wrap">
            <div className="about-photo-ring"></div>
            <div className="about-photo">
              <img src="/charlotte.jpg" alt="Charlotte Chaput" />
            </div>
          </div>
          <div className="about-text">
            <span className="eyebrow">À propos</span>
            <h2>Charlotte Chaput</h2>
            <div className="role">Experte Service Client &amp; Administratif</div>
            <p>
              Après plusieurs années à travailler dans l'administratif et le service client pour
              différentes entreprises, je lance aujourd'hui Nesis pour mettre cette expertise au
              service des structures qui n'ont pas toujours les moyens d'un poste dédié à temps
              plein.
            </p>
            <p>
              Mon approche : comprendre votre activité avant de proposer quoi que ce soit, puis
              construire des solutions personnalisées, adaptées à votre réalité quotidienne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
