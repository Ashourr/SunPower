"use client";
import "./about.css";
import { Link, usePathname } from "../../../../i18n/navigation";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faSolarPanel,
  faShieldHalved,
  faLeaf,
  faAward,
  faUsers,
  faBolt,
  faPlay,
  faPause,
  faSun,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutHome() {
  const locale = useLocale();
  const pathname = usePathname();
  const isAboutPage = pathname.includes("/about");
  const isAr = locale === "ar";
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const features = [
    {
      icon: faSolarPanel,
      titleEn: "High-Efficiency Panels",
      titleAr: "ألواح عالية الكفاءة",
      descEn: "Tier-1 modules delivering up to 22% peak conversion efficiency.",
      descAr: "ألواح معتمدة عالمياً بكفاءة تحويل فائقة تصل إلى 22%.",
    },
    {
      icon: faShieldHalved,
      titleEn: "25-Year Warranty",
      titleAr: "ضمان شامل 25 عاماً",
      descEn:
        "Long-term performance and peace of mind on every system installed.",
      descAr: "ضمان أداء مستمر وخدمة صيانة دورية لجميع الأنظمة.",
    },
    {
      icon: faLeaf,
      titleEn: "Eco-Friendly Impact",
      titleAr: "أثر بيئي واقتصادي",
      descEn:
        "Slash your utility bills while actively lowering your carbon footprint.",
      descAr: "وفّر تكاليف الكهرباء الشهرية وقلّل الانبعاثات الكربونية.",
    },
  ];

  const stats = [
    {
      icon: faAward,
      value: "15+",
      labelEn: "Years of Trust",
      labelAr: "سنوات خبرة",
    },
    {
      icon: faUsers,
      value: "500+",
      labelEn: "Completed Projects",
      labelAr: "مشروع ناجح",
    },
    {
      icon: faBolt,
      value: "120MW",
      labelEn: "Clean Energy",
      labelAr: "طاقة نظيفة",
    },
  ];

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      className={`about-section ${isAr ? "is-rtl" : "is-ltr"}`}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Decorative Glows */}
      <div className="about-glow-bg" aria-hidden="true">
        <div className="glow-sphere glow-1" />
        <div className="glow-sphere glow-2" />
        <div className="grid-overlay" />
      </div>

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          {/* Content Column */}
          <div className="col-12 col-lg-6">
            <motion.div
              className="about-info-col"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Pill Badge */}
              <motion.div variants={fadeUp} className="about-pill">
                <span className="pill-dot" />
                <FontAwesomeIcon icon={faSun} className="pill-icon" />
                <span>
                  {isAr ? "من نحن — حلول طاقة ذكية" : "About Us — Clean Tech"}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2 variants={fadeUp} className="about-heading">
                {isAr ? (
                  <>
                    نُحوّل ضوء <span className="text-gradient">الشمس</span>
                    <br />
                    إلى{" "}
                    <span className="text-highlight">طاقة واستثمار مستدام</span>
                  </>
                ) : (
                  <>
                    Turning <span className="text-gradient">Sunlight</span>
                    <br />
                    Into{" "}
                    <span className="text-highlight">
                      Smart Sustainable Energy
                    </span>
                  </>
                )}
              </motion.h2>

              {/* Description */}
              <motion.p variants={fadeUp} className="about-lead">
                {isAr
                  ? "نقدم في صن باور أحدث أنظمة الطاقة الشمسية للمنازل والمنشآت التجارية، لنضمن لك استقلالية تامة في الطاقة وخفضاً حقيقياً في التكاليف مع أعلى معايير الجودة العالمية."
                  : "We deliver advanced solar solutions for residential and commercial spaces, combining cutting-edge engineering with dedicated support for true energy independence."}
              </motion.p>

              {/* Extended about page text */}
              {isAboutPage && (
                <motion.div variants={fadeUp} className="about-callout">
                  <div className="callout-icon">
                    <FontAwesomeIcon icon={faSolarPanel} />
                  </div>
                  <p>
                    {isAr
                      ? "رؤيتنا لا تقتصر على تركيب الألواح الشمسية، بل بناء مستقبل مستدام يُعظّم القيمة الاقتصادية ويحمي موارد البيئة للأجيال القادمة."
                      : "Our vision goes beyond hardware installation: we build sustainable infrastructure that transforms climate responsibility into measurable economic value."}
                  </p>
                </motion.div>
              )}

              {/* Features List */}
              <motion.div variants={fadeUp} className="about-features-grid">
                {features.map((item, index) => (
                  <div className="feature-item" key={index}>
                    <div className="feature-icon-box">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div className="feature-text">
                      <h4>{isAr ? item.titleAr : item.titleEn}</h4>
                      <p>{isAr ? item.descAr : item.descEn}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Stats Bar */}
              <motion.div variants={fadeUp} className="about-stats-row">
                {stats.map((stat, index) => (
                  <div className="stat-card" key={index}>
                    <div className="stat-header">
                      <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
                      <span className="stat-val">{stat.value}</span>
                    </div>
                    <span className="stat-lbl">
                      {isAr ? stat.labelAr : stat.labelEn}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Link */}
              {!isAboutPage && (
                <motion.div variants={fadeUp} className="about-action">
                  <Link href="/about" className="solar-btn-primary">
                    <span>{isAr ? "اكتشف المزيد عنا" : "Discover More"}</span>
                    <FontAwesomeIcon
                      icon={isAr ? faArrowLeft : faArrowRight}
                      className="btn-arrow"
                    />
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Media & Video Column */}
          <div className="col-12 col-lg-6">
            <motion.div
              className="about-media-wrapper"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="media-screen">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="media-video"
                  poster="/image/download (1).webp"
                  preload="metadata"
                >
                  <source
                    src="/image/gemini_generated_video_fd237cab.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* Dark Vignette Overlay */}
                <div className="media-overlay" />

                {/* Top Live Bar */}
                <div className="media-top-bar">
                  <div className="media-brand">
                    <FontAwesomeIcon icon={faSolarPanel} />
                    <span>SunPower</span>
                  </div>
                  <div className="media-live-tag">
                    <span className="live-pulse" />
                    <span>{isAr ? "مشروع قائم" : "Active Facility"}</span>
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="media-bottom-info">
                  <span className="info-title">
                    {isAr
                      ? "أنظمة طاقة ذكية ومتكاملة"
                      : "Smart Integrated Systems"}
                  </span>
                  <span className="info-sub">
                    {isAr
                      ? "أعلى كفاءة استهلاك للمنازل والمشاريع"
                      : "Peak energy optimization for modern spaces"}
                  </span>
                </div>

                {/* Video Controls */}
                <button
                  type="button"
                  className="media-play-control"
                  onClick={toggleVideo}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
              </div>

              {/* Floating Stat Badge */}
              <div className="floating-card badge-experience">
                <div className="badge-icon-wrap">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div className="badge-details">
                  <strong>500+</strong>
                  <span>
                    {isAr ? "محطة مركّبة بنجاح" : "Installations Delivered"}
                  </span>
                </div>
              </div>

              {/* Floating Efficiency Chip */}
              <div className="floating-card badge-chip">
                <FontAwesomeIcon icon={faSun} className="chip-sun" />
                <span>{isAr ? "طاقة متجددة 100%" : "100% Green Energy"}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
