"use client";
import "./whyChooseUs.css";
import { useLocale } from "next-intl";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

export default function WhyChooseUs() {
  const locale = useLocale();

  const reasons = [
    {
      type: "image",
      src: "/image/download (1).webp", 
      titleAr: "لماذا تختار صن باور؟",
      titleEn: "Why Choose SunPower?",
      descAr: "نحن لسنا مجرد شركة طاقة، بل شركاؤك في بناء مستقبل مستدام يعتمد على حلول ذكية توفر لك المال وتحمي الكوكب.",
      descEn: "We are not just an energy company; we are your partners in building a sustainable future.",
      isMain: true // علامة عشان نعرف إن ده العنوان الرئيسي
    },
    {
      id: "01",
      type: "video",
      src: "/image/gemini_generated_video_fd237cab.mp4",
      titleAr: "خبرة تقنية عالمية",
      titleEn: "Global Technical Expertise",
      descAr: "نحن نقدم أحدث تكنولوجيا الألواح الشمسية في العالم مع ضمان كفاءة تشغيل حقيقي يمتد لأكثر من 25 عاماً.",
      descEn: "We provide the latest solar panel technology worldwide with a real 25-year performance warranty."
    },
    {
      id: "02",
      type: "image",
      src: "/image/download (1).webp",
      titleAr: "توفير حقيقي واستثمار ذكي",
      titleEn: "Real Savings, Smart Investment",
      descAr: "وداعاً لفواتير الكهرباء المرتفعة. حلولنا تضمن لك استرداد تكلفة النظام بالكامل في وقت قياسي.",
      descEn: "Say goodbye to high electricity bills. Our solutions guarantee a full ROI in record time."
    },
    {
      id: "03",
      type: "video",
      src: "/image/gemini_generated_video_fd237cab.mp4",
      titleAr: "دعم فني هندسي متكامل",
      titleEn: "Expert Engineering Support",
      descAr: "فريقنا من المهندسين المتخصصين يتابع مشروعك من مرحلة التصميم وحتى التشغيل والصيانة الدورية.",
      descEn: "Our team of specialist engineers follows your project from design to operation and maintenance."
    }
  ];

  return (
    <section className={`why-choose-scroll ${locale}`}>
      {reasons.map((item, index) => (
        <div key={index} className={`full-screen-section ${item.isMain ? 'main-hero' : ''}`}>
          {/* حاوية الخلفية */}
          <div className="background-wrapper">
            {item.type === "video" ? (
              <video autoPlay loop muted playsInline className="fixed-bg-media">
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <div 
                className="fixed-bg-media image-bg" 
                style={{ backgroundImage: `url("${item.src}")` }}
              ></div>
            )}
            <div className="overlay-layer"></div>
          </div>

          {/* محتوى السكشن */}
          <div className="container content-inner">
            <motion.div
              className="text-box"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
            >
              {!item.isMain && <span className="step-num">{item.id}</span>}

              <h2 className={item.isMain ? "main-title" : "item-title"}>
                {locale === "ar" ? item.titleAr : item.titleEn}
              </h2>

              <p className="item-desc">
                {locale === "ar" ? item.descAr : item.descEn}
              </p>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}