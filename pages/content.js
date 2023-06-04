import Image from "next/image";
import styles from "./header.module.css";
export default function Content() {
  return (
    <div id="content">
      <main class="pages-styled-main-container fillHeight">
        <section class="hero-styled-hero-section">
          <div class="fadeup-enter-done" style="transition-delay: 100ms">
            <h1>Hi, my name is</h1>
          </div>
          <div class="fadeup-enter-done" style="transition-delay: 300ms">
            <h2 class="big-heading">Bidisha Das</h2>
          </div>
          <div class="fadeup-enter-done" style="transition-delay: 400ms">
            <p>
              I'm a software developer specializing in building and developing
              softwares with remarkable user experience. Having experince React,
              Angular and Vue, I build applications that are scalable and
              flexible.
              <br />
              <br /> Currently, I'm focused on web and mobile performance
              optimisation, building a fintech application (TripMoney), and
              revamping desktop-smooth workflow at
              <a
                href="https://makemytrip.com/"
                target="_blank"
                rel="norefferer"
              >
                MakeMyTrip.
              </a>
            </p>
          </div>
        </section>
        <section
          id="about"
          name="about"
          class="about-styled-about-section"
          data-sr-id="0"
        >
          <h2 class="numbered-heading">About Me</h2>
          <div class="inner">
            <div class="about-styled-text">
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
                  revamping desktop-smooth workflow at
                  <a
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
              <ul class="skills-list">
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
            <div class="about-styled-pic">
              <div class="wrapper">
                <div class="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                  <div style="max-width: 500px; display: block">
                    <img
                      alt
                      role="presentation"
                      aria-hidden="true"
                      src="./transparent.jpg"
                      style="
                        max-width: 100%;
                        display: block;
                        position: static;
                        "
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    style="
                        opacity: 0;
                        transition: opacity 500ms linear 0s;
                        background-color: rgb(232, 232, 232);
                        position: absolute;
                        inset: 0px;
                        object-fit: cover;
                    "
                  ></div>
                  <picture>
                    <img
                      width="500px"
                      height="500px"
                      sizes="(min-width:500px) 500px, 100vw"
                      decoding="async"
                      src="./1.jpg"
                      alt="Headshot"
                    />
                  </picture>
                  <noscript></noscript>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <h2 class="numbered-heading" data-sr-id="3">
            Some Things I've Built
          </h2>
          <ul class="featured-styled-projects">
            <li
              class="featured-styles-project-1 sectionStyle"
            >
              <div class="project-content">
                <div>
                  <p class="project-overline">Featured Project</p>
                  <h3 class="project-title">
                    <a href="https://github.com/officialbidisha/GoogleClone">
                      Google Clone
                    </a>
                  </h3>
                  <div class="project-description">
                    <p>
                      A clone of google with search facilities, random search
                      with images built with love using Next.js
                      <a
                        href="https://google-cloneq-m78il8ifb-officialbidisha.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Clone
                      </a>
                    </p>
                  </div>
                  <ul class="project-tech-list">
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                  </ul>
                  <div class="project-links">
                    <a
                      href="https://github.com/officialbidisha/GoogleClone/"
                      aria-label="Github Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="github.png"
                        style="width: 20px; height: 20px; filter: unset"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-image">
                <a
                  href="https://officialbidisha.github.io/GoogleClone/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style="height: auto"
                >
                  <img
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                    src="./googleclone.png"
                    alt="Google Clone"
                    style="object-fit: cover; opacity: 1"
                  />
                </a>
              </div>
            </li>

            <li
              class="featured-styles-project-1 sectionStyle"
              style="
                visibility: visible;
                opacity: 1;
            "
            >
              <div class="project-content">
                <div>
                  <p class="project-overline">Featured Project</p>
                  <h3 class="project-title">
                    <a href="https://github.com/officialbidisha/FlyM/">FlyM</a>
                  </h3>
                  <div class="project-description">
                    <p>
                      This project provides the feature of flight booking to the
                      user. The user can book flights, and filter based on
                      location, duration, price of flight, airline and whether
                      the flight has one stop or is it non stop. This project is
                      available on
                      <a
                        href="https://officialbidisha.github.io/FlyM/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        FlyM
                      </a>
                    </p>
                  </div>
                  <ul class="project-tech-list">
                    <li>React</li>
                    <li>Redux</li>
                    <li>Thunk</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Material UI</li>
                    <li>Axios</li>
                  </ul>
                  <div class="project-links">
                    <a
                      href="https://github.com/officialbidisha/FlyM/"
                      aria-label="Github Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="github.png"
                        style="width: 20px; height: 20px; filter: unset"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-image">
                <a
                  href="https://officialbidisha.github.io/FlyM/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style="height: auto"
                >
                  <img
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                    src="./Flym1.png"
                    alt="Slack Clone"
                    style="object-fit: cover; opacity: 1"
                  />
                </a>
              </div>
            </li>
            <li
              class="featured-styles-project-1 sectionStyle"
            >
              <div class="project-content">
                <div>
                  <p class="project-overline">Featured Project</p>
                  <h3 class="project-title">
                    <a href="https://github.com/officialbidisha/Slack-Clone-/">
                      Slack Clone
                    </a>
                  </h3>
                  <div class="project-description">
                    <p>
                      This project aims to provide a clone of slack. Individual
                      messages, chat rooms and creation of channel are some of
                      the features provided in this. The project is available on
                      <a
                        href="https://officialbidisha.github.io/Slack-Clone/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Slack Clone
                      </a>
                    </p>
                  </div>
                  <ul class="project-tech-list">
                    <li>VS Code</li>
                    <li>React</li>
                    <li>Firebase</li>
                    <li>Material UI</li>
                    <li>Functional Components</li>
                  </ul>
                  <div class="project-links">
                    <a
                      href="https://github.com/officialbidisha/Slack-Clone-/"
                      aria-label="Github Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="github.png"
                        style="width: 20px; height: 20px; filter: unset"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-image">
                <a
                  href="https://officialbidisha.github.io/Slack-Clone/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style="height: auto"
                >
                  <img
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                    src="./slack-clone.png"
                    alt="Slack Clone"
                    style="object-fit: cover; opacity: 1"
                  />
                </a>
              </div>
            </li>

            <li
              class="featured-styles-project-1"
              style="
                visibility: visible;
                opacity: 1;
                transform: matrix3d(
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                );
                transition: opacity 0.5s
                    cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
                "
            >
              <div class="project-content">
                <div>
                  <p class="project-overline">Featured Project</p>
                  <h3 class="project-title">
                    <a href="https://github.com/officialbidisha/KanbanUI">
                      Jira Clone
                    </a>
                  </h3>
                  <div class="project-description">
                    <p>
                      This project aims to provide a clone of jira dashboard. It
                      is enriched with features like user selection, filter
                      based on keyword, member addition, issue edition and so
                      on. The project is available on
                      <a
                        href="https://62fe7cef544c2510f724b3e7--stately-profiterole-f6c458.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Jira Clone
                      </a>
                    </p>
                  </div>
                  <ul class="project-tech-list">
                    <li>VS Code</li>
                    <li>Angular</li>
                    <li>Spring Boot</li>
                    <li>MongoDB Atlas</li>
                    <li>RxJs</li>
                    <li>Bootstrap</li>
                    <li>PrimeNG</li>
                  </ul>
                  <div class="project-links">
                    <a
                      href="https://github.com/officialbidisha/Jira-Kanban"
                      aria-label="Github Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="github.png"
                        style="width: 20px; height: 20px; filter: unset"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-image">
                <a
                  href="https://officialbidisha.github.io/Jira-Kanban/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style="height: auto"
                >
                  <img
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                    src="./JiraClone.png"
                    alt="Jira Clone"
                    style="object-fit: cover; opacity: 1"
                  />
                </a>
              </div>
            </li>
            <li
              class="featured-styles-project-1"
              style="
                visibility: visible;
                opacity: 1;
                transform: matrix3d(
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                );
                transition: opacity 0.5s
                    cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
                "
            >
              <div class="project-content">
                <div>
                  <p class="project-overline">Featured Project</p>
                  <h3 class="project-title">
                    <a href="https://https://officialbidisha.github.io/CovidTracker/">
                      CovidTracker
                    </a>
                  </h3>
                  <div class="project-description">
                    <p>
                      The project aims to show a statistical record in tabular
                      as well as graphical format of COVID-19 effected patients
                      per country. It shows the record of affected, deceased and
                      recovered patients, available on
                      <a
                        href="https://officialbidisha.github.io/CovidTracker/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CovidTracker
                      </a>
                    </p>
                  </div>
                  <ul class="project-tech-list">
                    <li>VS Code</li>
                    <li>Angular</li>
                    <li>RxJs</li>
                    <li>Bootstrap</li>
                    <li>PrimeNG</li>
                  </ul>
                  <div class="project-links">
                    <a
                      href="https://github.com/officialbidisha/CovidTracker"
                      aria-label="Github Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="github.png"
                        style="width: 20px; height: 20px; filter: unset"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-image">
                <a
                  href="https://officialbidisha.github.io/CovidTracker/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style="height: auto"
                >
                  <img
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                    src="./CovidTracker1.png"
                    alt="Covid-Tracker"
                    style="object-fit: cover; opacity: 1"
                  />
                </a>
              </div>
            </li>
            <li
              class="featured-styles-project-1"
              style="
                visibility: visible;
                opacity: 1;
                transform: matrix3d(
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                );
                transition: opacity 0.5s
                    cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
                "
            >
              <div class="project-content">
                <div>
                  <p class="project-overline">Featured Project</p>
                  <h3 class="project-title">
                    <a
                      href="https://officialbidisha.github.io/MealMarathon/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Meals Marathon
                    </a>
                  </h3>
                  <div class="project-description">
                    <p>
                      A web app that mocks food-ordering app, and deals with the
                      ordering of food items, adding them on cart, and handling
                      cart data using state management, available at,
                      <a
                        href="https://officialbidisha.github.io/MealMarathon/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        ReactMeals
                      </a>
                    </p>
                  </div>
                  <ul class="project-tech-list">
                    <li>React</li>
                    <li>Firebase</li>
                    <li>VS Code</li>
                    <li>Redux</li>
                  </ul>
                  <div class="project-links">
                    <a
                      href="https://github.com/officialbidisha/MealMarathon"
                      aria-label="GitHub Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="github.png"
                        style="width: 20px; height: 20px; filter: unset"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-image">
                <a
                  href="https://officialbidisha.github.io/MealMarathon/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style="height: auto"
                >
                  <img
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                    src="./ReactMeals.png"
                    alt="Covid-Tracker"
                    style="object-fit: cover; opacity: 1"
                  />
                </a>
              </div>
            </li>

            <li
              class="featured-styles-project-1"
              style="
                visibility: visible;
                opacity: 1;
                transform: matrix3d(
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                );
                transition: opacity 0.5s
                    cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
                "
            >
              <div class="project-content">
                <div>
                  <p class="project-overline">Featured Project</p>
                  <h3 class="project-title">
                    <a
                      href="https://officialbidisha.github.io/Git-Guide/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Git Guide
                    </a>
                  </h3>
                  <div class="project-description">
                    <p>
                      An application that shows the summary of a github user,
                      displaying their public repositories, weekly contribution
                      - commits, addition, deletion, avaialble at,
                      <a
                        href="https://officialbidisha.github.io/Git-Guide/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        GitGuide
                      </a>
                      It also handles error scenarios and loading state.
                    </p>
                  </div>
                  <ul class="project-tech-list">
                    <li>Angular</li>
                    <li>Github</li>
                    <li>VS Code</li>
                    <li>NgRx</li>
                  </ul>
                  <div class="project-links">
                    <a
                      href="https://github.com/officialbidisha/Git-Guide"
                      aria-label="GitHub Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="github.png"
                        style="width: 20px; height: 20px; filter: unset"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-image">
                <a
                  href="https://officialbidisha.github.io/Git-Guide/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style="height: auto"
                >
                  <img
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                    src="./git-guide.png"
                    alt="Git-Guide"
                    style="object-fit: cover; opacity: 1"
                  />
                </a>
              </div>
            </li>
            <li
              class="featured-styles-project-1"
              style="
                visibility: visible;
                opacity: 1;
                transform: matrix3d(
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                );
                transition: opacity 0.5s
                    cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
                "
            >
              <div class="project-content">
                <div>
                  <p class="project-overline">Featured Project</p>
                  <h3 class="project-title">
                    <a
                      href="https://officialbidisha.github.io/QuotesDashboard/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Quotes Dashboard
                    </a>
                  </h3>
                  <div class="project-description">
                    <p>
                      A web app that displays quotes added by different users.
                      In addition, it also allows the user to add , edit, and
                      delete quotes. Also, an user can comment on the quote of
                      another user.Available at
                      <a
                        href="https://officialbidisha.github.io/QuotesDashboard/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        QuotesDashboard
                      </a>
                      In addition, quotes can also be sorted based on timeline
                      of creation. It also handles error scenarios and loading
                      state.
                    </p>
                  </div>
                  <ul class="project-tech-list">
                    <li>React</li>
                    <li>Redux</li>
                    <li>VS Code</li>
                    <li>Firebase</li>
                  </ul>
                  <div class="project-links">
                    <a
                      href="https://github.com/officialbidisha/QuotesDashboard"
                      aria-label="GitHub Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="github.png"
                        style="width: 20px; height: 20px; filter: unset"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-image">
                <a
                  href="https://officialbidisha.github.io/QuotesDashboard"
                  rel="noopener noreferrer"
                  target="_blank"
                  style="height: auto"
                >
                  <img
                    sizes="(min-width:900px) 900px, 100vw"
                    decoding="async"
                    src="./QuotesDashboard.png"
                    alt="Git-Guide"
                    style="object-fit: cover; opacity: 1"
                  />
                </a>
              </div>
            </li>
          </ul>
        </section>
        <section class="other-projects" id="smallprojects">
          <h2
            style="
                visibility: visible;
                opacity: 1;
                transform: matrix3d(
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
                );
                transition: opacity 0.5s
                    cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
                transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
            "
          >
            Other Noteworthy Projects
          </h2>
          <ul class="projects-grid">
            <li
              class="styled-project"
              style="
                transition: all 0.25s
                    cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                    opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
                visibility: visible;
                opacity: 1;
                transform: matrix3d(
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                );
                "
            >
              <div class="project-inner">
                <header>
                  <div class="project-top">
                    <div class="folder">
                      <img
                        src="./icons8-folder.svg"
                        style="width: 25px; height: 25px; filter: unset"
                      />
                    </div>
                    <div class="project-links">
                      <a
                        href="https://officialbidisha.github.io/React-Task-Reminder/"
                        aria-label="Extenal link"
                        class="external"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="./icons8-share-3.svg"
                          style="
                            width: 22px;
                            height: 22px;
                            margin-top: -4px;
                            filter: unset;
                            "
                        />
                      </a>
                    </div>
                  </div>
                  <h3 class="project-title">
                    <a
                      href="https://officialbidisha.github.io/React-Task-Reminder/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="other-project-a"
                    >
                      A Task Reminder using React, that provides a reminder to
                      the user based on the tasks listed.
                    </a>
                  </h3>
                  <div class="project-description">
                    <p class="description-project">
                      Building a website that provides a reminder for listed
                      items from the user. The user can add an item, delete an
                      item and also toggle reminder.
                    </p>
                  </div>
                </header>
                <footer>
                  <ul class="project-tech-list">
                    <li>React</li>
                    <li>JSON Server</li>
                    <li>Visual Studio Code</li>
                    <li>PrimeReact</li>
                  </ul>
                </footer>
              </div>
            </li>
            <li
              class="styled-project"
              style="
                transition: all 0.25s
                    cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                    opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
                visibility: visible;
                opacity: 1;
                transform: matrix3d(
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                );
                "
            >
              <div class="project-inner">
                <header>
                  <div class="project-top">
                    <div class="folder">
                      <img
                        src="./icons8-folder.svg"
                        style="width: 25px; height: 25px; filter: unset"
                      />
                    </div>
                    <div class="project-links">
                      <a
                        href="https://github.com/officialbidisha/Assignment-Submission-Portal"
                        aria-label="Extenal link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="external"
                      >
                        <img
                          src="./icons8-share-3.svg"
                          style="
                            width: 22px;
                            height: 22px;
                            margin-top: -4px;
                            filter: unset;
                            "
                        />
                      </a>
                    </div>
                  </div>
                  <h3 class="project-title">
                    <a
                      href="https://github.com/officialbidisha/Assignment-Submission-Portal"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="other-project-a"
                    >
                      Assignment Submission Portal for Online Assignment
                      Assessment
                    </a>
                  </h3>
                  <div class="project-description">
                    <p class="description-project">
                      A web application used to submit assignments, view notice
                      and see study materials. Helps in maintaining distant
                      learning and periodical assessment of student performance.
                    </p>
                  </div>
                </header>
                <footer>
                  <ul class="project-tech-list">
                    <li>PHP</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Hack</li>
                  </ul>
                </footer>
              </div>
            </li>
            <li
              class="styled-project"
              style="
                transition: all 0.25s
                    cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                    opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
                visibility: visible;
                opacity: 1;
                transform: matrix3d(
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                );
                "
            >
              <div class="project-inner">
                <header>
                  <div class="project-top">
                    <div class="folder">
                      <img
                        src="./icons8-folder.svg"
                        style="width: 25px; height: 25px; filter: unset"
                      />
                    </div>
                    <div class="project-links">
                      <a
                        href="https://github.com/officialbidisha/Library-Management-System"
                        aria-label="Extenal link"
                        class="external"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="./icons8-share-3.svg"
                          style="
                            width: 22px;
                            height: 22px;
                            margin-top: -4px;
                            filter: unset;
                            "
                        />
                      </a>
                    </div>
                  </div>
                  <h3 class="project-title">
                    <a
                      href="https://github.com/officialbidisha/Library-Management-System"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="other-project-a"
                    >
                      Library Management System for Educational Institution
                    </a>
                  </h3>
                  <div class="project-description">
                    <p class="description-project">
                      Maintaining education organisation level library
                      management system that accomodates separate accessibility
                      for admin and students.
                    </p>
                  </div>
                </header>
                <footer>
                  <ul class="project-tech-list">
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
              class="styled-project"
              style="
                transition: all 0.25s
                    cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                    opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
                    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
                visibility: visible;
                opacity: 1;
                transform: matrix3d(
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                );
                "
            >
              <div class="project-inner">
                <header>
                  <div class="project-top">
                    <div class="folder">
                      <img
                        src="./icons8-folder.svg"
                        style="width: 25px; height: 25px; filter: unset"
                      />
                    </div>
                    <div class="project-links">
                      <a
                        href="https://officialbidisha.github.io/Todo-Mockup/"
                        aria-label="Extenal link"
                        class="external new-todo-mockup"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="./icons8-share-3.svg"
                          style="
                            width: 22px;
                            height: 22px;
                            margin-top: -4px;
                            filter: unset;
                            "
                        />
                      </a>
                    </div>
                  </div>
                  <h3 class="project-title">
                    <a
                      href="https://officialbidisha.github.io/Todo-Mockup/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="other-project-a"
                    >
                      Todo Mockup using pure HTML, CSS.
                    </a>
                  </h3>
                  <div class="project-description">
                    <p class="description-project">
                      A Mockup design implemented using HTML, SCSS.
                    </p>
                  </div>
                </header>
                <footer>
                  <ul class="project-tech-list">
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
          class="styled-contact-section"
          style="
            visibility: visible;
            opacity: 1;
            transform: matrix3d(
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            );
            transition: opacity 0.5s
                cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
                transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
            "
        >
          <h2 class="numbered-heading overline">Lastly!</h2>
          <h2 class="title">Get In Touch</h2>
          <p style="font-size: 18px">
            I'm available on social networking sites and mostly active on Gmail,
            or LinkedIn. Whether it is just a question, or want to collaborate
            with me, or hire me, kindly drop me an email. I'll revert back to
            you as soon as possible.
          </p>
          <a
            class="email-link"
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
