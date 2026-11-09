import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import LeftContent from '../components/left-content-sidebar';
import Content from '../components/content';

const SITE_URL = 'https://portfolio-bidisha.vercel.app/';
const TITLE = 'Bidisha Das | Senior Software Engineer, Backend & Platform Engineering';
const DESCRIPTION =
  'Bidisha Das is a Senior Member of Technical Staff at Salesforce building secure, scalable backend systems and AI agent platforms: enterprise authorization, Java and Python services, MCP integrations and permission-aware execution.';
const OG_IMAGE = `${SITE_URL}images/1.jpg`;

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bidisha Das',
  url: SITE_URL,
  image: OG_IMAGE,
  jobTitle: 'Senior Member of Technical Staff',
  worksFor: { '@type': 'Organization', name: 'Salesforce', url: 'https://www.salesforce.com/' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: "St. Thomas' College of Engineering & Technology" },
  knowsAbout: [
    'Backend engineering',
    'Platform engineering',
    'Distributed systems',
    'Enterprise authorization',
    'Role-based access control',
    'AI agent infrastructure',
    'Model Context Protocol',
    'Java',
    'Spring Boot',
    'Python',
    'PostgreSQL',
  ],
  sameAs: [
    'https://github.com/officialbidisha',
    'https://www.linkedin.com/in/bidisha-das/',
    'https://dev.to/officialbidisha',
    'https://stackoverflow.com/users/11637039/bidisha-das',
    'https://topmate.io/bidisha_das10',
  ],
};

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Bidisha Das" />
        <meta name="theme-color" content="#0a192f" />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Bidisha Das" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content="Bidisha Das" />
        <meta property="profile:first_name" content="Bidisha" />
        <meta property="profile:last_name" content="Das" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <link rel="icon" href="/logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet"></link>
      </Head>
      <Header></Header>
      <LeftContent></LeftContent>
      <Content></Content>
      <main>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
