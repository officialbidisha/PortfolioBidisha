import Image from "next/image";
import styles from "./header.module.css";
export default function Header() {
  return (
    <header className={`${styles.nav} ${styles.styledHeader}`}>
      <nav className={`${styles.nav} ${styles.styledNav}`}>
        <div tabIndex="-1">
          <a href="#about" aria-label="home" className={styles.anchor}>
            <Image
              src="/images/logo.jpg"
              width={80}
              height={60}
              style={{filter:"unset"}}
              href="/"
            />
          </a>
        </div>
        <div className={`${styles.nav} ${styles.styledLinks}`}>
          <ol>
            <li
              className={styles.facedownEnterDone}
              style={{ transitionDelay: "0ms" }}
            >
              <a href="#about" className={styles.anchor}>
                {" "}
                About{" "}
              </a>
            </li>

            <li
              className={styles.facedownEnterDone}
              style={{ transitionDelay: "200ms" }}
            >
              <a href="#projects" className={styles.anchor}>
                {" "}
                Work{" "}
              </a>
            </li>
            <li
              className={styles.facedownEnterDone}
              style={{ transitionDelay: "100ms" }}
            >
              <a href="#smallprojects" className={styles.anchor}>
                {" "}
                Other Projects{" "}
              </a>
            </li>
            <li
              className={styles.facedownEnterDone}
              style={{ transitionDelay: "300ms" }}
            >
              <a href="#contact" className={styles.anchor}>
                {" "}
                Contact{" "}
              </a>
            </li>
            <li
              className={styles.facedownEnterDone}
              style={{ transitionDelay: "400ms" }}
            >
              <a
                className={`${styles.resumeButton} ${styles.anchor}`}
                href="./Bidisha_Das__Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
}
