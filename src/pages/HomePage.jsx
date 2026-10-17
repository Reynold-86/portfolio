import { useNavigate } from 'react-router-dom';
import { projects, personalInfo } from '../content';

export function HomePage() {
  const navigate = useNavigate();
  const featured = projects.slice(0, 3);

  return (
    <div className="portfolio-page">
      <section className="hero-panel">
        <div className="hero-topbar">
          <div className="brand-mark">
            Web Designer
            <span>Digital Creator</span>
          </div>
          <div className="availability-pill">
            Available for freelance
            <span className="pill-dot" aria-hidden="true" />
          </div>
        </div>

        <div className="hero-layout">
          <div className="hero-copy-wrap">
            <div className="hero-backdrop" aria-hidden="true">
              PORTFOLIO
            </div>

            <div className="hero-copy">
              <p className="hello-tag">Hello, I&apos;m</p>
              <h1>
                REYNOLD
                <span>MASHINGA</span>
              </h1>
              <p className="role-line">WEB DESIGNER &amp; UI/UX CREATOR</p>

              <div className="hero-bio-box">
                <p>
                  I design and build stylish, user-focused web experiences that combine creativity with strategy.
                  Passionate about clean design, smooth interactions, and attention to detail.
                </p>
              </div>
            </div>
          </div>

          <div className="portrait-frame">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
              alt="Portrait of Reynold"
            />
          </div>

          <div className="hero-stats">
            <div className="stat-card accent">
              <span className="stat-emoji">✦</span>
              <p>
                Turning ideas
                <br />
                into digital experiences.
              </p>
            </div>

            <div className="stat-row">
              <div className="stat-block">
                <strong>3+</strong>
                <span>Years Experience</span>
              </div>
              <div className="stat-block">
                <strong>40+</strong>
                <span>Projects Completed</span>
              </div>
              <div className="stat-block">
                <strong>20+</strong>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-panel">
        <div className="section-header">
          <h2>SELECTED PROJECTS</h2>
          <button type="button" onClick={() => navigate('/projects')}>
            VIEW ALL PROJECTS <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="feature-grid">
          {featured.map((project, index) => (
            <article key={project.id} className="project-card" onClick={() => navigate('/projects')}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-copy">
                <div className="project-header">
                  <span className="project-label">{project.category}</span>
                  <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-grid">
        <div className="info-panel education-panel">
          <h2>EDUCATION &amp; SKILLS</h2>

          <div className="edu-stack">
            <div className="edu-item">
              <h3>B.Sc. in Visual Communication Design</h3>
              <span>2020 – 2023</span>
            </div>
            <div className="edu-item">
              <h3>UI/UX Design Certification</h3>
              <span>2023</span>
            </div>
          </div>

          <div className="skills-list">
            {['Web Design', 'UI/UX', 'Figma', 'Photoshop', 'Illustrator', 'React', 'Tailwind', 'HTML/CSS'].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="info-panel process-panel">
          <h2>WORK PROCESS</h2>
          <ol className="process-list">
            <li><span>01</span><p>Understand goals, audience, and project requirements.</p></li>
            <li><span>02</span><p>Plan structure, wireframes, and the right visual direction.</p></li>
            <li><span>03</span><p>Create polished UI concepts with a strong focus on usability.</p></li>
            <li><span>04</span><p>Build responsive interfaces and refine the user experience.</p></li>
            <li><span>05</span><p>Deliver a final product with testing, polish, and performance in mind.</p></li>
          </ol>
        </div>

        <div className="quote-panel">
          <div className="quote-mark">“</div>
          <p>
            Good design is not just how it looks, but how it works.
          </p>
          <span>Reynold</span>
        </div>
      </section>

      <section className="cta-panel">
        <div className="cta-copy">
          <h2>LET&apos;S WORK TOGETHER</h2>
          <p>
            I&apos;m currently open for freelance work and collaborative projects. Let&apos;s create something meaningful.
          </p>
        </div>

        <div className="contact-list">
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <div className="cta-visual" aria-hidden="true">
          <div className="device-panel">
            <div className="screen" />
            <div className="base" />
          </div>
        </div>
      </section>
    </div>
  );
}
