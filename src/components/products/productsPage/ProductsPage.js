"use client";
import HeaderPage from "@/components/headerPage/HeaderPage";
import { useLocale } from "next-intl";
import ProductsHome from "../productsHome/ProductsHome";

export default function ProductsPage() {
  let locale = useLocale();
  return (
    <>
      <HeaderPage
        title={locale === "en" ? "Our Products" : "منتجاتنا"}
        link={locale === "en" ? "Home" : "الرئيسية"}
        suptitle={
          locale === "en"
            ? "Discover our innovative solar products"
            : "اكتشف منتجاتنا الشمسية المبتكرة"
        }
        bgImg="/image/download (2).webp"
      />
      <ProductsHome />
    </>
  );
}
