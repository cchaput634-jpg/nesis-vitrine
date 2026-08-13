import { FanSvg } from "./FanSvg";

export function Hero() {
  return (
    <div className="hero-shell">
      <FanSvg className="fan" />

      <header className="nav">
        <div className="nav-inner">
          <a href="#" className="brand">
            <span className="brand-mark">
              <img src="/nesis-logo.png" alt="Nesis" />
            </span>
            Nesis
          </a>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Méthode</a>
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn btn-primary">
            Prendre contact
          </a>
        </div>
      </header>

      <div className="hero-body">
        <div className="hero-copy">
          <span className="eyebrow">Assistance administrative &amp; process SAV</span>
          <h1>
            <span className="line">On accompagne,</span>
            <span className="line">
              <span className="accent">on simplifie,</span>
            </span>
            <span className="line">vous respirez.</span>
          </h1>
          <p className="hero-lede">
            Nesis crée et structure vos process pour tout type d'entreprise, et propose une
            assistance administrative flexible aux PME, artisans et TPE qui n'ont pas assez de
            charge pour embaucher à temps plein.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">
              Prendre contact
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn btn-ghost-dark">
              Découvrir les services
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-ring"></div>
          <div className="visual-ring r2"></div>
          <div className="visual-ring r3"></div>
          <div className="visual-N">
            <img src="/nesis-logo.png" alt="" />
          </div>
          <div className="visual-badge badge-1">
            <span className="dot"></span> Process sur-mesure
          </div>
          <div className="visual-badge badge-2">
            <span className="dot"></span> Sans embauche
          </div>
          <div className="visual-badge badge-3">
            <span className="dot"></span> Expertise SAV
          </div>
        </div>
      </div>
    </div>
  );
}
