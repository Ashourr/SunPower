"use client";
import "./about.css";
import { Link, usePathname } from "../../../../i18n/navigation";
import { useLocale } from "next-intl";

export default function AboutHome() {
  const locale = useLocale();
  const pathname = usePathname();

  const isAboutPage = pathname.includes("/about");

  return (
    <div className="about-home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="about-content">
              <span className="about-subtitle">
                {locale === "en" ? "About US" : "معلومات عنا"}
              </span>
              <h2>{locale === "en" ? "Who We Are" : "من نحن؟"}</h2>

              <p>
                {locale === "en"
                  ? "At SunPower, we turn sunlight into smart savings. We specialize in high-efficiency solar solutions for homes and businesses, combining innovative technology with expert installation."
                  : "في صن باور، نحول أشعة الشمس إلى طاقة توفر لك المال وتحمي البيئة. نحن خبراء في تصميم وتركيب أنظمة الطاقة الشمسية بأحدث التقنيات العالمية لنمنحك استقلالاً كاملاً."}
              </p>

              {isAboutPage && (
                <p>
                  {locale === "en"
                    ? "At SunPower, we go beyond just installing solar panels; we deliver a sustainable lifestyle. Our team of experts specializes in turning environmental challenges into economic opportunities, providing cutting-edge renewable energy technologies that grant you full independence from traditional power sources with world-class quality standards."
                    : "في صن باور، نتجاوز فكرة تركيب الألواح الشمسية لنقدم منظومة حياة مستدامة. نحن فريق من الخبراء المتخصصين في تحويل التحديات البيئية إلى فرص اقتصادية، عبر تقديم أحدث تقنيات الطاقة المتجددة التي تمنحك استقلالية كاملة عن مصادر الطاقة التقليدية وبأعلى معايير الجودة العالمية."}
                </p>
              )}

              {!isAboutPage && (
                <Link href="/about" className="btn-about">
                  {locale === "en" ? "Learn More" : "المزيد من المعلومات"}
                </Link>
              )}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="about-video">
              <div className="video-container">
                {/* <iframe
                  src="https://www.youtube.com/embed/Ig01cl7k6vI?si=4ETFXGhdmKT4Ycde"
                  title="SunPower Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                /> */}
                {/* <iframe
                  src="https://www.youtube.com/embed/PuLQ44_NIaE?si=jZGxl-IF6olV3qQN"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                /> */}

                <iframe
                  src="https://www.youtube.com/embed/k92aZqPyc7s?si=URz4tdg_bA17bILy"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
