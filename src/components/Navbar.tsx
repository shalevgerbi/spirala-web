"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type MouseEvent } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);
  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    closeMenu();

    if (pathname === "/") {
      event.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logoLink} aria-label="ספירלה - לדף הבית" onClick={handleLogoClick}>
        <Image
          className={styles.logo}
          src="/spirala-logo.PNG"
          alt="ספירלה"
          width={150}
          height={50}
          priority
        />
      </Link>

      <button
        className={styles.menuButton}
        type="button"
        aria-label={isMenuOpen ? "סגירת תפריט" : "פתיחת תפריט"}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        className={`${styles.links} ${isMenuOpen ? styles.linksOpen : ""}`}
        aria-label="ניווט ראשי"
      >
        <a href={pathname === "/" ? "#about" : "/#about"} onClick={(event) => handleSectionClick(event, "about")}>אודות</a>
        <a href={pathname === "/" ? "#services" : "/#services"} onClick={(event) => handleSectionClick(event, "services")}>סדנאות והדרכות</a>
        {/* <a href={pathname === "/" ? "#cupons" : "/#cupons"} onClick={(event) => handleSectionClick(event, "cupons")}>הטבות</a> */}
        <a href={pathname === "/" ? "#contact" : "/#contact"} onClick={(event) => handleSectionClick(event, "contact")}>צור קשר</a>
      </nav>
    </header>
  );
}