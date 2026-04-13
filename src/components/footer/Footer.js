"use client";
import "./footer.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footer() {
  const locale = useLocale();

  return (
    <footer className={`main-footer ${locale}`}>
      <div className="container">
        <div className="row g-5">
          {/* 1. عن الشركة والبراند */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <h2 className="footer-logo">
                SUN<span>POWER</span>
              </h2>
              <p className="footer-desc">
                {locale === "ar"
                  ? "الرائد في حلول الطاقة الشمسية الذكية بمصر والشرق الأوسط. نحن نصمم المستقبل بطاقة نظيفة ومستدامة."
                  : "Leader in smart solar solutions in Egypt and the Middle East. We design the future with clean, sustainable energy."}
              </p>
              <div className="social-links">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>

          {/* 2. روابط سريعة */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-links">
              <h4>{locale === "ar" ? "روابط سريعة" : "Quick Links"}</h4>
              <ul>
                <li>
                  <Link href={`/${locale}`}>
                    {locale === "ar" ? "الرئيسية" : "Home"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/about`}>
                    {locale === "ar" ? "من نحن" : "About Us"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/services`}>
                    {locale === "ar" ? "خدماتنا" : "Services"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/products`}>
                    {locale === "ar" ? "المنتجات" : "Products"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/contactus`}>
                    {locale === "ar" ? "اتصل بنا" : "Contact us"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. معلومات التواصل */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-contact">
              <h4>{locale === "ar" ? "تواصل معنا" : "Contact Us"}</h4>
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>
                  {locale === "ar"
                    ? "الفيوم، مدينة الفيوم، مصر"
                    : "Fayoum City, Egypt"}
                </span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>+20 123 456 7890</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>info@sunpower.energy</span>
              </div>
            </div>
          </div>

          {/* 4. النشرة الإخبارية */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-newsletter">
              <h4>{locale === "ar" ? "النشرة الإخبارية" : "Newsletter"}</h4>
              <p>
                {locale === "ar"
                  ? "اشترك ليصلك أحدث عروضنا وأخبار الطاقة."
                  : "Subscribe for the latest offers and solar news."}
              </p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder={
                    locale === "ar" ? "بريدك الإلكتروني" : "Your Email"
                  }
                />
                <button type="submit">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                © 2026 SUNPOWER.{" "}
                {locale === "ar"
                  ? "جميع الحقوق محفوظة"
                  : "All Rights Reserved."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
