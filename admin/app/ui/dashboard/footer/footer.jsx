import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const FooterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p>DammySandra</p>
      </div>
      <div className={styles.text}>
        <p>
          © All rights reserved.
          <span>
            Thanks
            <Link href="https://www.youtube.com/watch?v=cBg6xA5C60s&t=1243s">
              <i className={styles.link}>Lama Dev</i>
            </Link>
            for the inspiration!
          </span>
        </p>
      </div>
    </div>
  );
};

export default FooterPage;
