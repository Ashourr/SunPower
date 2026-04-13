"use client";
import HeaderPage from "@/components/headerPage/HeaderPage";
import AboutHome from "../aboutHome/AboutHome";
import { useLocale } from "next-intl";
export default function AboutPage() {
  let locale = useLocale();
  return (
    <>
      <HeaderPage
        title={locale === "en" ? "About Us" : "معلومات عنا"}
        link={locale === "en" ? "Home" : "الرئيسية"}
        suptitle={locale === "en" ? "Learn more about us" : "تعرف علينا أكثر"}
        bgImg="/image/download (2).webp"
      />
      <AboutHome />
    </>
  );
}
