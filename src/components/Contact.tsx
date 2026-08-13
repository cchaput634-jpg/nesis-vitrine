import { FanSvg } from "./FanSvg";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <FanSvg
        className="fan fan-right"
        gradientId="fg-contact"
        paths={[
          "M 0 0 Q 200 190 800 260",
          "M 0 0 Q 200 310 800 520",
          "M 0 0 Q 200 430 800 780",
          "M 0 0 Q 180 490 720 900",
        ]}
      />
      <div className="wrap contact-inner">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Parlons de votre besoin</h2>
          <p>Un premier échange de 20 minutes, sans engagement, pour voir concrètement comment je peux vous aider.</p>
        </div>
        <div className="contact-card">
          <div className="contact-row">
            <div className="ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20999D" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </div>
            <div>
              <span className="lbl">Email</span>
              <a href="mailto:societe.nesis@gmail.com">societe.nesis@gmail.com</a>
            </div>
          </div>
          <div className="contact-row">
            <div className="ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20999D" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <span className="lbl">Téléphone</span>
              <a href="tel:+33752049677">07 52 04 96 77</a>
            </div>
          </div>
          <a href="mailto:societe.nesis@gmail.com" className="btn btn-primary">
            Écrire un email
          </a>
        </div>
      </div>
    </section>
  );
}
