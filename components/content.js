import Image from "next/image";
import styles from "./content.module.css";
export default function Content() {
  return (
    <div id="content" className={styles.contentRoot}>
      <main className={`${styles.pagesStylesMainContainer} ${styles.fillHeight}`}>
        <section className={styles.heroStyledHeroSection}>
          <div className={styles.typewriter} style={{ transitionDelay: '100ms'}}>
            <h1>Hi, my name is</h1>
          </div>
          <div  style={{transitionDelay: '300ms'}}>
            <h2 className={styles.bigHeading}>Bidisha Das</h2>
          </div>
          <div style={{ transitionDelay: '350ms' }}>
            <p className={styles.heroTagline}>
              Senior Software Engineer · Backend &amp; Platform Engineering{" "}
              <a
                href="https://www.salesforce.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.gradientText}
              >
                @ Salesforce
              </a>
            </p>
          </div>
          <div  style={{transitionDelay: '400ms'}}>
            <p>
              I build secure, scalable backend systems and the platforms that
              let AI agents act safely inside enterprise software.
              <br/>
              <br/>
              I&rsquo;m a Senior Member of Technical Staff at Salesforce, working
              across enterprise access management, Java and Python backend
              services, AI agent orchestration, MCP integrations, and
              permission-aware tool execution with human approval. See the
              &nbsp;
              <a href="#experience" className={styles.anchor}>
                Experience
              </a> section for details.
              <br/>
              <br/>
              My engineering interests are distributed systems, PostgreSQL,
              developer infrastructure, and reliable execution layers for AI
              agents. Before Salesforce I worked on playback reliability at &nbsp;
              <a
                href="https://hotstar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.anchor}
              >
                Disney+ Hotstar
              </a>, fintech journeys at &nbsp;
              <a
                href="https://makemytrip.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.anchor}
              >
                MakeMyTrip
              </a>, and platform tooling at &nbsp;
              <a
                href="https://autorabit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.anchor}
              >
                AutoRABIT
              </a>. I also contribute to &nbsp;
              <a href="https://github.com/shaka-project/shaka-player"
              target="_blank"
              rel="noopener noreferrer"
              className= {styles.anchor}>
                Shaka Player
              </a>, Google&rsquo;s open-source DASH/HLS player.
            </p>
          </div>
          <div style={{ transitionDelay: '450ms' }}>
            <a
              className={styles.heroCta}
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener"
            >
              View résumé (PDF)
            </a>
          </div>
        </section>
        <section
          id="about"
          name="about"
          className={styles.aboutStyledAboutSection}
          data-sr-id="0"
        >
          <h2 className={styles.numberedHeading}>About Me</h2>
          <div className={styles.inner}>
            <div className={styles.aboutStyledText}>
              <div>
                <p>
                  I&rsquo;m a backend and platform engineer with six years of
                  experience shipping production software, most recently on
                  enterprise authorization and AI agent infrastructure at
                  Salesforce.
                </p>
                <p>
                  Most of my work is the execution layer around the model:
                  turning a natural-language request into a plan grounded in
                  real enterprise metadata, then running it through tools that
                  respect the requester&rsquo;s permissions and stop for human
                  approval when they should. Authorization decisions live in
                  deterministic code, not in a prompt.
                </p>
                <p>
                  I started on the frontend (design systems, performance work,
                  and video playback), and that still shapes how I build
                  platforms other engineers can use. These days I spend most of
                  my time on backend services, PostgreSQL, and making agent
                  workflows testable and safe to operate.
                </p>
                <p>
                  Technologies I work with regularly:
                </p>
              </div>
              <ul className={styles.skillsList}>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Python</li>
                <li>TypeScript</li>
                <li>PostgreSQL / SQL</li>
                <li>REST APIs</li>
                <li>MCP</li>
                <li>LangGraph</li>
                <li>RBAC &amp; access control</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>AWS</li>
                <li>GitHub Actions</li>
                <li>React</li>
              </ul>
            </div>
            <div className={styles.aboutStyledPic}>
              <div className={styles.wrapper}>
                <div className={`${styles.imageWrapper} ${styles.img}`}>
                  <Image
                    className={styles.headshotImg}
                    width={500}
                    height={500}
                    sizes="(min-width: 768px) 300px, 220px"
                    src="/images/1.jpg"
                    alt="Bidisha Das"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className={styles.experienceSection}>
          <h2 className={styles.numberedHeading}>Where I've Worked</h2>
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <div>
                <h3 className={styles.experienceRole}>
                  Senior Member of Technical Staff{" "}
                  <a
                    href="https://www.salesforce.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.gradientText}
                  >
                    @ Salesforce
                  </a>
                </h3>
                <p className={styles.experienceMeta}>Bengaluru, India</p>
              </div>
              <p className={styles.experienceRange}>Dec 2024 — Present</p>
            </div>
            <p className={styles.experienceIntro}>
              Backend and AI-platform work for enterprise access management:
              Java and Python services, metadata-grounded agent workflows, MCP
              integrations, and permission-aware execution behind human
              approval.
            </p>
            <ul className={styles.experienceStack}>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Python</li>
              <li>TypeScript</li>
              <li>PostgreSQL</li>
              <li>MCP</li>
              <li>REST APIs</li>
              <li>Metadata &amp; Tooling APIs</li>
              <li>RBAC</li>
              <li>AWS</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Splunk</li>
              <li>CI/CD</li>
            </ul>
            <ul className={styles.experienceList}>
              <li>
                Designed, built and deployed five production AI agent
                workflows for enterprise access management, cutting a process
                that took ~60 days of manual work to ~5 days of self-serve
                execution (~92% faster).
              </li>
              <li>
                Extended the in-house Agentforce platform with a
                retrieval-to-action layer: natural-language requests retrieve
                versioned Skills, enterprise metadata grounds the plan, and
                permission-aware tools execute structured operations. 10+
                teams now self-serve on it.
              </li>
              <li>
                Authored the MCP server that exposes eight enterprise
                capabilities to agents, with structured tool contracts,
                explicit failure semantics and permission-aware execution.
              </li>
              <li>
                Shipped a Slack agent adopted by 150+ people across 8 teams,
                mostly non-engineers. Privileged operations run only under the
                requester&rsquo;s own permissions and behind human approval.
              </li>
              <li>
                Built governed Metadata API and Tooling API integrations across
                roles, groups, queues, sharing rules and access policies, with
                schema validation and authorization decisions kept in
                deterministic code, reducing misconfigured access requests by
                ~35%.
              </li>
              <li>
                Built Java services on PostgreSQL for role and queue access
                summaries, restriction rules and public-group membership
                queries, plus field-level security checks.
              </li>
              <li>
                Built the agent evaluation and regression framework: behavioral
                checks on retrieval, tool selection and permissions, an LLM
                judge with a written rubric and pass thresholds, and
                permission safety cases that must pass on every change.
              </li>
              <li>
                Migrated five workflows from a legacy V1 retrieval-driven
                architecture to the redesigned V2 platform, consolidating 20+
                prompts, permissions, tool definitions and structured outputs.
              </li>
              <li>
                Deployed and operated agent services on AWS with Docker and
                Kubernetes; event-driven integrations decoupled workflows from
                downstream systems, improving throughput by ~40%.
              </li>
              <li>
                Mentor 5+ engineers and contractors through code and design
                reviews.
              </li>
            </ul>
          </div>
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <div>
                <h3 className={styles.experienceRole}>
                  Software Development Engineer - II{" "}
                  <span className={styles.gradientText}>@ Disney+ Hotstar</span>
                </h3>
                <p className={styles.experienceMeta}>
                  Bengaluru, Karnataka, India · Remote
                </p>
              </div>
              <p className={styles.experienceRange}>Jan 2023 — Dec 2024</p>
            </div>
            <p className={styles.experienceIntro}>
              Player team, web and living-room (TV) platforms: playback
              reliability, startup performance and session analytics for a
              large-scale streaming service.
            </p>
            <ul className={styles.experienceStack}>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Shaka Player</li>
              <li>DASH / HLS</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Web Workers</li>
              <li>Microfrontends</li>
            </ul>
            <ul className={styles.experienceList}>
              <li>
                Reduced player failure rate by ~70% by matching recovery to
                each error class: bounded auto-retry, failover to a secondary
                source and variant blacklisting, without restarting playback.
              </li>
              <li>
                Fixed session analytics that counted retries as new sessions
                by redesigning playback-session identity, and defined startup,
                rebuffer and failure metrics with Product and Data Science.
              </li>
              <li>
                Cut load time by ~10% for 50M+ users with segment prefetching
                and a concurrency-capped preload manager that parses the
                manifest while DRM initializes in parallel.
              </li>
              <li>
                Designed a web-worker-based playback reporting API for
                real-time error tracking.
              </li>
              <li>
                Implemented caption sync for stitched ads on Apple HLS,
                enabling closed captions across 50+ countries.
              </li>
              <li>
                Upstream Shaka Player contributions: subtitle-role fixes for
                HLS (
                <a
                  href="https://github.com/shaka-project/shaka-player/pull/5357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.anchor}
                >
                  #5357
                </a>
                ) and DASH (
                <a
                  href="https://github.com/shaka-project/shaka-player/pull/10441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.anchor}
                >
                  #10441
                </a>
                ), both merged.
              </li>
            </ul>
          </div>
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <div>
                <h3 className={styles.experienceRole}>
                  Senior Software Engineer{" "}
                  <span className={styles.gradientText}>@ MakeMyTrip</span>
                </h3>
                <p className={styles.experienceMeta}>
                  Bengaluru, Karnataka, India · Hybrid
                </p>
              </div>
              <p className={styles.experienceRange}>Jun 2022 — Jan 2023</p>
            </div>
            <p className={styles.experienceIntro}>
              Contributed to TripMoney, building web and mobile fintech
              solutions across credit, loan, and forex journeys.
            </p>
            <ul className={styles.experienceStack}>
              <li>React</li>
              <li>Redux Thunk</li>
              <li>Redux Saga</li>
              <li>Web Components</li>
              <li>Loadable Components</li>
              <li>Webpack</li>
              <li>Azure</li>
              <li>Nginx</li>
              <li>Charles Proxy</li>
            </ul>
            <ul className={styles.experienceList}>
              <li>
                Delivered travel and personal loan journeys using React,
                Redux Thunk, and Web Components.
              </li>
              <li>
                Built and integrated APIs with MVVM architecture, hosted on
                Azure and blob storage.
              </li>
              <li>
                Led frontend performance improvements — reduced LCP, FCP, and
                TTFB across devices.
              </li>
              <li>
                Cut bundle size using code-splitting, image compression,
                sprite sheets, and Webpack optimizations.
              </li>
              <li>
                Revamped the Forex Card experience across desktop and mWeb
                using Redux Saga and Loadable Components.
              </li>
            </ul>
          </div>
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <div>
                <h3 className={styles.experienceRole}>
                  Software Developer{" "}
                  <span className={styles.gradientText}>@ AutoRABIT</span>
                </h3>
                <p className={styles.experienceMeta}>
                  Hyderabad, Telangana, India · On-site
                </p>
              </div>
              <p className={styles.experienceRange}>Sep 2020 — Jun 2022</p>
            </div>
            <p className={styles.experienceIntro}>
              Platform tooling, integrations and reusable UI systems for
              DevOps and CRM release-automation products.
            </p>
            <ul className={styles.experienceStack}>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>OData v4</li>
              <li>AWS</li>
              <li>Docker</li>
              <li>Angular</li>
              <li>NgRx</li>
              <li>Vue</li>
              <li>GraphQL</li>
              <li>Web Components</li>
            </ul>
            <ul className={styles.experienceList}>
              <li>
                Built a connector that loads external CSV data into Salesforce
                using Java, Spring Boot and Apache Olingo (OData v4), hosted on
                AWS EC2 and S3.
              </li>
              <li>
                Built the organisation-wide design system (Angular, PrimeNG,
                NgRx, Web Components) in a micro-frontend setup, used as the
                single source of truth for UI implementation.
              </li>
              <li>
                Delivered a Configure-Price-Quote (CPQ) application that
                contributed to ~$2M in revenue.
              </li>
              <li>
                Applied PWA techniques (cache busting, lazy loading, webpack
                tuning) to the UI layer deployed on AWS.
              </li>
            </ul>
          </div>
        </section>
        <section id="projects">
          <h2 className={styles.numberedHeading} data-sr-id="3">
            Selected Projects
          </h2>
          <ul className={styles.styledProjectsFeatured}>
            <li
              className={`${styles.styledFeature} ${styles.sectionStyle}`}
            >
              <div className={styles.projectContent}>
                <div>
                  <p className={styles.projectOverline}>Featured Project</p>
                  <h3 className={styles.projectTitle}>
                    <a
                      href="https://github.com/officialbidisha/ResolveFlow"
                      className={styles.anchor}
                    >
                      ResolveFlow
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p>
                      A LangGraph agent that diagnoses GitHub issues with cited
                      evidence and never writes to GitHub without an
                      independent review and explicit human approval. The
                      approval pause is a LangGraph <code>interrupt()</code>{" "}
                      checkpointed in PostgreSQL and resumable from a later
                      request. Execution refuses to run without a recorded
                      approval, the only write tools are comment and label, and
                      writes run under the signed-in user&rsquo;s own GitHub
                      token with a retry-safe write ledger. A 13-check
                      safety-gate suite runs in GitHub Actions on every pull
                      request. Try the &nbsp;
                      <a
                        href="https://resolveflow-web-officialbidishas-projects.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.anchor}
                      >
                        live demo
                      </a>.
                    </p>
                  </div>
                  <ul className={styles.projectTechList}>
                    <li>LangGraph</li>
                    <li>FastAPI</li>
                    <li>PostgreSQL</li>
                    <li>Pinecone</li>
                    <li>OpenAI</li>
                    <li>React</li>
                    <li>GitHub Actions</li>
                  </ul>
                  <div className={styles.projectLinks}>
                    <a
                      href="https://github.com/officialbidisha/ResolveFlow"
                      aria-label="GitHub repository"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
                        alt=""
                        src="/images/github.png"
                        width={20}
                        height={20}
                        style={{filter: 'unset'}}
                      />
                    </a>
                    <a
                      href="https://resolveflow-web-officialbidishas-projects.vercel.app"
                      aria-label="Live Demo Link"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
                        alt=""
                        src="/images/icons8-share-3.svg"
                        width={20}
                        height={20}
                        style={{filter: 'unset'}}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectImage}>
                <a
                  href="https://resolveflow-web-officialbidishas-projects.vercel.app"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.anchor}
                  style={{height: 'auto'}}
                >
                  <img
                    decoding="async"
                    src="/images/resolveflow.jpg"
                    alt="ResolveFlow — pending human approval screen"
                    style={{objectFit: 'cover', opacity: 1, height: 'auto', width: '100%'}}
                  />
                </a>
              </div>
            </li>
            <li
              className={`${styles.styledFeature} ${styles.sectionStyle}`}
            >
              <div className={styles.projectContent}>
                <div>
                  <p className={styles.projectOverline}>Featured Project</p>
                  <h3 className={styles.projectTitle}>
                    <a
                      href="https://github.com/officialbidisha/Langchain-In-Depth"
                      className={styles.anchor}
                    >
                      LangChain Documentation Helper
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p>
                      A retrieval-augmented generation (RAG) chatbot that
                      answers questions about the LangChain docs, built with a
                      Streamlit chat UI on top of a LangGraph tool-calling
                      agent that retrieves grounded context from a Pinecone
                      vector store. Part of my &nbsp;
                      <a
                        href="https://github.com/officialbidisha/Langchain-In-Depth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.anchor}
                      >
                        LangChain deep-dive repo
                      </a>. Try the &nbsp;
                      <a
                        href="https://langchain-in-depth-digfvqjd6fgs49fnttew3f.streamlit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.anchor}
                      >
                        live demo
                      </a>.
                    </p>
                  </div>
                  <ul className={styles.projectTechList}>
                    <li>LangChain</li>
                    <li>LangGraph</li>
                    <li>Pinecone</li>
                    <li>OpenAI</li>
                    <li>Streamlit</li>
                  </ul>
                  <div className={styles.projectLinks}>
                    <a
                      href="https://github.com/officialbidisha/Langchain-In-Depth"
                      aria-label="GitHub repository"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
                        alt=""
                        src="/images/github.png"
                        width={20}
                        height={20}
                        style={{filter: 'unset'}}
                      />
                    </a>
                    <a
                      href="https://langchain-in-depth-digfvqjd6fgs49fnttew3f.streamlit.app/"
                      aria-label="Live Demo Link"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
                        alt=""
                        src="/images/icons8-share-3.svg"
                        width={20}
                        height={20}
                        style={{filter: 'unset'}}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectImage}>
                <a
                  href="https://langchain-in-depth-digfvqjd6fgs49fnttew3f.streamlit.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.anchor}
                  style={{height: 'auto'}}
                >
                  <img
                    decoding="async"
                    src="/images/langchain-rag.svg"
                    alt="LangChain Documentation Helper preview"
                    style={{objectFit: 'cover', opacity: 1, height: 'auto', width: '100%'}}
                  />
                </a>
              </div>
            </li>
          </ul>
          <h3 className={styles.earlierHeading}>Earlier Frontend Projects</h3>
          <ul className={styles.styledProjectsFeatured}>
            <li
              className={`${styles.styledFeature} ${styles.sectionStyle}`}
            >
              <div className={styles.projectContent}>
                <div>
                  <p className={styles.projectOverline}>Frontend Project</p>
                  <h3 className={styles.projectTitle}>
                    <a href="https://github.com/officialbidisha/GoogleClone" className={styles.anchor}>
                      Google Clone
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p>
                      A clone of Google with search facilities and a random
                      image search, built with Next.js.
                    </p>
                  </div>
                  <ul className={styles.projectTechList}>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                  </ul>
                  <div className={styles.projectLinks}>
                    <a
                      href="https://github.com/officialbidisha/GoogleClone/"
                      aria-label="GitHub repository"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
                        alt=""
                        src="/images/github.png"
                        width={20}
                        height={20}
                        style={{filter: 'unset'}}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectImage}>
                <a
                  href="https://github.com/officialbidisha/GoogleClone"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.anchor}
                  style={{height: 'auto'}}
                >
                  <Image
                    decoding="async"
                    src="/images/googleclone.png"
                    width={0}
                    height={0}
                    alt="Google Clone"
                    sizes="(min-width:900px) 900px, 100vw"
                    style={{objectFit: 'cover', opacity: 1, height: 'auto'}}
                  />
                </a>
              </div>
            </li>

            <li
              className={`${styles.styledFeature} ${styles.sectionStyle}`}
              style={{
                visibility: 'visible',
                opacity: 1}}
            >
              <div className={styles.projectContent}>
                <div>
                  <p className={styles.projectOverline}>Frontend Project</p>
                  <h3 className={styles.projectTitle}>
                    <a href="https://github.com/officialbidisha/FlyM/" className={styles.anchor}>FlyM</a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p>
                      This project provides the feature of flight booking to the
                      user. The user can book flights, and filter based on
                      location, duration, price of flight, airline and whether
                      the flight has one stop or is it non stop. This project is
                      available on &nbsp;
                      <a
                        href="https://officialbidisha.github.io/FlyM/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.anchor}
                      >
                        FlyM
                      </a>.
                    </p>
                  </div>
                  <ul className={styles.projectTechList}>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Thunk</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Material UI</li>
                    <li>Axios</li>
                  </ul>
                  <div className={styles.projectLinks}>
                    <a
                      href="https://github.com/officialbidisha/FlyM/"
                      aria-label="GitHub repository"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
                        alt=""
                        src="/images/github.png"
                        width={20}
                        height={20}
                        style={{filter: 'unset'}}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectImage}>
                <a
                  href="https://officialbidisha.github.io/FlyM/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{height: 'auto'}}
                  className={styles.anchor}
                >
                  <Image
                    decoding="async"
                    src="/images/Flym1.png"
                    alt="FlyM flight booking app"
                    width={0}
                    height={0}
                    sizes ='(min-width:900px) 900px, 100vw'
                    style={{objectFit: 'cover', opacity: 1, height: 'auto'}}
                  />
                </a>
              </div>
            </li>
            <li
              className={`${styles.styledFeature} ${styles.sectionStyle}`}
            >
              <div className={styles.projectContent}>
                <div>
                  <p className={styles.projectOverline}>Frontend Project</p>
                  <h3 className={styles.projectTitle}>
                    <a href="https://github.com/officialbidisha/Slack-Clone-/"  className={styles.anchor}>
                      Slack Clone
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p>
                      This project aims to provide a clone of slack. Individual
                      messages, chat rooms and creation of channel are some of
                      the features provided in this. The project is available on &nbsp;
                      <a
                        href="https://officialbidisha.github.io/Slack-Clone/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.anchor}
                      >
                        Slack Clone
                      </a>.
                    </p>
                  </div>
                  <ul className={styles.projectTechList}>
                    <li>VS Code</li>
                    <li>React</li>
                    <li>Firebase</li>
                    <li>Material UI</li>
                    <li>Functional Components</li>
                  </ul>
                  <div className={styles.projectLinks}>
                    <a
                      href="https://github.com/officialbidisha/Slack-Clone-/"
                      aria-label="GitHub repository"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
                        alt=""
                        src="/images/github.png"
                        width={20}
                        height={20}
                        style={{filter: 'unset'}}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectImage}>
                <a
                  href="https://officialbidisha.github.io/Slack-Clone/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{height: 'auto'}}
                  className={styles.anchor}
                >
                  <Image
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                    src="/images/slack-clone.png"
                    width={0}
                    height={0}
                    alt="Slack Clone"
                    style={{objectFit: 'cover', opacity: 1, height: 'auto'}}
                  />
                </a>
              </div>
            </li>

            <li
              className={`${styles.styledFeature} ${styles.sectionStyle}`}
            >
              <div className={styles.projectContent}>
                <div>
                  <p className={styles.projectOverline}>Frontend Project</p>
                  <h3 className={styles.projectTitle}>
                    <a href="https://officialbidisha.github.io/KanbanUI/"  className={styles.anchor}>
                      Jira Clone
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p>
                      This project aims to provide a clone of jira dashboard. It
                      is enriched with features like user selection, filter
                      based on keyword, member addition, issue edition and so
                      on. The project is available on
                      <a
                        href="https://github.com/officialbidisha/KanbanUI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.anchor}
                      >
                        Jira Clone
                      </a>
                    </p>
                  </div>
                  <ul className={styles.projectTechList}>
                    <li>VS Code</li>
                    <li>Angular</li>
                    <li>Spring Boot</li>
                    <li>MongoDB Atlas</li>
                    <li>RxJs</li>
                    <li>Bootstrap</li>
                    <li>PrimeNG</li>
                  </ul>
                  <div className={styles.projectLinks}>
                    <a
                      href="https://github.com/officialbidisha/KanbanUI"
                      aria-label="GitHub repository"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
                        alt=""
                        src="/images/github.png"
                        width={20}
                        height={20}
                        style={{filter: 'unset'}}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectImage}>
                <a
                  href="https://officialbidisha.github.io/KanbanUI/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.anchor}
                  style={{height: 'auto'}}
                >
                  <Image
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                    src="/images/JiraClone.png"
                    alt="Jira Clone"
                    width={0}
                    height={0}
                    style={{objectFit: 'cover', opacity: 1, height: 'auto'}}
                  />
                </a>
              </div>
            </li>
            <li
              className={styles.styledFeature}
              style={{
                visibility: 'visible',
                opacity: 1,
                transform: "matrix3d(1,0, 0,0,0, 1,0,0,0,0,1,0,0,0,0,1)",
                transition: "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s"
                }}
            >
              <div className={styles.projectContent}>
                <div>
                  <p className={styles.projectOverline}>Frontend Project</p>
                  <h3 className={styles.projectTitle}>
                    <a href="https://officialbidisha.github.io/CovidTracker/" className={styles.anchor}>
                      CovidTracker
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p>
                      The project aims to show a statistical record in tabular
                      as well as graphical format of COVID-19 effected patients
                      per country. It shows the record of affected, deceased and
                      recovered patients, available on
                      <a
                        href="https://officialbidisha.github.io/CovidTracker/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.anchor}
                      >
                        CovidTracker
                      </a>
                    </p>
                  </div>
                  <ul className={styles.projectTechList}>
                    <li>VS Code</li>
                    <li>Angular</li>
                    <li>RxJs</li>
                    <li>Bootstrap</li>
                    <li>PrimeNG</li>
                  </ul>
                  <div className={styles.projectLinks}>
                    <a
                      href="https://github.com/officialbidisha/CovidTracker"
                      aria-label="GitHub repository"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
                        alt=""
                        src="/images/github.png"
                        width={20}
                        height={20}
                        style={{filter:'unset'}}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectImage}>
                <a
                  href="https://officialbidisha.github.io/CovidTracker/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{height: 'auto'}}
                  className={styles.anchor}
                >
                  <Image
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                    src="/images/CovidTracker1.png"
                    alt="Covid-Tracker"
                    width={0}
                    height={0}
                    style={{objectFit: 'cover', opacity: 1, height: 'auto'}}
                  />
                </a>
              </div>
            </li>
            <li
              className={styles.styledFeature}
              style={{
                visibility: 'visible',
                opacity: 1,
                transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
                transition:" opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s"
              }}
            >
              <div className={styles.projectContent}>
                <div>
                  <p className={styles.projectOverline}>Frontend Project</p>
                  <h3 className={styles.projectTitle}>
                    <a
                      href="https://officialbidisha.github.io/MealMarathon/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      Meals Marathon
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p>
                      A web app that mocks food-ordering app, and deals with the
                      ordering of food items, adding them on cart, and handling
                      cart data using state management, available at &nbsp;
                      <a
                        href="https://officialbidisha.github.io/MealMarathon/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.anchor}
                      >
                        ReactMeals
                      </a> &nbsp;
                    </p>
                  </div>
                  <ul className={styles.projectTechList}>
                    <li>React</li>
                    <li>Firebase</li>
                    <li>VS Code</li>
                    <li>Redux</li>
                  </ul>
                  <div className={styles.projectLinks}>
                    <a
                      href="https://github.com/officialbidisha/MealMarathon"
                      aria-label="GitHub repository"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
                        alt=""
                        src="/images/github.png"
                        width={20}
                        height={20}
                        style={{filter: 'unset'}}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectImage}>
                <a
                  href="https://officialbidisha.github.io/MealMarathon/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{height: 'auto'}}
                  className={styles.anchor}
                >
                  <Image
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                    src="/images/ReactMeals.png"
                    alt="Meals Marathon food ordering app"
                    width={0}
                    height={0}
                    style={{objectFit: 'cover', opacity: 1, height:'auto'}}
                  />
                </a>
              </div>
            </li>

            <li
              className={`${styles.styledFeature} ${styles.sectionStyle}`}
            >
              <div className={styles.projectContent}>
                <div>
                  <p className={styles.projectOverline}>Frontend Project</p>
                  <h3 className={styles.projectTitle}>
                    <a
                      href="https://officialbidisha.github.io/Git-Guide/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      Git Guide
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p>
                      An application that shows the summary of a github user,
                      displaying their public repositories, weekly contribution
                      - commits, addition, deletion, avaialble at &nbsp;
                      <a
                        href="https://officialbidisha.github.io/Git-Guide/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.anchor}
                      >
                        GitGuide
                      </a>
                      &nbsp;
                      It also handles error scenarios and loading state.
                    </p>
                  </div>
                  <ul className={styles.projectTechList}>
                    <li>Angular</li>
                    <li>Github</li>
                    <li>VS Code</li>
                    <li>NgRx</li>
                  </ul>
                  <div className={styles.projectLinks}>
                    <a
                      href="https://github.com/officialbidisha/Git-Guide"
                      aria-label="GitHub repository"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
                        alt=""
                        src="/images/github.png"
                        width={20}
                        height={20}
                        style={{filter:'unset'}}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectImage}>
                <a
                  href="https://officialbidisha.github.io/Git-Guide/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.anchor}
                  style={{height: 'auto'}}
                >
                  <Image
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                   src="/images/git-guide.png"
                    alt="Git-Guide"
                    width={0}
                    height={0}
                    style={{objectFit: 'cover', opacity: 1, height: 'auto'}}
                  />
                </a>
              </div>
            </li>
          </ul>
        </section>
        <section className={styles.otherProjects} id="smallprojects">
          <h2 className={styles.sectionStyle}
          >
            Other Noteworthy Projects
          </h2>
          <ul className={styles.projectsGrid}>
            <li
              className={`${styles.styledProject} ${styles.sectionStyle}`}
            >
              <div className={styles.projectInner}>
                <header>
                  <div className={styles.projectTop}>
                    <div className={styles.folder}>
                      <Image
                        src="/images/icons8-folder.svg"
                        width={25}
                        height={25}
                        alt=""
                        style={{filter:'unset'}}
                      />
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href="https://github.com/officialbidisha/bhasharoute"
                        aria-label="BhashaRoute: multilingual intent router with a side-effect safety gate on GitHub"
                        className={`${styles.external} ${styles.anchor}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/icons8-share-3.svg"
                          width={22}
                          height={22}
                          alt=""
                          style={{
                            marginTop: '-4px',
                            filter: 'unset'
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h3 className={styles.projectTitle}>
                    <a
                      href="https://github.com/officialbidisha/bhasharoute"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.otherProjectA} ${styles.anchor}`}
                    >
                      BhashaRoute: multilingual intent router with a side-effect safety gate
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p className={styles.descriptionProject}>
                      Intent routing for English, Hindi and Bengali requests,
                      with calibrated abstention and an independent fail-closed
                      gate for state-changing requests. On a human-translated
                      test set of 8,157 requests: 87.8% macro-F1 vs 62.0% for
                      keyword rules, with 99.5% recall on the safety gate.
                    </p>
                  </div>
                </header>
                <footer>
                  <ul className={styles.projectTechList}>
                    <li>Python</li>
                    <li>scikit-learn</li>
                    <li>FastAPI</li>
                    <li>Evaluation</li>
                  </ul>
                </footer>
              </div>
            </li>
            <li
              className={`${styles.styledProject} ${styles.sectionStyle}`}
            >
              <div className={styles.projectInner}>
                <header>
                  <div className={styles.projectTop}>
                    <div className={styles.folder}>
                      <Image
                        src="/images/icons8-folder.svg"
                        width={25}
                        height={25}
                        alt=""
                        style={{filter:'unset'}}
                      />
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href="https://github.com/officialbidisha/ai-engineering-harness"
                        aria-label="ai-engineering-harness: LangGraph execution patterns on GitHub"
                        className={`${styles.external} ${styles.anchor}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/icons8-share-3.svg"
                          width={22}
                          height={22}
                          alt=""
                          style={{
                            marginTop: '-4px',
                            filter: 'unset'
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h3 className={styles.projectTitle}>
                    <a
                      href="https://github.com/officialbidisha/ai-engineering-harness"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.otherProjectA} ${styles.anchor}`}
                    >
                      ai-engineering-harness: LangGraph execution patterns
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p className={styles.descriptionProject}>
                      Small, runnable LangGraph exercises on the primitives
                      behind reliable agent execution: Command routing,
                      interrupt()-based human approval, bounded retries and
                      dynamic Send fan-out.
                    </p>
                  </div>
                </header>
                <footer>
                  <ul className={styles.projectTechList}>
                    <li>Python</li>
                    <li>LangGraph</li>
                  </ul>
                </footer>
              </div>
            </li>
            <li
              className={`${styles.styledProject} ${styles.allTransition}`}
            >
              <div className={styles.projectInner}>
                <header>
                  <div className={styles.projectTop}>
                    <div className={styles.folder}>
                      <Image
                       alt=""
                       src="/images/icons8-folder.svg"
                       width={25}
                       height={25}
                       style={{filter:'unset'}}
                      />
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href="https://github.com/officialbidisha/Assignment-Submission-Portal"
                        aria-label="External link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.anchor} ${styles.external}`}
                      >
                        <Image
                         alt=""
                         src="/images/icons8-share-3.svg"
                         width={22}
                         height={22}
                          style={{
                            marginTop: '-4px',
                            filter: 'unset'
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h3 className={styles.projectTitle}>
                    <a
                      href="https://github.com/officialbidisha/Assignment-Submission-Portal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.anchor} ${styles.otherProjectA}`}
                    >
                      Assignment Submission Portal for Online Assignment
                      Assessment
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p className={styles.descriptionProject}>
                      A web application used to submit assignments, view notice
                      and see study materials. Helps in maintaining distant
                      learning and periodical assessment of student performance.
                    </p>
                  </div>
                </header>
                <footer>
                  <ul className={styles.projectTechList}>
                    <li>PHP</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Hack</li>
                  </ul>
                </footer>
              </div>
            </li>
            <li
              className={`${styles.styledProject} ${styles.allTransition}`}
            >
              <div className={styles.projectInner}>
                <header>
                  <div className={styles.projectTop}>
                    <div className={styles.folder}>
                      <Image
                       alt=""
                       src="/images/icons8-folder.svg"
                        width={25}
                        height={25}
                        style={{filter: 'unset'}}
                      />
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href="https://github.com/officialbidisha/Library-Management-System"
                        aria-label="External link"
                        className={`${styles.external} ${styles.anchor}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                         alt=""
                         src="/images/icons8-share-3.svg"
                          width={22}
                          height={22}
                          style={{
                            marginTop: '-4px',
                            filter: 'unset'
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h3 className={styles.projectTitle}>
                    <a
                      href="https://github.com/officialbidisha/Library-Management-System"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.otherProjectA} ${styles.anchor}`}
                    >
                      Library Management System for Educational Institution
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p className={styles.descriptionProject}>
                      Maintaining education organisation level library
                      management system that accomodates separate accessibility
                      for admin and students.
                    </p>
                  </div>
                </header>
                <footer>
                  <ul className={styles.projectTechList}>
                    <li>Vue.js</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                  </ul>
                </footer>
              </div>
            </li>
            <li
              className={`${styles.styledProject} ${styles.sectionStyle} ${styles.allTransition}`}
            >
              <div className={styles.projectInner}>
                <header>
                  <div className={styles.projectTop}>
                    <div className={styles.folder}>
                      <Image
                       alt=""
                       src="/images/icons8-folder.svg"
                       width={25}
                       height={25}
                       style={{filter:'unset'}}
                      />
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href="https://officialbidisha.github.io/Todo-Mockup/"
                        aria-label="External link"

                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.external} ${styles.newTodoMockup}`}
                      >
                        <Image
                         alt=""
                         src="/images/icons8-share-3.svg"
                         width={22}
                         height={22}
                          style={{
                            marginTop:'-4px',
                            filter: 'unset'
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h3 className={styles.projectTitle}>
                    <a
                      href="https://officialbidisha.github.io/Todo-Mockup/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.otherProjectA} ${styles.anchor}`}
                    >
                      Todo Mockup using pure HTML, CSS.
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p className={styles.descriptionProject}>
                      A Mockup design implemented using HTML, SCSS.
                    </p>
                  </div>
                </header>
                <footer>
                  <ul className={styles.projectTechList}>
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>Visual Studio Code</li>
                  </ul>
                </footer>
              </div>
            </li>
          </ul>
        </section>
        <section
          id="contact"
          className={styles.styledContactSection}
          style={{
            visibility: 'visible',
            opacity: 1,
            transform:'matrix3d( 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 )',
            transition: 'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s'
          }}
        >
          <h2 className={`${styles.numberedHeading} ${styles.overline}`}>Lastly!</h2>
          <h2 className={styles.title}>Get In Touch</h2>
          <p style={{fontSize: '18px'}}>
            I&rsquo;m happy to talk about backend and platform engineering,
            authorization, or building reliable execution layers for AI
            agents. Email is the fastest way to reach me; I&rsquo;m also on
            LinkedIn.
          </p>
          <a
            className={`${styles.emailLink} ${styles.anchor}`}
            href="mailto:officialbidisha1@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Say Hello
          </a>
          <nav className={styles.contactLinks} aria-label="Profiles">
            <a href="https://github.com/officialbidisha" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/bidisha-das/" target="_blank" rel="noopener me">LinkedIn</a>
            <a href="https://dev.to/officialbidisha" target="_blank" rel="noopener me">DEV</a>
            <a href="https://stackoverflow.com/users/11637039/bidisha-das" target="_blank" rel="noopener me">Stack Overflow</a>
            <a href="/assets/resume.pdf" target="_blank" rel="noopener">Résumé (PDF)</a>
          </nav>
        </section>
      </main>
    </div>
  );
}
