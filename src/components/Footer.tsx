"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>ספירלה</h3>
            <p>ליווי מקצועי ורגיש לאימהות ותינוקות</p>
          </div>

          <div className={styles.section}>
            <h4>קישורים</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/spirala_bysapir/" target="_blank" rel="noopener noreferrer">
                  אינסטגרם
                </a>
              </li>
              <li>
                <a href="mailto:contact@sapirgerbi.com">דוא״ל</a>
              </li>
              <li>
                <a href="https://wa.me/+972522215609" target="_blank" rel="noopener noreferrer">
                  וואטסאפ
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>יצירת קשר</h4>
            <p>נשמח לשמוע ממך!</p>
            <a href="mailto:contact@sapirgerbi.com" className={styles.email}>
              contact@sapirgerbi.com
            </a>
          </div>

          <div className={styles.section}>
            <h4>מידע משפטי</h4>
            <ul>
              <li>
                <a href="/site-terms">תקנון האתר</a>
              </li>
              <li>
                <a href="/accessibility">הצהרת נגישות</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} ספירלה. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
