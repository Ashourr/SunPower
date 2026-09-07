"use client";
import "./productsHome.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "../../../../i18n/navigation";
import Image from "next/image";
import { motion } from "motion/react";
import { containerVariants, fadeUp, viewportOnce } from "@/lib/motion";

export default function ProductsHome() {
  const locale = useLocale();
  const pathname = usePathname();

  const products = [
    {
      id: 1,
      titleAr: "لمبة شمسية ليد 100 واط",
      titleEn: "100W Solar LED Bulb",
      descAr: "لمبة موفرة للطاقة مع بطارية ليثيوم مدمجة وكاشف حركة ليلي.",
      descEn:
        "Energy-saving bulb with built-in lithium battery and motion sensor for night.",
      price: "180",
      img: "/image/p-1.webp",
    },
    {
      id: 2,
      titleAr: "عمود إنارة شمسي 6 متر",
      titleEn: "6m Solar Street Light Pole",
      descAr: "عمود إنارة متكامل بلوح شمسي 150 واط وبطارية تدوم حتى 12 ساعة.",
      descEn:
        "Integrated lighting pole with 150W solar panel and battery lasting up to 12 hours.",
      price: "2,850",
      img: "/image/p-2.webp",
    },
    {
      id: 3,
      titleAr: "كشاف شمسي محمول 200 واط",
      titleEn: "200W Portable Solar Floodlight",
      descAr: "كشاف خارجي مقاوم للماء مع ريموت تحكم وزاوية إضاءة عريضة.",
      descEn:
        "Waterproof outdoor floodlight with remote control and wide beam angle.",
      price: "420",
      img: "/image/p-3.webp",
    },
    {
      id: 4,
      titleAr: "بطارية جل شمسية 150 أمبير",
      titleEn: "150Ah Gel Solar Battery",
      descAr:
        "بطارية عميقة التفريغ صيانة مجانية، مثالية لأنظمة الطاقة الشمسية.",
      descEn:
        "Deep-cycle maintenance-free gel battery, ideal for solar systems.",
      price: "2,200",
      img: "/image/p-4.webp",
    },
    {
      id: 5,
      titleAr: "لوح شمسي 550 واط مونو",
      titleEn: "550W Mono Solar Panel",
      descAr: "كفاءة عالية بأقل مساحة، مناسب للمنازل والمزارع الكبيرة.",
      descEn:
        "High efficiency in minimal space, ideal for homes and large farms.",
      price: "1,750",
      img: "/image/p-5.webp",
    },
    {
      id: 6,
      titleAr: "منظم شحن MPPT 60 أمبير",
      titleEn: "60A MPPT Charge Controller",
      descAr: "يتتبع نقطة الطاقة القصوى لزيادة شحن البطاريات حتى 30%.",
      descEn:
        "Tracks maximum power point to increase battery charging by up to 30%.",
      price: "1,300",
      img: "/image/p-6.webp",
    },
    {
      id: 7,
      titleAr: "بطارية ليثيوم فوسفات 200 أمبير",
      titleEn: "200Ah LiFePO4 Battery",
      descAr: "خفيفة الوزن، عمر طويل جداً (أكثر من 4000 دورة) و آمنة.",
      descEn: "Lightweight, ultra-long life (4000+ cycles) and safe.",
      price: "4,500",
      img: "/image/p-7.webp",
    },
    {
      id: 8,
      titleAr: "لمبة حديقة شمسية على شكل عمود",
      titleEn: "Solar Garden Bollard Light",
      descAr: "تصميم أنيق يضيء الممرات والحدائق تلقائياً عند الغروب.",
      descEn:
        "Elegant design that automatically illuminates pathways and gardens at sunset.",
      price: "95",
      img: "/image/p-8.webp",
    },
    {
      id: 9,
      titleAr: "كشاف حائط شمسي مع مستشعر",
      titleEn: "Solar Wall Light with Sensor",
      descAr: "كشاف حائط أنيق يعمل بالحركة لتوفير الطاقة والأمان للمداخل.",
      descEn:
        "Elegant motion-activated wall light for energy saving and entrance security.",
      price: "145",
      img: "/image/p-9.webp",
    },
  ];

  const isProductsPage = pathname.includes("/products");
  const displayedProducts = isProductsPage ? products : products.slice(0, 4);

  return (
    <section
      className={`products-home ${locale} ${!isProductsPage ? "home-section" : ""}`}
    >
      <div className="container">
        <motion.div
          className="content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h6 variants={fadeUp}>
            {locale === "ar" ? "منتجاتنا المتميزة" : "OUR PREMIUM PRODUCTS"}
          </motion.h6>
          <motion.div variants={fadeUp} className="title">
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
          </motion.div>
        </motion.div>

        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {displayedProducts.map((item, index) => (
            <motion.div
              className={`col-12 col-md-12 ${isProductsPage ? "col-lg-4" : "col-lg-6"}  product-col ${!isProductsPage && index === 0 ? "first-card-home" : ""}`}
              key={item.id}
              variants={fadeUp}
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
                  <h3>{locale === "ar" ? item.titleAr : item.titleEn}</h3>
                  <p>{locale === "ar" ? item.descAr : item.descEn}</p>
                  <div className="info-bottom">
                    <span className="price">
                      {item.price} {locale === "ar" ? "جنيه" : "EGP"}
                    </span>
                    <Link
                      href={`/${locale}/products/${item.id}`}
                      className="go-btn"
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
