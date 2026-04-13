"use client";
import { useState } from "react";
import "./faqs.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faQuestionCircle,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "../../../../i18n/navigation";

export default function Faqs() {
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  let pathname = usePathname();

  const faqData = [
    {
      questionAr: "كيف تعمل الألواح الشمسية في الأيام الغائمة؟",
      questionEn: "How do solar panels work on cloudy days?",
      answerAr:
        "تستمر الألواح في إنتاج الطاقة حتى في وجود الغيوم، حيث تعتمد على ضوء الشمس المنتشر، ولكن بكفاءة تتراوح بين 10% إلى 25% من إنتاجها المعتاد.",
      answerEn:
        "Solar panels still produce energy on cloudy days by using diffused sunlight, typically at 10% to 25% of their usual capacity.",
    },
    {
      questionAr: "ما هو العمر الافتراضي لنظام الطاقة الشمسية؟",
      questionEn: "What is the lifespan of a solar energy system?",
      answerAr:
        "العمر الافتراضي للألواح الشمسية يتراوح بين 25 إلى 30 عاماً، بينما الإنفرترات قد تحتاج لتغيير بعد 10 إلى 15 عاماً لضمان أعلى كفاءة.",
      answerEn:
        "Solar panels last between 25 to 30 years, while inverters might need replacement after 10 to 15 years for optimal performance.",
    },
    {
      questionAr: "هل توفر صن باور أنظمة تقسيط؟",
      questionEn: "Does Sun Power provide installment plans?",
      answerAr:
        "نعم، نوفر حلول تمويل وتقسيط مرنة بالتعاون مع كبرى البنوك المصرية لتسهيل التحول للطاقة النظيفة.",
      answerEn:
        "Yes, we provide flexible financing and installment solutions in cooperation with major Egyptian banks.",
    },
    {
      questionAr: "هل يحتاج النظام لصيانة دورية؟",
      questionEn: "Does the system need regular maintenance?",
      answerAr:
        "نعم، يتطلب النظام تنظيفاً دورياً للألواح من الغبار وفحصاً تقنياً سنوياً لضمان عدم وجود فاقد في الطاقة.",
      answerEn:
        "Yes, the system requires periodic cleaning of panels and an annual technical inspection to ensure no power loss.",
    },
    {
      questionAr: "ما هي تكلفة تركيب نظام شمسي للمنزل؟",
      questionEn: "What is the cost of installing a solar system for a home?",
      answerAr:
        "تختلف التكلفة حسب احتياجات المنزل من الطاقة وحجم النظام المطلوب، نقدم دراسة مجانية وتقدير سعر دقيق بعد تحليل الاستهلاك.",
      answerEn:
        "The cost varies depending on the home's energy needs and system size. We provide a free study and accurate price estimate after consumption analysis.",
    },
    {
      questionAr: "هل يمكن تخزين الطاقة الزائدة عن الاستهلاك؟",
      questionEn: "Can excess energy be stored?",
      answerAr:
        "نعم، باستخدام بطاريات تخزين الطاقة يمكنك تخزين الفائض من الكهرباء لاستخدامه ليلاً أو في أوقات انقطاع التيار.",
      answerEn:
        "Yes, using energy storage batteries you can store excess electricity for use at night or during power outages.",
    },
    {
      questionAr: "ما هي أفضل زاوية لتركيب الألواح الشمسية في مصر؟",
      questionEn:
        "What is the best angle for installing solar panels in Egypt?",
      answerAr:
        "تتراوح زاوية الميل المثالية بين 25 إلى 35 درجة باتجاه الجنوب لتحقيق أقصى إنتاجية طاقة طوال العام.",
      answerEn:
        "The ideal tilt angle ranges from 25 to 35 degrees facing south to achieve maximum energy production throughout the year.",
    },
    {
      questionAr: "كم تستغرق عملية التركيب؟",
      questionEn: "How long does the installation process take?",
      answerAr:
        "تستغرق عملية التركيب للنظام المنزلي من 2 إلى 5 أيام عمل، حسب حجم النظام وتعقيد التركيب.",
      answerEn:
        "The installation process for a home system takes 2 to 5 business days, depending on system size and installation complexity.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // التحقق مما إذا كنا في صفحة الخدمات أم في الصفحة الرئيسية
  const isFaqPage = pathname.includes("/faq");

  // عرض 12 إذا كنا في الصفحة، و 6 فقط إذا كنا في السكشن بالصفحة الرئيسية
  const displayedFaqs = isFaqPage ? faqData : faqData.slice(0, 5);

  return (
    <section className={`faqs-section ${locale}`}>
      <div className="container">
        <div className="content">
          <h6>
            <FontAwesomeIcon icon={faQuestionCircle} />{" "}
            {locale === "ar" ? "الأسئلة الشائعة" : "FAQs"}
          </h6>
          <div className="title">
            <div>
              {locale === "ar" ? (
                <h2 className={`${locale}`}>
                  لديك أسئلة؟
                  <br /> نحن نملك الإجابات
                </h2>
              ) : (
                <h2>
                  <span className="span1">Have </span>Questions?
                  <br />
                  <span className="span2">We Have Answers</span>
                </h2>
              )}
            </div>

            {/* إخفاء زر "عرض الكل" إذا كنا بالفعل في صفحة الخدمات */}
            {!isFaqPage && (
              <div>
                <Link href={`/${locale}/faq`} className={`${locale}`}>
                  {locale === "ar" ? "عرض جميع الاسئلة" : "view all faqs"}
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="faq-list">
          {displayedFaqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{locale === "ar" ? item.questionAr : item.questionEn}</h3>
                <span className="faq-icon">
                  <FontAwesomeIcon
                    icon={activeIndex === index ? faMinus : faPlus}
                  />
                </span>
              </div>
              <div className="faq-answer">
                <div className="answer-content">
                  <p>{locale === "ar" ? item.answerAr : item.answerEn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
