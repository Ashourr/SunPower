"use client";
import "./contactUs.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "leaflet/dist/leaflet.css";
import Map from "./Map";
import { motion } from "motion/react";
import { containerVariants, fadeUp, viewportOnce } from "@/lib/motion";

export default function ContactUs() {
  const locale = useLocale();
  return (
    <div className={`contact-page ${locale}`}>
      <div className="container py-5">
        {/* Header السكشن */}
        <motion.div
          className="contact-header mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="top-tag">
            {locale === "ar" ? "تواصل معنا" : "REACH OUT"}
          </motion.span>
          <motion.h1 variants={fadeUp} className="main-title">
            {locale === "ar" ? (
              <>
                لنمد <span className="highlight">المستقبل</span> بالطاقة.
              </>
            ) : (
              <>
                Let’s Power <span className="highlight">The Future</span>.
              </>
            )}
          </motion.h1>
          <motion.p variants={fadeUp} className="sub-header">
            {locale === "ar"
              ? "هل لديك أسئلة حول كفاءة الطاقة الشمسية؟ فريقنا من الخبراء جاهز لتوجيه انتقالك إلى الطاقة النظيفة."
              : "Have questions about solar efficiency? Our experts are ready to guide your transition."}
          </motion.p>
        </motion.div>

        <motion.div
          className="row g-5 mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* الجانب الأيسر: فورم المراسلة */}
          <motion.div variants={fadeUp} className="col-lg-7">
            <div className="message-card">
              <h3>{locale === "ar" ? "أرسل رسالة" : "Send a Message"}</h3>
              <form className="contact-form">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>
                      {locale === "ar" ? "الاسم بالكامل" : "FULL NAME"}
                    </label>
                    <input
                      type="text"
                      placeholder={
                        locale === "ar" ? "الاسم بالكامل" : "FULL NAME"
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>
                      {locale === "ar" ? "البريد الإلكتروني" : "EMAIL ADDRESS"}
                    </label>
                    <input type="email" placeholder="name@sunpower.com" />
                  </div>
                </div>
                <div className="mb-3">
                  <label>
                    {locale === "ar" ? "نوع الاستفسار" : "INQUIRY TYPE"}
                  </label>
                  <select className="form-select">
                    <option>
                      {locale === "ar" ? "حلول سكنية" : "Residential Solutions"}
                    </option>
                    <option>
                      {locale === "ar" ? "حلول تجارية" : "Commercial Solutions"}
                    </option>
                  </select>
                </div>
                <div className="mb-4">
                  <label>{locale === "ar" ? "رسالتك" : "YOUR MESSAGE"}</label>
                  <textarea
                    rows="4"
                    placeholder={
                      locale === "ar"
                        ? "كيف يمكننا مساعدتك؟"
                        : "How can we help you?"
                    }
                  ></textarea>
                </div>
                <button type="submit" className="btn-send">
                  {locale === "ar" ? "إرسال الرسالة" : "Send Message"}{" "}
                  <FontAwesomeIcon icon={faPaperPlane} className="ms-2" />
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="col-lg-5">
            <div className="info-side">
              <div className="direct-channels-card mb-4">
                <div className="card-title-icon">
                  <FontAwesomeIcon icon={faStar} className="star-icon" />
                  <h4>
                    {locale === "ar" ? "قنوات مباشرة" : "Direct Channels"}
                  </h4>
                </div>
                <div className="channel-item">
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="text-box">
                    <small>{locale === "ar" ? "الهاتف" : "PHONE"}</small>
                    <p>+20 123 456 7890</p>
                  </div>
                </div>
                <div className="channel-item">
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="text-box">
                    <small>
                      {locale === "ar" ? "البريد الإلكتروني" : "EMAIL"}
                    </small>
                    <p>hello@sunpower.energy</p>
                  </div>
                </div>
              </div>

              <div className="headquarters-card">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="map-bg-icon"
                />
                <h4>
                  {locale === "ar" ? "المقرات الرئيسية" : "Global Headquarters"}
                </h4>
                <div className="location-item">
                  <p className="country">
                    {locale === "ar"
                      ? "مصر - أكتوبر - الحصري"
                      : "EGYPT - OCTOBER - EL HOSARY"}
                  </p>
                  <p className="addr">
                    {locale === "ar"
                      ? "ممشى الحصري، مول الطاقة الجديد - أكتوبر"
                      : "El Hosary Walk, New Energy Mall - October"}
                  </p>
                </div>
                <div className="location-item mt-3">
                  <p className="country">
                    {locale === "ar"
                      ? "القاهرة - وسط البلد - متفرع من ش رمسيس"
                      : "CAIRO - DOWNTOWN - OFF RAMSES ST."}
                  </p>
                  <p className="addr">
                    {locale === "ar"
                      ? "23 شعبان، متفرع من رمسيس - وسط البلد"
                      : "23 Shaban St., off Ramses - Downtown"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="map-wrapper-real"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Map />
        </motion.div>
      </div>
    </div>
  );
}
