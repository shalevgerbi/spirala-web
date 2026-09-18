import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./LegalPage.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AccessibilityWidget from "./AccessibilityWidget";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.page}>
        <article className={styles.content}>
          <Link className={styles.backLink} href="/">
            חזרה לדף הבית
          </Link>
          <h1>{title}</h1>
          <div className={styles.body}>{children}</div>
        </article>
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}