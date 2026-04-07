import './styles/global.css';
import './App.css';

import Header from './components/Header/index';
import ProjectCard from './components/ProjectCard/index';
import { projects, personalInfo } from './data/portfolioData';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <section id="hero" className="hero section">
          <div className="container hero__inner">
            <div className="hero__badge reveal">
              <span className="hero__badge-dot" />
              Disponível para novos projetos
            </div>

            <h1 className="hero__title reveal reveal-delay-1">
              <span className="hero__title-name">{personalInfo.name}</span>
              <br />
              <span className="hero__title-role">{personalInfo.role}</span>
            </h1>

            <p className="hero__headline reveal reveal-delay-2">
              {personalInfo.headline}
            </p>

            <div className="hero__ctas reveal reveal-delay-3">
              <a href="#projects" className="btn btn--primary">
                Ver Projetos
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#contact" className="btn btn--ghost">Entrar em Contato</a>
            </div>

            <div className="hero__skills reveal reveal-delay-4">
              {personalInfo.skills.map(skill => (
                <span key={skill} className="hero__skill-chip">{skill}</span>
              ))}
            </div>
          </div>

          <div className="hero__orb" aria-hidden="true" />
        </section>

        <section id="about" className="about section">
          <div className="container">
            <p className="section-label">Sobre mim</p>
            <h2 className="section-title">Tecnologia orientada a impacto</h2>
            <div className="about__grid">
              <p className="section-subtitle about__bio reveal">{personalInfo.bio}</p>
              <div className="about__stats reveal reveal-delay-1">
                {[
                  { value: '3+', label: 'Projetos profissionais entregues' },
                  { value: '1.5+', label: 'Anos de experiência' },
                ].map(stat => (
                  <div key={stat.label} className="about__stat">
                    <span className="about__stat-value">{stat.value}</span>
                    <span className="about__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="container">
            <p className="section-label">Portfólio</p>
            <h2 className="section-title">Projetos em Destaque</h2>
            <p className="section-subtitle">
              Uma seleção de sistemas, plataformas e experimentos que demonstram minha abordagem técnica e criativa.
            </p>

            <div className="projects__grid">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container">
            <div className="contact__card reveal">
              <p className="section-label">Contato</p>
              <h2 className="contact__title">Vamos construir algo juntos?</h2>
              <p className="contact__sub">
                Estou aberto a oportunidades, freelas e conversas sobre tecnologia.
                Não hesite em entrar em contato.
              </p>
              <div className="contact__links">
                <a
                  href={`mailto:${personalInfo.social.email}`}
                  className="btn btn--primary"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Enviar E-mail: <br /> {personalInfo.social.email}
                </a>
                <a
                  href={personalInfo.social.github}
                  className="btn btn--ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} Davi Machado — Todos os direitos reservados.</span>
          <span className="footer__made">
            Feito com React + TypeScript + CSS
          </span>
        </div>
      </footer>
    </>
  );
}
