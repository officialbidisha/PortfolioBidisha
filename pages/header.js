import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#smallprojects", label: "Other Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

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

        <button
          className={styles.hamburgerButton}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <div className={styles.hamburgerBox}>
            <div
              className={`${styles.hamburgerInner} ${
                menuOpen ? styles.hamburgerInnerOpen : ""
              }`}
            />
          </div>
        </button>

        {menuOpen && (
          <div className={styles.overlay} onClick={closeMenu} />
        )}

        <div
          className={`${styles.nav} ${styles.styledLinks} ${
            menuOpen ? styles.styledLinksOpen : ""
          }`}
        >
          <ol>
            {navItems.map(({ href, label }, i) => (
              <li
                key={href}
                className={styles.facedownEnterDone}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <a href={href} className={styles.anchor} onClick={closeMenu}>
                  {" "}
                  {label}{" "}
                </a>
              </li>
            ))}
            <li
              className={styles.facedownEnterDone}
              style={{ transitionDelay: "400ms" }}
            >
              <a
                className={`${styles.resumeButton} ${styles.anchor}`}
                href="./../assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
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
