"use client";
import Link from "next/link";
import imgNav from "../../../public/image/1000106246-removebg-preview.png";
import imgNav2 from "../../../public/image/1000106254-removebg-preview.png";
import "./navbar.css";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "../../../i18n/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBagShopping,
  faBars,
  faBriefcase,
  faEarthAmericas,
  faHouse,
  faPassport,
  faSun,
  faUser,
  faUsers,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/rit/slices/ThemeSlice";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("navbar");
  const tLocaleSwitcher = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const nextLocale = locale === "en" ? "ar" : "en";
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleChangeLanguage = useCallback(() => {
    router.replace(pathname, { locale: nextLocale });
  }, [router, pathname, nextLocale]);

  const handleToggleTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Handle navbar scroll effect
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setOpen(false);
}, [pathname]);

  return (
    <div className={`nav-bar w-100 ${scrolled ? "backriund" : ""}`}>
      <div className="container pe-3 ps-3 p-lg-0">
        <nav
          className={`navbar navbar-expand-lg ${scrolled ? "backriund" : ""}`}
        >
          <Link href="/" className="navbar-brand">
            <div className="img">
              {locale === "en" ? (
                <Image
                  src={imgNav}
                  alt={t("logoAlt")}
                  width={150}
                  height={45}
                />
              ) : (
                <Image
                  src={imgNav2}
                  alt={t("logoAlt")}
                  width={150}
                  height={45}
                />
              )}
            </div>
          </Link>

          <div className="d-flex align-items-center">
            <div className="lang" onClick={handleChangeLanguage}>
              <FontAwesomeIcon icon={faEarthAmericas} />
            </div>

            <div onClick={handleToggleTheme}>
              <FontAwesomeIcon
                icon={theme === "light" ? faMoon : faSun}
                className="ico2"
              />
            </div>

            <button
              className="navbar-toggler"
              type="button"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <FontAwesomeIcon icon={open ? faXmark : faBars} />
            </button>
          </div>

          <div
            className={`collapse navbar-collapse ${open ? "show" : ""}`}
            id="mian"
          >
            <ul
              className={`navbar-nav ${
                nextLocale === "en" ? "me-auto" : "ms-auto"
              } mb-2 mb-lg-0`}
            >
              <li className="nav-item">
                <Link
                  href={`/${locale}`}
                  className={`nav-link ${
                    pathname === `/${locale}` || pathname === "/"
                      ? "active"
                      : ""
                  }`}
                  aria-current={
                    pathname === `/${locale}` || pathname === "/"
                      ? "page"
                      : undefined
                  }
                >
                  <FontAwesomeIcon className="link-icon" icon={faHouse} />
                  {locale === "en" ? "Home" : "الرئيسية"}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`/${locale}/about`}
                  className={`nav-link ${
                    pathname === `/${locale}/about` || pathname === "/about"
                      ? "active"
                      : ""
                  }`}
                  aria-current={
                    pathname === `/${locale}/about` || pathname === "/about"
                      ? "page"
                      : undefined
                  }
                >
                  <FontAwesomeIcon className="link-icon" icon={faUsers} />
                  {locale === "en" ? "About Us" : "معلومات عنا"}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`/${locale}/services`}
                  className={`nav-link ${
                    pathname.includes(`/services`) ? "active" : ""
                  }`}
                  aria-current={
                    pathname.includes(`/services`) ? "page" : undefined
                  }
                >
                  <FontAwesomeIcon className="link-icon" icon={faPassport} />
                  {locale === "en" ? "Services" : "خدماتنا"}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`/${locale}/products`}
                  className={`nav-link ${
                    pathname.includes(`/products`) ? "active" : ""
                  }`}
                  aria-current={
                    pathname.includes(`/products`) ? "page" : undefined
                  }
                >
                  <FontAwesomeIcon className="link-icon" icon={faBriefcase} />
                  {locale === "en" ? "Products" : "منتجاتنا"}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`/${locale}/contactUs`}
                  className={`nav-link ${
                    pathname === `/${locale}/contactUs` ||
                    pathname === "/contactUs"
                      ? "active"
                      : ""
                  }`}
                  aria-current={
                    pathname === `/${locale}/contactUs` ||
                    pathname === "/contactUs"
                      ? "page"
                      : undefined
                  }
                >
                  <FontAwesomeIcon className="link-icon" icon={faAddressBook} />
                  {locale === "en" ? "Contact Us" : "تواصل معنا"}
                </Link>
              </li>
              <li className="mood" onClick={handleToggleTheme}>
                <FontAwesomeIcon
                  icon={theme === "light" ? faMoon : faSun}
                  className="ico1"
                />
              </li>
              <li className="lang-but" onClick={handleChangeLanguage}>
                <FontAwesomeIcon icon={faEarthAmericas} />
              </li>
              <div style={{ display: "flex" }}>
                <li className="lang-but2">
                  <Link href={`/${locale}/cart`}>
                    <FontAwesomeIcon icon={faBagShopping} />
                  </Link>
                </li>
                <li className="lang-but2">
                  <Link href={`/${locale}/login`}>
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
