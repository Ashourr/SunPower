"use client";
import "./header.css";
import { Link } from "../../../i18n/navigation";
import Image from "next/image";
import headerImg from "../../../public/image/download (1).webp";
import { useLocale } from "next-intl";

export default function Header() {
  let locale = useLocale();
  return (
    <header className={`header ar`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="header-video-bg"
        preload="none"
      >
        <source
          src="/image/gemini_generated_video_fd237cab.mp4"
          type="video/mp4"
        />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      <div className="container">
        <div className="header-content">
          <h1 className={`${locale}`}>
            {locale === "ar"
              ? "صن باور | طاقة شمسية ذكية لمستقبل مستدام"
              : "SunPower | Smart Solar Solutions for a Greener Future"}
          </h1>
          <p className={`${locale}`}>
            {locale === "ar"
              ? "وفّر في فاتورة الكهرباء مع حلول صن باور المتكاملة للطاقة الشمسية. أنظمة ذكية، كفاءة عالية، وتركيب احترافي للمنازل والشركات. ابدأ التوفير الآن!"
              : "Cut your energy bills with SunPowers high-efficiency solar systems. Expert installation for homes and businesses. Switch to clean energy today!"}
          </p>

          <div className="header-buttons">
            <Link href="/cases" className={`btn-1`}>
              {locale === "ar" ? "مشاريعنا" : "Our Projects"}
            </Link>
            <Link href="/calculate_zakat" className={`btn-2`}>
              {locale === "ar" ? "تواصل معنا" : "Contact Us"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
