"use client";
import "./auth.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faPhone,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import HeaderPage from "../headerPage/HeaderPage";

export default function RegisterPage() {
  const locale = useLocale();

  return (
    <>
      <HeaderPage
        title={locale === "en" ? "Register" : "انشاء حساب"}
        link={locale === "en" ? "Home" : "الرئيسية"}
        bgImg="/image/download (2).webp"
      />
      <div className={`auth-wrapper ${locale}`}>
        <div className="container">
          <div className="row align-items-center min-vh-100 g-5">
            {/* الجانب الأيسر (البراندنج) */}
            <div className="col-lg-5 ">
              <div className="auth-info">
                <span className="secure-badge">
                  <FontAwesomeIcon icon={faShieldAlt} className="me-2" />
                  {locale === "ar"
                    ? "تأمين بيانات متطور"
                    : "ADVANCED DATA SECURITY"}
                </span>
                <h1 className="auth-main-title">
                  {locale === "ar" ? (
                    <>
                      انضم إلى مستقبل{" "}
                      <span className="highlight">الطاقة النظيفة</span>.
                    </>
                  ) : (
                    <>
                      Join the Future of{" "}
                      <span className="highlight">Clean Energy</span>.
                    </>
                  )}
                </h1>
                <p className="auth-sub-text">
                  {locale === "ar"
                    ? "قم بإنشاء حسابك الآن للوصول إلى أدوات إدارة الطاقة الشمسية الأكثر تطوراً في مصر."
                    : "Create your account now to access Egypt's most advanced solar energy management tools."}
                </p>
              </div>
            </div>

            {/* الجانب الأيمن (فورم إنشاء الحساب المطور) */}
            <div className="col-lg-7">
              <div className="auth-card">
                <div className="card-header">
                  <h2>{locale === "ar" ? "إنشاء حساب" : "Create Account"}</h2>
                  <p>
                    {locale === "ar"
                      ? "أدخل بياناتك للانضمام إلى صن باور"
                      : "Enter your details to join SunPower"}
                  </p>
                </div>

                <form className="auth-form">
                  {/* حقل الاسم */}
                  <div className="form-group">
                    <label>
                      {locale === "ar" ? "الاسم الكامل" : "FULL NAME"}
                    </label>
                    <div className="input-box">
                      <FontAwesomeIcon icon={faUser} className="icon" />
                      <input
                        type="text"
                        placeholder={
                          locale === "ar" ? "اسم المستخدم" : "USER NAME"
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* حقل البريد */}
                  <div className="form-group">
                    <label>
                      {locale === "ar" ? "البريد الإلكتروني" : "EMAIL ADDRESS"}
                    </label>
                    <div className="input-box">
                      <FontAwesomeIcon icon={faEnvelope} className="icon" />
                      <input
                        type="email"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                  </div>

                  {/* حقل كلمة المرور */}
                  <div className="form-group">
                    <label>
                      {locale === "ar" ? "كلمة المرور" : "PASSWORD"}
                    </label>
                    <div className="input-box">
                      <FontAwesomeIcon icon={faLock} className="icon" />
                      <input type="password" placeholder="••••••••" required />
                    </div>
                  </div>

                  {/* حقل تأكيد كلمة المرور (الجديد) */}
                  <div className="form-group">
                    <label>
                      {locale === "ar"
                        ? "تأكيد كلمة المرور"
                        : "CONFIRM PASSWORD"}
                    </label>
                    <div className="input-box">
                      <FontAwesomeIcon icon={faLock} className="icon" />
                      <input type="password" placeholder="••••••••" required />
                    </div>
                  </div>

                  <button type="submit" className="btn-auth-submit">
                    {locale === "ar" ? "إنشاء الحساب" : "Create Account"}
                  </button>

                  <p className="auth-footer mt-4">
                    {locale === "ar"
                      ? "لديك حساب بالفعل؟"
                      : "Already have an account?"}{" "}
                    <Link href={`/${locale}/login`}>
                      {locale === "ar" ? "تسجيل الدخول" : "Login"}
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
