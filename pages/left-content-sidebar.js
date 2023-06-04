import styles from "./leftContentSidebar.module.css";
import Image from "next/image";
export default function LeftContent() {
  return (
    <div orientation="left" className={styles.sideStyledElementLeft}>
      <ul className={styles.socialLinksStyledSidebar}>
        <li>
          <a
            href="https://github.com/officialbidisha"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className={`${styles.inlineBlock} ${styles.anchor}`}
          >
            <Image src="/images/github.png" width={20} height={20}/>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/bidisha___._/"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            className={`${styles.inlineBlock} ${styles.anchor}`}
          >
            <Image src="/images/instagram.png" width={20} height={20}/>
          </a>
        </li>
        <li>
          <a
            href="https://bidishadas1.wordpress.com/"
            aria-label="WordPress"
            target="_blank"
            rel="noreferrer"
            className={`${styles.inlineBlock} ${styles.anchor}`}
          >
              <Image src="/images/wordpress.png" width={20} height={20}/>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/bidisha-das/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className={`${styles.inlineBlock} ${styles.anchor}`}
          >
              <Image src="/images/linkedin.png" width={20} height={20}/>
          </a>
        </li>
      </ul>
    </div>
  );
}
