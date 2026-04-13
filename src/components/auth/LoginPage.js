"use client";
import "./auth.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import HeaderPage from "../headerPage/HeaderPage";

export default function LoginPage() {
  const locale = useLocale();

  return (
    <>
      <HeaderPage
        title={locale === "en" ? "Login" : "تسجيل الدخول"}
        link={locale === "en" ? "Home" : "الرئيسية"}
        bgImg="/image/download (2).webp"
      />
      <div className={`auth-wrapper ${locale}`}>
        <div className="container">
          <div className="row align-items-center min-vh-100 g-5">
            {/* الجانب الأيسر: النصوص والبراندنج */}
            <div className="col-lg-5">
              <div className="auth-info">
                <span className="secure-badge">
                  <FontAwesomeIcon icon={faShieldAlt} className="me-2" />
                  {locale === "ar"
                    ? "تشفير كوانتوم آمن"
                    : "SECURE QUANTUM ENCRYPTION"}
                </span>
                <h1 className="auth-main-title">
                  {locale === "ar" ? (
                    <>
                      تسخير <span className="highlight">الأفق السماوي</span>{" "}
                      لأعمالك.
                    </>
                  ) : (
                    <>
                      Harness the{" "}
                      <span className="highlight">Celestial Horizon</span> for
                      Your Business.
                    </>
                  )}
                </h1>
                <p className="auth-sub-text">
                  {locale === "ar"
                    ? "انضم إلى التحول العالمي نحو ذكاء الطاقة الشمسية اللامركزي. أدر شبكاتك، وراقب الكفاءة مع أمان بمستوى المؤسسات."
                    : "Join the global shift towards decentralized solar intelligence. Manage your grids and monitor efficiency with institutional-grade security."}
                </p>

                <div className="auth-stats">
                  <div className="stat-card">
                    <h3>99.9%</h3>
                    <p>
                      {locale === "ar"
                        ? "اعتمادية التشغيل"
                        : "Uptime Reliability"}
                    </p>
                  </div>
                  <div className="stat-card">
                    <h3>AES-256</h3>
                    <p>
                      {locale === "ar" ? "خصوصية البيانات" : "Data Privacy"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* الجانب الأيمن: الفورم (المودال) */}
            <div className="col-lg-7">
              <div className="auth-card">
                <div className="card-header">
                  <h2>{locale === "ar" ? "مرحباً بعودتك" : "Welcome back"}</h2>
                  <p>
                    {locale === "ar"
                      ? "أدخل بياناتك للوصول إلى لوحة التحكم"
                      : "Enter your credentials to access your solar dashboard."}
                  </p>
                </div>

                <form className="auth-form">
                  <div className="form-group">
                    <label>
                      {locale === "ar" ? "البريد الإلكتروني" : "EMAIL ADDRESS"}
                    </label>
                    <div className="input-box">
                      <FontAwesomeIcon icon={faEnvelope} className="icon" />
                      <input type="email" placeholder="name@company.com" />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="d-flex justify-content-between">
                      <label>
                        {locale === "ar" ? "كلمة المرور" : "PASSWORD"}
                      </label>

                      <Link href="#" className="forgot-link">
                        {locale === "ar" ? "نسيت؟" : "FORGOT?"}
                      </Link>
                    </div>
                    <div className="input-box">
                      <FontAwesomeIcon icon={faLock} className="icon" />
                      <input type="password" placeholder="••••••••" />
                    </div>
                  </div>

                  <button type="submit" className="btn-auth-submit">
                    {locale === "ar" ? "تسجيل الدخول" : "Authorize Access"}
                  </button>

                  <div className="separator">
                    <span>
                      {locale === "ar"
                        ? "أو تابع باستخدام"
                        : "OR CONTINUE WITH"}
                    </span>
                  </div>

                  <div className="social-login">
                    <button type="button" className="social-btn">
                      <FontAwesomeIcon icon={faGoogle} /> Google
                    </button>
                    <button type="button" className="social-btn">
                      <FontAwesomeIcon icon={faApple} /> Apple
                    </button>
                  </div>

                  <p className="auth-footer">
                    {locale === "ar" ? "جديد في صن باور؟" : "New to SunPower?"}
                    <Link href={`/${locale}/register`}>
                      {locale === "ar" ? "أنشئ حساباً" : "Create an account"}
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
