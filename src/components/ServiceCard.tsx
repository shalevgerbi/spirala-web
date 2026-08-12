"use client";

import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    subtitle?: string;
    description: string;
    benefits: string[];
    buttonText: string;
    whatsappMessage: string;
    icon: string;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(service.whatsappMessage);
    window.open(`https://wa.me/+972522215609?text=${message}`, "_blank");
  };

  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{service.icon}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{service.title}</h3>
        {service.subtitle && (
          <p className={styles.subtitle}>{service.subtitle}</p>
        )}

        <p className={styles.description}>{service.description}</p>

        {service.benefits.length > 0 && (
          <div className={styles.benefits}>
            <h4>מה תקבלי בשירות?</h4>
            <ul>
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button className={styles.button} onClick={handleWhatsApp}>
        {service.buttonText}
      </button>
    </div>
  );
}
