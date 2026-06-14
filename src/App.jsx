import React, { useState } from "react";
import "./App.css";
import profile from "./profile.png";

const NAV = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxn32MoMkSQMqkhUvWewWh96zM-TajVHL396l32JAL4ID110pR6hsLPVkyGpsZ2Mt8Gzw/exec";

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
      if (result.result === "success") {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="app">
      {/* Top bar */}
      <header className="topbar">
        <div className="logo">
          <span className="bracket">&lt;</span>AT
          <span className="bracket">/&gt;</span>
        </div>
        <nav className="nav-desktop">
          {NAV.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="nav-link"
            >
              {item}
            </button>
          ))}
        </nav>
        <button
          className="burger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile sidebar - slides left to right */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        <nav className="nav-mobile">
          {NAV.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="nav-link-mobile"
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Hero / About */}
      <section id="about" className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">$ whoami</p>
            <h1>
              Aswin S. Thampalakad
              <span className="cursor">_</span>
            </h1>
            <p className="role">
              Full Stack Software Engineer — 5+ Years Experience
            </p>
            <p className="intro">
              Result-oriented engineer architecting and scaling web and mobile
              applications. Expertise in the MERN stack, Python/Django, and AWS
              cloud infrastructure — from leading dev teams to shipping SaaS
              products end to end.
            </p>
            <div className="hero-actions">
              <a
                href="#contact"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("Contact");
                }}
              >
                Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/aswin-s-20b6ab411"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                LinkedIn ↗
              </a>
            </div>
            <div className="meta-row">
              <span> Kottayam, KL / Remote</span>
              <span>📧 aswinst.dev6477@gmail.com</span>
              <span>📱 +91-9526374812</span>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-frame">
              <img src={profile} alt="Aswin S. Thampalakad" />
            </div>
            <div className="badge">5+ yrs</div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">
          <span className="num">01</span> Technical Skills
        </h2>
        <div className="skills-grid">
          {[
            {
              label: "Languages",
              items: [
                "JavaScript (ES6+)",
                "TypeScript",
                "Python",
                "C++",
                "Java",
                "SQL",
                "HTML/CSS",
                "jQuery",
              ],
            },
            {
              label: "Backend",
              items: [
                "Node.js",
                "Express",
                "Nest.js",
                "Django",
                "GraphQL",
                "REST APIs",
                "Microservices",
                "System Design",
              ],
            },
            {
              label: "Frontend",
              items: ["React.js", "Next.js", "React Native", "Redux"],
            },
            {
              label: "Cloud & DevOps",
              items: [
                "AWS Lambda",
                "ECS",
                "CloudFormation",
                "CloudWatch",
                "Step Functions",
                "Docker",
                "Kubernetes",
                "CI/CD",
                "Digital Ocean",
                "GCP",
                "Nginx",
              ],
            },
            {
              label: "Databases",
              items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
            },
            {
              label: "Testing",
              items: ["Jest", "Cypress", "k2 Load Testing", "Apache JMeter"],
            },
          ].map((cat) => (
            <div key={cat.label} className="skill-card">
              <h3>{cat.label}</h3>
              <div className="tags">
                {cat.items.map((it) => (
                  <span key={it} className="tag">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2 className="section-title">
          <span className="num">02</span> Professional Experience
        </h2>
        <div className="timeline">
          {[
            {
              role: "Senior Software Engineer",
              company: "Word360",
              place: "Remote",
              date: "July 2024 – Present",
              points: [
                "Architecting and developing Wordskii v3, a language services management platform using React, Node.js, and PostgreSQL.",
                "Engineering backend workflows with AWS Step Functions, Lambda, ECS, and CloudFormation for automated translation scheduling.",
                "Implementing a GraphQL API layer to optimize data fetching and frontend performance.",
                "Ensuring platform reliability through unit (Jest), E2E (Cypress), and load testing (k2).",
              ],
            },
            {
              role: "Software Engineer & Team Lead",
              company: "Infolitz Software Pvt Ltd",
              place: "Kochi, Kerala",
              date: "Mar 2022 – July 2024",
              points: [
                "Led a team of 5 developers delivering full-stack solutions including BLE apps, fintech platforms, and web applications.",
                "Developed Envitus, an IoT-based atmosphere monitoring web app (PM2.5, O2) using the MERN stack for government clients.",
                "Collaborated with ValueMatrix and Thinking Wealth on hiring and fintech applications respectively.",
                "Managed technical recruitment, interviewing candidates and mentoring engineering interns.",
              ],
            },
            {
              role: "Junior Node.js Developer",
              company: "Centresource Consultancy Services",
              place: "Kochi, Kerala",
              date: "Aug 2021 – Mar 2022",
              points: [
                "Developed RESTful APIs and backend services for TUSU, an Ed-tech student-tutor learning platform.",
                "Contributed to frontend development for Happy Turtle, an e-commerce site using React.js.",
                "Focused on API integrations, database optimization (MySQL/PostgreSQL), and modern dev practices.",
              ],
            },
          ].map((job) => (
            <div key={job.company} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{job.role}</h3>
                  <span className="date">{job.date}</span>
                </div>
                <p className="company">
                  {job.company} · {job.place}
                </p>
                <ul>
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-title">
          <span className="num">03</span> Key Projects
        </h2>
        <div className="projects-grid">
          {[
            {
              title: "CarAuras",
              subtitle: "Used Car Marketplace — Founder & Lead Developer",
              link: "carauras.com",
              href: "https://carauras.com",
              desc: "Built a marketplace connecting customers with verified dealers, featuring real-time chat, call integration, and subscription management.",
              tech: [
                "React",
                "Node.js",
                "PostgreSQL",
                "GraphQL",
                "AWS Lambda/ECS",
              ],
            },
            {
              title: "Orucom",
              subtitle: "Beauty Parlor SaaS — Lead Developer",
              link: "orucom.com",
              href: "https://orucom.com",
              desc: "Developed a SaaS platform with a web dashboard and mobile app for real-time service booking and shop management.",
              tech: [
                "React",
                "React Native",
                "Node.js",
                "PostgreSQL",
                "Digital Ocean",
              ],
            },
            {
              title: "Operon Journal",
              subtitle: "Publishing Platform — Full Stack Developer",
              link: "operonjournal.com",
              href: "https://operonjournal.com",
              desc: "Engineered an online research journal platform allowing researchers to submit, peer-review, and publish academic papers.",
              tech: ["React", "Supabase", "Node.js"],
            },
            {
              title: "Online Taxi Application",
              subtitle: "Real-time Systems — System Architect (In Progress)",
              link: null,
              href: null,
              desc: "Architecting a high-concurrency ride-hailing application featuring real-time tracking and location-based services using WebSockets.",
              tech: ["Node.js", "React Native", "PostgreSQL"],
            },
          ].map((proj) => (
            <div key={proj.title} className="project-card">
              <div className="project-head">
                <h3>{proj.title}</h3>
                {proj.href && (
                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {proj.link} ↗
                  </a>
                )}
              </div>
              <p className="project-subtitle">{proj.subtitle}</p>
              <p className="project-desc">{proj.desc}</p>
              <div className="tags">
                {proj.tech.map((t) => (
                  <span key={t} className="tag tag-small">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Achievements */}
      <section id="education" className="section">
        <h2 className="section-title">
          <span className="num">04</span> Education &amp; Achievements
        </h2>
        <div className="edu-grid">
          <div className="edu-card">
            <h3>Bachelor of Technology</h3>
            <p className="company">Electronics and Communication Engineering</p>
            <p className="project-desc">
              Govt. Engineering College Bartonhill, Trivandrum
            </p>
            <p className="date">2017 – 2021 · CGPA: 7.67</p>
          </div>
          <div className="edu-card">
            <h3>Achievements</h3>
            <ul>
              <li>
                Solved 400+ coding problems on LeetCode and HackerRank,
                specializing in DSA and System Design.
              </li>
              <li>
                Certified in HackerRank Software Engineering, Problem Solving
                (JavaScript/Python/SQL).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">
          <span className="num">05</span> Contact
        </h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p>
              Have a project in mind or want to talk shop? Drop a message and
              I'll get back to you.
            </p>
            <div className="meta-row column">
              <span>📍 Kochi, KL / Remote</span>
              <span>📧 aswinst.dev6477@gmail.com </span>
              <span>📱 +91-9526374812</span>
              <a
                href="https://www.linkedin.com/in/aswin-s-20b6ab411/"
                target="_blank"
                rel="noreferrer"
              >
                🔗 linkedin.com/in/aswin-s-thampalakad
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell me about your project..."
              />
            </label>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
            </button>
            {status === "success" && (
              <p className="form-status success">
                Message sent. Thanks for reaching out!
              </p>
            )}
            {status === "error" && (
              <p className="form-status error">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Aswin S. Thampalakad</p>
      </footer>
    </div>
  );
}
