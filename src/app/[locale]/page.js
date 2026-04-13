import AboutHome from "@/components/about/aboutHome/AboutHome";
import ContactUs from "@/components/contactUs/contactUsHome/ContactUs";
import CtaSection from "@/components/cta/CtaSection";
import Faqs from "@/components/faq/faqHome/Faqs";
import Header from "@/components/header/Header";
import ProductsHome from "@/components/products/productsHome/ProductsHome";
import ServiceHome from "@/components/service/servicesHome/ServiceHome";
import Team from "@/components/team/teamHome/Team";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <AboutHome />
      <ServiceHome />
      <WhyChooseUs />
      <ProductsHome />
      <Faqs />
      <CtaSection />
      <Team />
      <ContactUs />
    </>
  );
}
