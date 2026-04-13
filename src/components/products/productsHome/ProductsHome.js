"use client";
import "./productsHome.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "../../../../i18n/navigation";
import Image from "next/image";

export default function ProductsHome() {
  const locale = useLocale();
  const pathname = usePathname();

  // مصفوفة البيانات كاملة باللغتين (8 منتجات)
  const products = [
    {
      id: 1,
      tagAr: "لوح شمسي",
      tagEn: "PANEL",
      effAr: "كفاءة 22.8%",
      effEn: "22.8% Eff.",
      titleAr: "هورايزون ماكس 450 واط",
      titleEn: "Horizon Max 450W",
      descAr:
        "تقنية Bifacial المتطورة لالتقاط الضوء المنعكس وتحقيق أقصى إنتاجية للطاقة.",
      descEn:
        "Advanced Bifacial technology capturing reflected light for maximum energy yield.",
      price: "$899.00",
      img: "/image/p1.webp",
    },
    {
      id: 2,
      tagAr: "بطارية",
      tagEn: "BATTERY",
      effAr: "سعة 13.5 كيلوواط",
      effEn: "13.5 kWh Capacity",
      titleAr: "لونا ستورج كور",
      titleEn: "Luna Storage Core",
      descAr:
        "تخزين ليثيوم عالي الكثافة مع نظام إدارة حراري ذكي لضمان طول العمر.",
      descEn:
        "High-density lithium storage with intelligent thermal management for longevity.",
      price: "$6,450.00",
      img: "/image/p1.webp",
    },
    {
      id: 3,
      tagAr: "محول ذكي",
      tagEn: "SMART INVERTER",
      effAr: "هجين جاهز",
      effEn: "Hybrid Ready",
      titleAr: "نيكسوس إنفرتر ذكي",
      titleEn: "Nexus Smart Inverter",
      descAr:
        "تحويل سلس للطاقة الشمسية إلى تيار متردد نقي مع مراقبة سحابية متقدمة.",
      descEn:
        "Seamless solar conversion to pure AC wave with advanced cloud monitoring.",
      price: "$1,200.00",
      img: "/image/p1.webp",
    },
    {
      id: 4,
      tagAr: "نظام ري",
      tagEn: "IRRIGATION",
      effAr: "أداء عالي",
      effEn: "High Performance",
      titleAr: "مضخة شمسية توربينية",
      titleEn: "Solar Turbine Pump",
      descAr:
        "حلول ري زراعية تعمل كلياً بالطاقة الشمسية لتقليل التكاليف التشغيلية.",
      descEn:
        "Agricultural irrigation solutions powered entirely by solar to reduce costs.",
      price: "$2,500.00",
      img: "/image/p1.webp",
    },
    {
      id: 5,
      tagAr: "لوح شمسي",
      tagEn: "PANEL",
      effAr: "كفاءة 21%",
      effEn: "21% Eff.",
      titleAr: "سولار إكس برو",
      titleEn: "Solar X Pro",
      descAr:
        "تصميم متين يتحمل أصعب الظروف المناخية مع أداء ممتاز في الإضاءة المنخفضة.",
      descEn:
        "Durable design withstanding harsh climates and excellent low-light performance.",
      price: "$750.00",
      img: "/image/p1.webp",
    },
    {
      id: 6,
      tagAr: "بطارية",
      tagEn: "BATTERY",
      effAr: "سعة 10 كيلوواط",
      effEn: "10 kWh Capacity",
      titleAr: "إيكو ستور ميني",
      titleEn: "EcoStore Mini",
      descAr:
        "الحل المثالي لتخزين الطاقة في المنازل المتوسطة مع سهولة التركيب.",
      descEn:
        "The perfect energy storage solution for medium homes with easy installation.",
      price: "$3,200.00",
      img: "/image/p1.webp",
    },
    {
      id: 7,
      tagAr: "محول",
      tagEn: "INVERTER",
      effAr: "منفصل عن الشبكة",
      effEn: "Off-Grid",
      titleAr: "فولت ماستر 5K",
      titleEn: "VoltMaster 5k",
      descAr:
        "محول طاقة قوي مخصص للأنظمة المنفصلة عن الشبكة في المناطق النائية.",
      descEn:
        "Powerful inverter dedicated to off-grid systems in remote areas.",
      price: "$1,100.00",
      img: "/image/p1.webp",
    },
    {
      id: 8,
      tagAr: "لوح شمسي",
      tagEn: "PANEL",
      effAr: "كفاءة 23%",
      effEn: "23% Eff.",
      titleAr: "ألترا ماكس 500 واط",
      titleEn: "Ultra Max 500W",
      descAr:
        "أحدث ما توصلت إليه التكنولوجيا في كفاءة تحويل الطاقة الشمسية عالمياً.",
      descEn:
        "The latest global technology in solar energy conversion efficiency.",
      price: "$950.00",
      img: "/image/p1.webp",
    },
    {
      id: 9,
      tagAr: "لوح شمسي",
      tagEn: "PANEL",
      effAr: "كفاءة 23%",
      effEn: "23% Eff.",
      titleAr: "ألترا ماكس 500 واط",
      titleEn: "Ultra Max 500W",
      descAr:
        "أحدث ما توصلت إليه التكنولوجيا في كفاءة تحويل الطاقة الشمسية عالمياً.",
      descEn:
        "The latest global technology in solar energy conversion efficiency.",
      price: "$950.00",
      img: "/image/p1.webp",
    },
  ];

  const isProductsPage = pathname.includes("/products");
  const displayedProducts = isProductsPage ? products : products.slice(0, 4);

  return (
    <section
      className={`products-home ${locale} ${!isProductsPage ? "home-section" : ""}`}
    >
      <div className="container">
        <div className="content">
          <h6>
            {locale === "ar" ? "منتجاتنا المتميزة" : "OUR PREMIUM PRODUCTS"}
          </h6>
          <div className="title">
            <div>
              {locale === "ar" ? (
                <h2>حلول طاقة ذكية لعملائنا</h2>
              ) : (
                <h2>
                  <span className="span1">Innovative</span> Solar Solutions for{" "}
                  <br />
                  <span className="span2">Our Clients</span>
                </h2>
              )}
            </div>

            {!isProductsPage && (
              <div>
                <Link href={`/${locale}/products`} className="view-all-link">
                  {locale === "ar" ? "عرض جميع المنتجات" : "view all products"}
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="row g-4">
          {displayedProducts.map((item, index) => (
            <div
              className={`col-12 col-md-12 ${isProductsPage ? "col-lg-4" : "col-lg-6"}  product-col ${!isProductsPage && index === 0 ? "first-card-home" : ""}`}
              key={item.id}
            >
              <div className="product-card">
                <div className="product-img">
                  <Image
                    src={item.img}
                    alt={locale === "ar" ? item.titleAr : item.titleEn}
                    width={500}
                    height={500}
                  />
                </div>

                <div className="product-info">
                  <div className="info-top">
                    <span className="tag">
                      {locale === "ar" ? item.tagAr : item.tagEn}
                    </span>
                    <span className="eff">
                      {locale === "ar" ? item.effAr : item.effEn}
                    </span>
                  </div>
                  <h3>{locale === "ar" ? item.titleAr : item.titleEn}</h3>
                  <p>{locale === "ar" ? item.descAr : item.descEn}</p>
                  <div className="info-bottom">
                    <span className="price">{item.price}</span>
                    <Link
                      href={`/${locale}/products/${item.id}`}
                      className="go-btn"
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
