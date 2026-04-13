"use client";
import { useState, useEffect } from "react";
import "./productDetails.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faShieldAlt,
  faCheckCircle,
  faBolt,
  faLeaf,
  faAward,
  faInfoCircle,
  faPhoneAlt,
  faShoppingCart,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import CheckoutModal from "./CheckoutModal/CheckoutModal";
import Image from "next/image";

function CartToast({ show, locale }) {
  return (
    <div className={`cart-toast ${show ? "cart-toast--visible" : ""}`}>
      <div className="cart-toast__icon">
        <FontAwesomeIcon icon={faCheckCircle} />
      </div>
      <span>
        {locale === "ar" ? "تم الإضافة إلى السلة!" : "Added to cart!"}
      </span>
    </div>
  );
}

export default function ProductDetails() {
const locale = useLocale();
  const isAr = locale === "ar";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    "/image/p1.webp",
    "/image/p2.webp",
    "/image/p1.webp",
    "/image/p2.webp",
  ];

  // سعر المنتج (نحوله لرقم عشان نحسب عليه)
  const productPrice = 899;
  const productPriceFormatted = "$899.00";

  const product = {
    name: isAr
      ? "Horizon Max 450W - لوح شمسي عالي الكفاءة"
      : "Horizon Max 450W - High Efficiency Solar Panel",
    price: productPriceFormatted,
    priceValue: productPrice,
    categoryAr: "الألواح الشمسية",
    categoryEn: "Solar Panels",
    descAr:
      "يعتبر Horizon Max القمة في تكنولوجيا الطاقة الشمسية، حيث يجمع بين تقنية Bifacial المتطورة وكفاءة تحويل رائدة عالمياً تصل إلى 22.8%. مصمم ليعمل في أقسى الظروف المناخية مع ضمان إنتاجية تدوم لأكثر من 25 عاماً.",
    descEn:
      "Horizon Max represents the pinnacle of solar technology, combining advanced Bifacial tech with a world-leading 22.8% efficiency. Built to last in harsh climates with a 25-year performance warranty.",
    specsAr: [
      { label: "كفاءة الخلايا", value: "22.8%" },
      { label: "القوة القصوى", value: "450 واط" },
      { label: "نوع الخلايا", value: "Monocrystalline" },
      { label: "الضمان", value: "25 عاماً" },
    ],
    specsEn: [
      { label: "Cell Efficiency", value: "22.8%" },
      { label: "Max Power", value: "450W" },
      { label: "Cell Type", value: "Monocrystalline" },
      { label: "Warranty", value: "25 Years" },
    ],
  };

  // دالة زيادة الكمية
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // دالة نقص الكمية (الحد الأدنى 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // حساب السعر الإجمالي
  const totalPrice = productPrice * quantity;
  // دالة مساعدة لعرض الأرقام بشكل ثابت (تجنب مشكلة Hydration)
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const totalPriceFormatted = `$${formatPrice(totalPrice)}`;

  // دالة إضافة إلى السلة
  const handleAddToCart = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    console.log("Added to cart:", { ...product, quantity, total: totalPrice });
  };

  return (
    <>
      <div className={`product-details-page ${locale}`}>
        <CartToast show={showToast} locale={locale} />

        {/* Hero Header */}
        <section className="details-hero">
          <div className="hero-top-line"></div>
          <div
            className="hero-bg"
            style={{ backgroundImage: "url('/image/download (1).webp')" }}
          ></div>
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">{product.name}</h1>
            </div>
          </div>
        </section>

        <div className="container py-5">
          <div className="row g-5">
            {/* Gallery */}
            <div className="col-lg-6">
              <div className="product-gallery">
                <div className="main-img-holder">
                  <Image
                    src={productImages[selectedImage]}
                    alt="Product"
                    className="main-product-image"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="thumb-row">
                  {productImages.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      className={selectedImage === index ? "active" : ""}
                      onClick={() => setSelectedImage(index)}
                      alt={`Product thumbnail ${index + 1}`}
                      width={100}
                      height={100}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="col-lg-6">
              <div className="product-main-info">
                <span className="badge-cat">
                  {isAr ? product.categoryAr : product.categoryEn}
                </span>
                <h1 className="p-title">{product.name}</h1>

                {/* السعر مع الكمية */}
                <div className="price-section">
                  <div className="p-price">{product.price}</div>
                  {quantity > 0 && (
                    <div className="total-price-info">
                      {isAr ? "الإجمالي:" : "Total:"} {totalPriceFormatted}
                    </div>
                  )}
                </div>

                <p className="p-description">
                  {isAr ? product.descAr : product.descEn}
                </p>

                <div className="p-features-icons">
                  {[
                    {
                      icon: faShieldAlt,
                      ar: "ضمان 25 سنة",
                      en: "25Y Warranty",
                    },
                    { icon: faBolt, ar: "أداء فائق", en: "High Performance" },
                    { icon: faAward, ar: "جودة عالمية", en: "Global Quality" },
                    { icon: faLeaf, ar: "صديق للبيئة", en: "Eco Friendly" },
                  ].map(({ icon, ar, en }) => (
                    <div className="f-icon" key={en}>
                      <FontAwesomeIcon icon={icon} />
                      <span>{isAr ? ar : en}</span>
                    </div>
                  ))}
                </div>

                <div className="p-specs-table">
                  <h4>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    {isAr ? "المواصفات الفنية" : "Technical Specs"}
                  </h4>
                  <div className="specs-grid">
                    {(isAr ? product.specsAr : product.specsEn).map(
                      (spec, i) => (
                        <div className="spec-item" key={i}>
                          <span className="label">{spec.label}</span>
                          <span className="value">{spec.value}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="stock-status">
                  <span className="in-stock">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {isAr ? "متوفر في المخزون" : "In Stock"}
                  </span>
                </div>

                {/* عداد الكمية */}
                <div className="quantity-wrapper">
                  <label className="quantity-label">
                    {isAr ? "الكمية:" : "Quantity:"}
                  </label>
                  <div className="quantity-control">
                    <button
                      className="qty-btn"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="qty-value">{quantity}</span>
                    <button className="qty-btn" onClick={increaseQuantity}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>

                <div className="p-actions">
                  <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {isAr ? "أضف إلى السلة" : "Add to Cart"}
                  </button>

                  <button className="add-to-cart" onClick={handleBuyNow}>
                    <FontAwesomeIcon icon={faCartPlus} />
                    {isAr ? "اشتري الآن" : "Buy Now"}
                  </button>

                  <button className="contact-expert">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    {isAr ? "استشارة خبير" : "Talk to Expert"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
        quantity={quantity}
        totalPrice={totalPriceFormatted} // ✅ إضافة السعر الإجمالي
        locale={locale}
      />
    </>
  );
}
