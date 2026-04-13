"use client";
import HeaderPage from "@/components/headerPage/HeaderPage";
import { useLocale } from "next-intl";
import Faqs from "../faqHome/Faqs";

export default function FaqPage() {
  let locale = useLocale();
  return (
    <>
      <HeaderPage
        title={
          locale === "en" ? "Frequently Asked Questions" : "الاسئلة الشائعة"
        }
        link={locale === "en" ? "Home" : "الرئيسية"}
        suptitle={
          locale === "en" ? "Frequently Asked Questions" : "الاسئلة الشائعة"
        }
        bgImg="/image/download (2).webp"
      />
      <Faqs />
    </>
  );
}
