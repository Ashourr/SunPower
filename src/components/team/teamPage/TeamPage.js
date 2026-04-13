"use client";
import HeaderPage from "@/components/headerPage/HeaderPage";
import { useLocale } from "next-intl";
import React from "react";
import Team from "../teamHome/Team";

export default function TeamPage() {
  let locale = useLocale();
  return (
    <>
      <HeaderPage
        title={locale === "en" ? "Our Team" : "فريقنا"}
        link={locale === "en" ? "Home" : "الرئيسية"}
        suptitle={locale === "en" ? "Meet our team" : "تعرف على فريقنا"}
        bgImg="/image/download (2).webp"
      />
      <Team />
    </>
  );
}
