"use client";
import "./ctaSection.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faSolarPanel, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function CtaSection() {
  const locale = useLocale();

  return (
    <section className={`cta-section ${locale}`}>
      <div className="container">
        <div className="cta-box">
          <div className="cta-content">
            <span className="cta-badge">
              <FontAwesomeIcon icon={faRocket} /> {locale === "ar" ? "ابدأ مستقبلك الآن" : "Start Your Future Now"}
            </span>
            <h2 className="cta-title">
              {locale === "ar" 
                ? "هل أنت مستعد للانتقال إلى الطاقة الذكية؟" 
                : "Ready to Switch to Smart Solar Energy?"}
            </h2>
            <p className="cta-desc">
              {locale === "ar" 
                ? "انضم إلى أكثر من 500 منشأة وفرت 80% من تكاليف الكهرباء باستخدام أنظمة صن باور المتطورة." 
                : "Join over 500 facilities that saved 80% on electricity costs using SunPower advanced systems."}
            </p>
            
            <div className="cta-btns">
              <Link href={`/${locale}/contact`} className="btn-primary-yellow">
                {locale === "ar" ? "احصل على استشارة مجانية" : "Get Free Consultation"}
              </Link>
              <Link href={`/${locale}/products`} className="btn-outline-white">
                {locale === "ar" ? "تصفح الحلول" : "Explore Solutions"}
              </Link>
            </div>
          </div>

          <div className="cta-stats">
            <div className="stat-item">
              <FontAwesomeIcon icon={faUsers} className="stat-icon" />
              <div className="stat-info">
                <h4>+5,000</h4>
                <p>{locale === "ar" ? "عميل سعيد" : "Happy Clients"}</p>
              </div>
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faSolarPanel} className="stat-icon" />
              <div className="stat-info">
                <h4>+120MW</h4>
                <p>{locale === "ar" ? "طاقة منتجة" : "Energy Produced"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}