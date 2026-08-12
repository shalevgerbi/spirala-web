"use client";

import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("שלום, אני רוצה לראות את כל השירותים והסדנאות");
    window.open(`https://wa.me/+972522215609?text=${message}`, "_blank");
  };
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background}></div>
      
      <div className={styles.content}>
        <div className={styles.logo}>
            <Image className={styles.logoImage} src="/spirala-logo.png" alt="ספירלה" width={600} height={200} />
        </div>

        <p className={styles.subtitle}>
          התפתחות • שינה • הורות
        </p>

        <button className={styles.cta} onClick={scrollToServices}>
          לכל השירותים והסדנאות
        </button>
      </div>
    </section>
  );
}
