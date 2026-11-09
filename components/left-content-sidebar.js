import styles from "./leftContentSidebar.module.css";
import Image from "next/image";

const links = [
  { href: "https://github.com/officialbidisha", label: "GitHub", icon: "/images/github.png" },
  { href: "https://www.linkedin.com/in/bidisha-das/", label: "LinkedIn", icon: "/images/linkedin.png" },
  { href: "https://dev.to/officialbidisha", label: "DEV Community", icon: "/images/dev.svg" },
  { href: "https://bidishadas1.wordpress.com/", label: "Personal blog (WordPress)", icon: "/images/wordpress.png" },
];

export default function LeftContent() {
  return (
    <div className={styles.sideStyledElementLeft}>
      <ul className={styles.socialLinksStyledSidebar}>
        {links.map(({ href, label, icon }) => (
          <li key={href}>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer me"
              className={`${styles.inlineBlock} ${styles.anchor}`}
            >
              <Image src={icon} width={20} height={20} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
