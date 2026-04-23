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

export default function ContactUs() {
  const locale = useLocale();
  return (
    <div className={`contact-page ${locale}`}>
      <div className="container py-5">
        {/* Header السكشن */}
        <div className="contact-header mb-5">
          <span className="top-tag">
            {locale === "ar" ? "تواصل معنا" : "REACH OUT"}
          </span>
          <h1 className="main-title">
            {locale === "ar" ? (
              <>
                لنمد <span className="highlight">المستقبل</span> بالطاقة.
              </>
            ) : (
              <>
                Let’s Power <span className="highlight">The Future</span>.
              </>
            )}
          </h1>
          <p className="sub-header">
            {locale === "ar"
              ? "هل لديك أسئلة حول كفاءة الطاقة الشمسية؟ فريقنا من الخبراء جاهز لتوجيه انتقالك إلى الطاقة النظيفة."
              : "Have questions about solar efficiency? Our experts are ready to guide your transition."}
          </p>
        </div>

        <div className="row g-5 mb-5">
          {/* الجانب الأيسر: فورم المراسلة */}
          <div className="col-lg-7">
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
          </div>

          {/* الجانب الأيمن: القنوات والمقرات */}
          <div className="col-lg-5">
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
          </div>
        </div>

        {/* سكشن الخريطة السفلي */}
        <div className="map-wrapper-real">
          <Map />
        </div>
      </div>
    </div>
  );
}
