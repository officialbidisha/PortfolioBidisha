import Image from "next/image";
import styles from "./content.module.css";
export default function Content() {
  return (
    <div id="content">
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
              Currently building Platform{" "}
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
              I'm a software developer specializing in building and developing
              softwares with remarkable user experience. Having experince React,
              Angular and Vue, I build applications that are scalable and
              flexible.
              <br/>
              <br/>
              Currently, I'm focused on Salesforce-native Agentic AI and
              Retrieval-Augmented Generation (RAG) — crafting intelligent,
              context-aware systems that elevate user workflows and strengthen
              platform intelligence. See the &nbsp;
              <a href="#experience" className={styles.anchor}>
                Experience
              </a> section below for details.
              <br/>
              <br/>
              I also openly contribute to &nbsp;
              <a href="https://github.com/shaka-project/shaka-player"
              target="_blank"
              rel="noreferrer"
              className= {styles.anchor}>
                Shaka Player
              </a> - a open-source JavaScript library used by Google for adaptive media.
              <br/>
              <br/>
              <br /> Previously, I contributed to the Player Team at &nbsp;
              <a
                href="https://hotstar.com/"
                target="_blank"
                rel="norefferer"
                className={styles.anchor}
              >
                Disney+Hotstar
              </a>, ensuring seamless streaming experiences; worked on web and
              mobile performance optimisation and a fintech application
              (TripMoney) at &nbsp;
              <a
                href="https://makemytrip.com/"
                target="_blank"
                rel="norefferer"
                className={styles.anchor}
              >
                MakeMyTrip
              </a>; and built a scalable Design System for organisation-level
              consumption at &nbsp;
              <a
                href="https://autorabit.com/"
                target="_blank"
                rel="norefferer"
                className={styles.anchor}
              >
                AutoRABIT
              </a>.
            </p>
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
                  Hello! My name is Bidisha and I enjoy developing websites
                  online. My interest in web development started way back in
                  2019, when I was introduced to Vue by a random documentary on
                  YouTube. It amazed me and I wanted to learn the most trendy
                  front-end framework then, Angular.
                </p>
                <p>
                  As I made small applications on Angular, it intrigued my
                  interest in front-end frameworks and I delved deep into
                  JavaScript. Along with JavaScript I have also learnt other
                  advanced JavaScript frameworks like React and Vue in addition
                  to Angular.
                </p>
                <p>
                  My main focus these days is web and mobile performance
                  optimisation, building a fintech application (TripMoney), and
                  revamping desktop-smooth workflow at &nbsp;
                  <a
                    className={styles.anchor}
                    href="https://makemytrip.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    MakeMyTrip
                  </a>
                  for the customer loyality and satisfaction
                </p>
                <p>
                  Here are a few technologies I've been working with recently:
                </p>
              </div>
              <ul className={styles.skillsList}>
                <li>JavaScript(ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Thunk</li>
                <li>Loadable</li>
                <li>Nginx</li>
                <li>Angular</li>
                <li>Node.js</li>
                <li>NgRx(v11)</li>
                <li>RxJs(v6)</li>
                <li>Vue</li>
                <li>Firebase</li>
                <li>Spring Boot</li>
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
                    alt="Headshot"
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
              Currently building Platform @ Salesforce, where I focus on
              Salesforce-native Agentic AI and Retrieval-Augmented Generation
              (RAG) — crafting intelligent, context-aware systems that elevate
              user workflows and strengthen platform intelligence.
            </p>
            <ul className={styles.experienceStack}>
              <li>Agentforce Skills</li>
              <li>Headless 360</li>
              <li>MCP</li>
              <li>Java</li>
              <li>Spring</li>
              <li>TypeScript</li>
              <li>REST APIs</li>
              <li>Metadata API</li>
              <li>Tooling API</li>
              <li>AWS</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Event Streaming</li>
              <li>Splunk</li>
              <li>CI/CD</li>
            </ul>
            <ul className={styles.experienceList}>
              <li>
                Own architecture and delivery of five production AI agent
                workflows for enterprise access management, cutting a process
                that previously took ~60 days of manual work to ~5 days of
                self-serve execution — a ~92% reduction in turnaround time.
              </li>
              <li>
                Extend the in-house Agentforce integration platform with a
                retrieval-to-action architecture — natural-language requests
                retrieve versioned Skills, enterprise metadata grounds the
                plan, and permission-aware tools execute structured operations
                — enabling 10+ teams to self-serve.
              </li>
              <li>
                Migrated five workflows from a legacy V1 retrieval-driven
                architecture to the redesigned V2 platform, consolidating 20+
                prompts, permissions, tool definitions, and structured outputs
                while improving execution reliability.
              </li>
              <li>
                Build governed REST API integrations and agent tool routing
                across roles, groups, queues, sharing configurations, and
                access policies via Metadata API and Tooling API, with schema
                validation and operation-level controls reducing
                misconfigured access requests by ~35%.
              </li>
              <li>
                Onboarded eight enterprise capabilities to Headless 360 (API
                exposure, tool discovery, metadata grounding, reusable
                Skills, MCP execution); authored reusable integration
                guidance adopted by 10+ internal teams.
              </li>
              <li>
                Deployed and operated agent and integration services on AWS
                using Docker containerization and Kubernetes orchestration;
                built event-driven, data-streaming integrations to decouple
                workflows from downstream systems, improving throughput by
                ~40% and strengthening fault isolation.
              </li>
              <li>
                Mentor 5+ junior engineers and contractors through code
                reviews, design reviews, and architecture discussions.
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
              Part of the Player Team, working across Web and Living Room
              platforms to elevate streaming performance, reliability, and
              user experience.
            </p>
            <ul className={styles.experienceStack}>
              <li>React</li>
              <li>Next.js</li>
              <li>Shaka Player</li>
              <li>JavaScript</li>
              <li>Web Workers</li>
              <li>Apple HLS</li>
              <li>Amplitude</li>
              <li>Microfrontends</li>
              <li>Living Room Platforms</li>
            </ul>
            <ul className={styles.experienceList}>
              <li>
                Developed microfrontend architecture using React, Next.js,
                and Shaka Player.
              </li>
              <li>
                Contributed actively to the Shaka Player open-source project,
                resolving timestamp issues that eliminated stream repetition
                during the World Cup.
              </li>
              <li>
                Reduced player failure rate by 70% by implementing a system
                to dynamically blacklist decoding layers.
              </li>
              <li>
                Enhanced startup performance on Living Room devices by
                preloading manifests, parallelizing page rendering, and
                preconnecting high-frequency DNS.
              </li>
              <li>
                Built a singleton-based session tracking module to ensure
                consistency across multi-device environments.
              </li>
              <li>
                Designed a web worker-based playback reporting API to support
                real-time multiplayer error tracking.
              </li>
              <li>
                Optimized Time to Interactive (TTI) by 5ms on Living Room
                platforms, improving responsiveness.
              </li>
              <li>
                Implemented caption sync support for stitched ads using Apple
                HLS, enabling closed captions across 50+ countries.
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
              Worked on frontend platform tooling and reusable UI systems to
              support large-scale DevOps and CRM automation products.
            </p>
            <ul className={styles.experienceStack}>
              <li>Angular</li>
              <li>PrimeNG</li>
              <li>NgRx</li>
              <li>Vue</li>
              <li>GraphQL</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Web Components</li>
              <li>Nginx</li>
              <li>Node.js</li>
            </ul>
            <ul className={styles.experienceList}>
              <li>
                Worked on frontend infrastructure and enterprise tools in the
                DevOps and CRM automation space.
              </li>
              <li>
                Built a design system using Angular, PrimeNG, NgRx, and Web
                Components in a micro-frontend setup.
              </li>
              <li>
                Developed Progressive Web App (PWA) techniques with cache
                busting, lazy loading, and webpack tweaks.
              </li>
              <li>
                Delivered a Configure Price Quote (CPQ) system using Vue,
                GraphQL, and Docker, contributing to a ~$2M revenue impact.
              </li>
              <li>
                Optimized the UI layer for ARM deployments on AWS, improving
                load times and accessibility.
              </li>
            </ul>
          </div>
        </section>
        <section id="projects">
          <h2 className={styles.numberedHeading} data-sr-id="3">
            Some Things I've Built
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
                      aria-label="Github Link"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
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
            <li
              className={`${styles.styledFeature} ${styles.sectionStyle}`}
            >
              <div className={styles.projectContent}>
                <div>
                  <p className={styles.projectOverline}>Featured Project</p>
                  <h3 className={styles.projectTitle}>
                    <a href="https://github.com/officialbidisha/GoogleClone" className={styles.anchor}>
                      Google Clone
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p>
                      A clone of google with search facilities, random search
                      with images built with love using Next.js
                      <a
                        href="https://google-cloneq-m78il8ifb-officialbidisha.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.anchor}
                      >
                        Google Clone
                      </a>
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
                      aria-label="Github Link"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
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
                  href="https://officialbidisha.github.io/GoogleClone/"
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
                  <p className={styles.projectOverline}>Featured Project</p>
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
                      aria-label="Github Link"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
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
                    alt="Slack Clone"
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
                  <p className={styles.projectOverline}>Featured Project</p>
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
                      aria-label="Github Link"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
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
                  <p className={styles.projectOverline}>Featured Project</p>
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
                      aria-label="Github Link"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
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
                  <p className={styles.projectOverline}>Featured Project</p>
                  <h3 className={styles.projectTitle}>
                    <a href="https://https://officialbidisha.github.io/CovidTracker/" className={styles.anchor}>
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
                      aria-label="Github Link"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
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
                  <p className={styles.projectOverline}>Featured Project</p>
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
                      aria-label="GitHub Link"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
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
                    alt="Covid-Tracker"
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
                  <p className={styles.projectOverline}>Featured Project</p>
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
                      aria-label="GitHub Link"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
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
            <li
              className={`${styles.styledFeature} ${styles.sectionStyle}`}
            >
              <div className={styles.projectContent}>
                <div>
                  <p className={styles.projectOverline}>Featured Project</p>
                  <h3 className={styles.projectTitle}>
                    <a
                      href="https://officialbidisha.github.io/QuotesDashboard/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      Quotes Dashboard
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p>
                      A web app that displays quotes added by different users.
                      In addition, it also allows the user to add , edit, and
                      delete quotes. Also, an user can comment on the quote of
                      another user.Available at &nbsp;
                      <a
                        href="https://officialbidisha.github.io/QuotesDashboard/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.anchor}
                      >
                        QuotesDashboard
                      </a>.
                      In addition, quotes can also be sorted based on timeline
                      of creation. It also handles error scenarios and loading
                      state.
                    </p>
                  </div>
                  <ul className={styles.projectTechList}>
                    <li>React</li>
                    <li>Redux</li>
                    <li>VS Code</li>
                    <li>Firebase</li>
                  </ul>
                  <div className={styles.projectLinks}>
                    <a
                      href="https://github.com/officialbidisha/QuotesDashboard"
                      aria-label="GitHub Link"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.anchor}
                    >
                      <Image
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
                  href="https://officialbidisha.github.io/QuotesDashboard"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{height: 'auto'}}
                  className={styles.anchor}
                >
                  <Image
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                    src="/images/QuotesDashboard.png"
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
                        style={{filter:'unset'}}
                      />
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href="https://officialbidisha.github.io/React-Task-Reminder/"
                        aria-label="Extenal link"
                        className={`${styles.external} ${styles.anchor}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
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
                      href="https://officialbidisha.github.io/React-Task-Reminder/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.otherProjectA} ${styles.anchor}`}
                    >
                      A Task Reminder using React, that provides a reminder to
                      the user based on the tasks listed
                    </a>
                  </h3>
                  <div className={styles.projectDescription}>
                    <p className={styles.descriptionProject}>
                      Building a website that provides a reminder for listed
                      items from the user. The user can add an item, delete an
                      item and also toggle reminder.
                    </p>
                  </div>
                </header>
                <footer>
                  <ul className={styles.projectTechList}>
                    <li>React</li>
                    <li>JSON Server</li>
                    <li>Visual Studio Code</li>
                    <li>PrimeReact</li>
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
                       src="/images/icons8-folder.svg"
                       width={25}
                       height={25}
                       style={{filter:'unset'}}
                      />
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href="https://github.com/officialbidisha/Assignment-Submission-Portal"
                        aria-label="Extenal link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.anchor} ${styles.external}`}
                      >
                        <Image
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
                       src="/images/icons8-folder.svg"
                        width={25}
                        height={25}
                        style={{filter: 'unset'}}
                      />
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href="https://github.com/officialbidisha/Library-Management-System"
                        aria-label="Extenal link"
                        className={`${styles.external} ${styles.anchor}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
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
                       src="/images/icons8-folder.svg"
                       width={25}
                       height={25}
                       style={{filter:'unset'}}
                      />
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href="https://officialbidisha.github.io/Todo-Mockup/"
                        aria-label="Extenal link"

                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.external} ${styles.newTodoMockup}`}
                      >
                        <Image
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
            I'm available on social networking sites and mostly active on Gmail,
            or LinkedIn. Whether it is just a question, or want to collaborate
            with me, or hire me, kindly drop me an email. I'll revert back to
            you as soon as possible.
          </p>
          <a
            className={`${styles.emailLink} ${styles.anchor}`}
            href="mailto:officialbidisha1@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Say Hello
          </a>
        </section>
      </main>
    </div>
  );
}
