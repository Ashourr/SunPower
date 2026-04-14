"use client";
import "./serviceDetails.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faTools,
  faShieldAlt,
  faChartLine,
  faSolarPanel,
  faBolt,
  faLeaf,
  faClock,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function ServiceDetails() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const content = {
    hero: {
      tag: isArabic ? "خدمات هندسية" : "Engineering Services",
      title: isArabic
        ? "تصميم وتركيب أنظمة الطاقة الشمسية الهجينة"
        : "Design & Installation of Hybrid Solar Systems",
      brief: isArabic
        ? "نقدم لك الحل الأمثل للاستقلال التام عن شبكة الكهرباء التقليدية من خلال أحدث تقنيات الطاقة المتجددة في مصر."
        : "Providing the ultimate solution for full energy independence through the latest renewable technologies in Egypt.",
    },
    description: {
      title: isArabic
        ? "وصف الخدمة الشامل"
        : "Comprehensive Service Description",
      content: isArabic
        ? "في صن باور، لا نقوم بمجرد تركيب ألواح؛ نحن نصمم محطة طاقة ذكية مصممة خصيصاً لاحتياجاتك. تبدأ خدمتنا بتحليل دقيق للاستهلاك الكهربائي لبيتك أو مصنعك، ثم نقوم باستخدام برمجيات المحاكاة العالمية لتحديد الموقع الأمثل وزوايا الميل التي تضمن لك الحصول على أعلى إنتاجية طاقة ممكنة على مدار فصول السنة الأربعة."
        : "At SunPower, we don't just install panels; we design a smart power plant tailored to your needs. Our service begins with a precise analysis of your electrical consumption, followed by world-class simulation software to determine optimal placement and tilt angles.",
    },
    features: [
      {
        icon: faSolarPanel,
        title: isArabic ? "مكونات عالمية" : "Global Components",
        desc: isArabic
          ? "نستخدم ألواح الفئة (Tier 1) مع إنفرترات ذكية تضمن كفاءة تحويل تتخطى 98%."
          : "Using Tier 1 panels and smart inverters ensuring 98%+ conversion efficiency.",
      },
      {
        icon: faShieldAlt,
        title: isArabic ? "أمان وحماية" : "Safety & Protection",
        desc: isArabic
          ? "أنظمة حماية متكاملة ضد الصواعق، الارتفاع المفاجئ في التيار، والظروف الجوية الصعبة."
          : "Integrated protection against lightning, surges, and extreme weather conditions.",
      },
      {
        icon: faChartLine,
        title: isArabic ? "مراقبة ذكية" : "Smart Monitoring",
        desc: isArabic
          ? "نظام مراقبة عن بعد عبر تطبيق الهاتف لمتابعة إنتاج الطاقة والأداء لحظة بلحظة."
          : "Remote monitoring system via mobile app to track energy production and performance in real-time.",
      },
      {
        icon: faBolt,
        title: isArabic ? "كفاءة عالية" : "High Efficiency",
        desc: isArabic
          ? "تقنيات حديثة تزيد من كفاءة تحويل الطاقة بنسبة تصل إلى 25% مقارنة بالأنظمة التقليدية."
          : "Modern technologies increase energy conversion efficiency by up to 25% compared to traditional systems.",
      },
    ],
    benefits: [
      {
        title: isArabic ? "توفير فوري:" : "Immediate Savings:",
        desc: isArabic
          ? "ستلاحظ انخفاض فاتورة الكهرباء من أول شهر تشغيل للمحطة."
          : "Notice electricity bill reduction from the first month of operation.",
      },
      {
        title: isArabic ? "عمر افتراضي طويل:" : "Long Lifespan:",
        desc: isArabic
          ? "أنظمتنا مصممة لتعمل بكفاءة عالية لمدة تتجاوز الـ 25 عاماً."
          : "Our systems are designed to operate efficiently for over 25 years.",
      },
      {
        title: isArabic ? "صيانة منخفضة:" : "Low Maintenance:",
        desc: isArabic
          ? "لا تحتاج أنظمتنا إلى صيانة دورية مكلفة، فقط تنظيف بسيط للألواح."
          : "Our systems require no expensive periodic maintenance, just simple panel cleaning.",
      },
      {
        title: isArabic ? "صديق للبيئة:" : "Eco-Friendly:",
        desc: isArabic
          ? "تخفيض البصمة الكربونية والمساهمة في حماية البيئة للأجيال القادمة."
          : "Reducing carbon footprint and contributing to environmental protection for future generations.",
      },
    ],
    technicalSpecs: {
      title: isArabic ? "المواصفات التقنية" : "Technical Specifications",
      specs: isArabic
        ? [
            "ألواح من الدرجة الأولى بكفاءة تصل إلى 22%",
            "إنفرترات هجينة تعمل على أوضاع متعددة",
            "بطاريات ليثيوم أيون عالية الجودة",
            "نظام مراقبة وإنذار ذكي",
            "ضمان شامل لمدة 10 سنوات على جميع المكونات",
            "ضمان أداء للألواح لمدة 25 سنة",
          ]
        : [
            "Tier-1 panels with up to 22% efficiency",
            "Hybrid inverters with multiple operating modes",
            "High-quality Lithium-ion batteries",
            "Smart monitoring and alert system",
            "Comprehensive 10-year warranty on all components",
            "25-year performance warranty on panels",
          ],
    },
    process: {
      title: isArabic ? "كيف نعمل؟" : "How We Work?",
      steps: isArabic
        ? [
            "الاستشارة ودراسة الجدوى",
            "تصميم النظام واختيار المكونات",
            "التركيب الاحترافي والتشغيل",
            "التدريب والدعم الفني",
          ]
        : [
            "Consultation & Feasibility Study",
            "System Design & Component Selection",
            "Professional Installation & Commissioning",
            "Training & Technical Support",
          ],
    },
    form: {
      name: isArabic ? "الاسم بالكامل" : "Full Name",
      email: isArabic ? "البريد الإلكتروني" : "Email Address",
      phone: isArabic ? "رقم الهاتف" : "Phone Number",
      details: isArabic ? "تفاصيل طلبك..." : "Request Details...",
      submit: isArabic ? "إرسال الطلب" : "Submit Request",
    },
    helpCard: {
      title: isArabic ? "هل تحتاج استشارة فنية؟" : "Need Technical Advice?",
      desc: isArabic
        ? "مهندسونا جاهزون للإجابة على كافة استفساراتكم التقنية مجاناً."
        : "Our engineers are ready to answer all your technical questions for free.",
      button: isArabic ? "تحدث مع مهندس" : "Talk to an Engineer",
    },
  };

  return (
    <div className={`service-details-page ${locale}`}>
      {/* Hero Section */}
      <section className="details-hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('/image/download (1).webp')" }}
        ></div>
        <div className="container">
          <div className="hero-content">
            <h1>{content.hero.title}</h1>
            <p className="hero-brief">{content.hero.brief}</p>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row g-5">
          {/* Main Content */}
          <div className="col-lg-8">
            <div className="detailed-description">
              <Image 
                src="/image/download (1).webp"
                alt="Solar Tech"
                width={500}
                height={300}
                className="feature-main-img"
              />

              <h2 className="section-title">{content.description.title}</h2>
              <p className="large-p">{content.description.content}</p>

              {/* Features Grid */}
              <div className="tech-specs-grid">
                {content.features.map((feature, index) => (
                  <div className="spec-card" key={index}>
                    <FontAwesomeIcon icon={feature.icon} className="icon" />
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Technical Specifications */}
              <div className="technical-section">
                <h3 className="subsection-title">
                  {content.technicalSpecs.title}
                </h3>
                <div className="specs-list">
                  {content.technicalSpecs.specs.map((spec, index) => (
                    <div className="spec-item" key={index}>
                      <FontAwesomeIcon icon={faTools} className="spec-icon" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Section */}
              <div className="process-section">
                <h3 className="subsection-title">{content.process.title}</h3>
                <div className="process-steps">
                  {content.process.steps.map((step, index) => (
                    <div className="step" key={index}>
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <h4>{step}</h4>
                        <p>
                          {isArabic
                            ? `المرحلة ${index + 1} من عملية التنفيذ`
                            : `Stage ${index + 1} of implementation process`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <aside className="details-sidebar">
              <div className="sidebar-widget quote-form">
                <h4>{isArabic ? "اطلب عرض سعر الآن" : "Request a Quote"}</h4>
                <form>
                  <input type="text" placeholder={content.form.name} />
                  <input type="email" placeholder={content.form.email} />
                  <input type="tel" placeholder={content.form.phone} />
                  <textarea
                    rows="4"
                    placeholder={content.form.details}
                  ></textarea>
                  <button type="submit" className="submit-btn">
                    {content.form.submit}
                  </button>
                </form>
              </div>

              <div className="sidebar-widget stats-widget">
                <h5>{isArabic ? "إحصائياتنا" : "Our Statistics"}</h5>
                <div className="stat-item">
                  <FontAwesomeIcon icon={faSolarPanel} />
                  <div>
                    <span className="stat-number">500+</span>
                    <span className="stat-label">
                      {isArabic ? "مشروع منفذ" : "Projects Completed"}
                    </span>
                  </div>
                </div>
                <div className="stat-item">
                  <FontAwesomeIcon icon={faLeaf} />
                  <div>
                    <span className="stat-number">10K+</span>
                    <span className="stat-label">
                      {isArabic ? "طن انبعاثات مخفضة" : "Tons CO2 Reduced"}
                    </span>
                  </div>
                </div>
                <div className="stat-item">
                  <FontAwesomeIcon icon={faClock} />
                  <div>
                    <span className="stat-number">15+</span>
                    <span className="stat-label">
                      {isArabic ? "سنوات خبرة" : "Years Experience"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="sidebar-widget help-card">
                <div className="help-icon">
                  <FontAwesomeIcon icon={faHeadset} />
                </div>
                <h5>{content.helpCard.title}</h5>
                <p>{content.helpCard.desc}</p>
                <button className="contact-now">
                  {content.helpCard.button}
                </button>
              </div>
              {/* Benefits Section */}
              <div className="benefits-section">
                <h3 className="subsection-title">
                  {isArabic ? "المزايا الرئيسية" : "Key Benefits"}
                </h3>
                <div className="benefits-grid">
                  {content.benefits.map((benefit, index) => (
                    <div className="benefit-item" key={index}>
                      <FontAwesomeIcon
                        icon={faCheckDouble}
                        className="check-icon"
                      />
                      <div>
                        <strong>{benefit.title}</strong>
                        <span>{benefit.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
