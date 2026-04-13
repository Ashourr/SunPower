"use client";
import HeaderPage from "@/components/headerPage/HeaderPage";
import { useLocale } from "next-intl";
import ServiceHome from "../servicesHome/ServiceHome";

export default function ServicesPage() {
  let locale = useLocale();
  return (
    <>
      <HeaderPage
        title={locale === "en" ? "Our Services" : "خدماتنا"}
        link={locale === "en" ? "Home" : "الرئيسية"}
        suptitle={
          locale === "en"
            ? "Explore our wide range of services"
            : "استكشف مجموعة خدماتنا الواسعة"
        }
        bgImg="/image/download (2).webp"
      />
      <ServiceHome />
    </>
  );
}
