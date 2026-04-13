"use client";
import HeaderPage from "@/components/headerPage/HeaderPage";
import { useLocale } from "next-intl";
import React from "react";
import ContactUs from "../contactUsHome/ContactUs";

export default function ContactUsPage() {
  let locale = useLocale();
  return (
    <>
      <HeaderPage
        title={locale === "en" ? "Contact Us" : "اتصل بنا"}
        link={locale === "en" ? "Home" : "الرئيسية"}
        suptitle={locale === "en" ? "Contact Us" : "اتصل بنا"}
        bgImg="/image/download (2).webp"
      />
      <ContactUs />
    </>
  );
}
