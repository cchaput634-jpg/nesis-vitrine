export function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Nos services</span>
          <h2>Trois expertises, un seul interlocuteur</h2>
          <p>
            La création de process et le service client sont ouverts à toutes les entreprises.
            L'assistance administrative, elle, s'adresse plutôt aux PME, artisans et TPE qui n'ont
            pas encore assez de volume pour embaucher à temps plein.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="num">01 —</div>
            <h3>Création de process</h3>
            <p>
              Accompagnement expert pour structurer et fiabiliser vos process internes, pour tout
              type d'entreprise, du premier échange au suivi.
            </p>
          </div>
          <div className="service-card">
            <div className="num">02 —</div>
            <h3>Assistance administrative</h3>
            <p>
              Un appui flexible pour les petites structures qui n'ont pas encore la charge ni le
              budget pour embaucher à temps plein.
            </p>
          </div>
          <div className="service-card">
            <div className="num">03 —</div>
            <h3>Spécialiste service client</h3>
            <p>
              Une vraie expertise du relationnel client, appliquée à vos process SAV : gestion des
              réclamations, réponses aux clients, suivi des dossiers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
