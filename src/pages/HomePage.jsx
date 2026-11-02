import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { education, projects, personalInfo } from '../content';

export function HomePage() {
  const navigate = useNavigate();
  const portraitRef = useRef(null);
  const [portraitInView, setPortraitInView] = useState(false);
  const graphicFeature = projects.find((project) => project.category === 'Graphic Design');
  const featured = [...projects.slice(0, 2), ...(graphicFeature ? [graphicFeature] : [])];
  const disciplines = ['Web development', 'Graphic design', 'IT support', 'Creative thinking'];

  useEffect(() => {
    const portrait = portraitRef.current;
    if (!portrait) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setPortraitInView(entry.isIntersecting),
      { threshold: 0.4 },
    );

    observer.observe(portrait);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-page motion-home">
      <section className="hero-panel type-hero">
        <div className="hero-topbar">
          <div className="brand-mark">
            Independent creative
            <span>Zimbabwe · Available worldwide</span>
          </div>
          <div className="availability-pill">
            <span className="availability-status" />
            Available for select projects
            <span className="pill-dot" aria-hidden="true" />
          </div>
        </div>

        <div className="hero-layout">
          <div className="hero-copy-wrap type-copy">
            <div className="hero-copy">
              <p className="hello-tag hero-kicker">
                <span>01</span> Reynold Mashininga
              </p>
              <h1 aria-label="Ideas into impact">
                <span className="headline-line headline-line--serif" aria-hidden="true">Ideas</span>
                <span className="headline-line" aria-hidden="true">into</span>
                <span className="headline-line headline-line--accent" aria-hidden="true">impact<span className="headline-period">.</span></span>
              </h1>
              <p className="role-line">Digital design <span>·</span> Web <span>·</span> Visual stories</p>

              <div className="hero-bio-box">
                <p>
                  I bring thoughtful ideas to life through expressive design, purposeful technology, and details that make people feel something.
                </p>
              </div>

              <div className="hero-actions">
                <button type="button" className="hero-primary-action" onClick={() => navigate('/projects')}>
                  Explore selected work <span aria-hidden="true">↗</span>
                </button>
                <button type="button" className="hero-secondary-action" onClick={() => navigate('/contact')}>
                  Start a conversation
                </button>
              </div>

              <a className="hero-scroll-cue" href="#selected-work">
                <span className="scroll-cue-line" aria-hidden="true" />
                Scroll to explore
              </a>
            </div>
          </div>

          <div
            ref={portraitRef}
            className={`portrait-frame type-portrait${portraitInView ? ' is-pulsing' : ''}`}
          >
            <div className="portrait-orbit" aria-hidden="true" />
            <img
              src="/portfolio-portrait.jpg"
              alt="Portrait of Reynold"
            />
            <span className="portrait-caption">Design · Build · Connect</span>
            <span className="portrait-index" aria-hidden="true">RM<br />©26</span>
          </div>

          <div className="hero-stats">
            <div className="stat-row">
              <div className="stat-block">
                <strong>01</strong>
                <span>Curiosity first</span>
              </div>
              <p>Good work starts with asking better questions.</p>
            </div>
            <span className="hero-side-note">A multidisciplinary practice<br />in design and technology</span>
          </div>
        </div>
      </section>

      <div className="discipline-marquee" role="img" aria-label={disciplines.join(' · ')}>
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {disciplines.map((discipline) => (
                <span className="marquee-item" key={`${copy}-${discipline}`}>
                  {discipline}<span>✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="projects-panel graphic-showcase" id="selected-work">
        <div className="section-header">
          <div>
            <p className="section-kicker">02 / Selected work</p>
            <h2>Made to <span>make a mark.</span></h2>
          </div>
          <button type="button" onClick={() => navigate('/projects')}>
            All projects <span aria-hidden="true">↗</span>
          </button>
        </div>
        <div className="feature-grid">
          {featured.map((project, index) => (
            <button
              type="button"
              key={project.id}
              className={`project-card${project.category === 'Graphic Design' ? ' project-card--portrait' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate('/projects')}
            >
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
              <span className="project-open-mark" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </section>

      <section className="detail-grid">
        <div className="info-panel education-panel">
          <p className="section-kicker">03 / Foundation</p>
          <h2>Always<br /><span>in progress.</span></h2>

          <div className="edu-stack">
            {education.map((item, index) => (
              <article className="edu-item" key={item.degree} style={{ animationDelay: `${index * 90}ms` }}>
                <span className="edu-index">0{index + 1}</span>
                <div>
                  <h3>{item.degree}</h3>
                  <div className="edu-meta">
                    <span>{item.institution}</span>
                    <span className="edu-type">{item.period}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="skills-list">
            {['Web Design', 'UI/UX', 'Figma', 'Photoshop', 'Illustrator', 'React', 'Tailwind', 'HTML/CSS'].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="info-panel process-panel">
          <p className="section-kicker">04 / The approach</p>
          <h2>Think. Make.<br /><span>Make better.</span></h2>
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
          <p className="section-kicker">05 / Have a good one?</p>
          <h2>Let&apos;s make<br /><span>something matter.</span></h2>
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
