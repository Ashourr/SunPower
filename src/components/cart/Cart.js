"use client";
import { useState, useEffect } from "react";
import "./cart.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPlus,
  faMinus,
  faShoppingCart,
  faShieldAlt,
  faTruck,
  faExclamationTriangle,
  faArrowLeft,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CheckoutModal from "../products/productDetails/CheckoutModal/CheckoutModal";
import HeaderPage from "../headerPage/HeaderPage";
import Image from "next/image";

export default function Cart() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      nameAr: "لمبة شمسية ليد 100 واط",
      nameEn: "100W Solar LED Bulb",
      price: 180,
      quantity: 2,
      img: "/image/p-1.webp",
    },
    {
      id: 2,
      nameAr: "عمود إنارة شمسي 6 متر",
      nameEn: "6m Solar Street Light Pole",
      price: 2850,
      quantity: 1,
      img: "/image/p-2.webp",
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const confirmDelete = () => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemToDelete));
    setItemToDelete(null);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 5000 ? 0 : 150;
  const total = subtotal + shipping;

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const formatPrice = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // بيانات المودال
  const checkoutProductData = {
    name: isAr
      ? cartItems.map((item) => item.nameAr).join(" + ")
      : cartItems.map((item) => item.nameEn).join(" + "),
    price: `$${formatPrice(total)}`,
  };

  return (
    <>
      <HeaderPage
        title={locale === "en" ? "Shopping Cart" : "سلة المشتريات"}
        link={locale === "en" ? "Home" : "الرئيسية"}
        suptitle={locale === "en" ? "Shopping Cart" : "سلة المشتريات"}
        bgImg="/image/download (2).webp"
      />
      <div className={`cart-page ${locale}`}>
        <div className="container py-5">
          {/* Header */}
          <div className="cart-header">
            <Link href={`/${locale}/products`} className="back-link">
              <FontAwesomeIcon icon={faArrowLeft} />
              {isAr ? "مواصلة التسوق" : "Continue Shopping"}
            </Link>
            <h1 className="cart-title">
              <FontAwesomeIcon icon={faShoppingCart} />
              {isAr ? " سلة المشتريات" : " Shopping Cart"}
              {cartItems.length > 0 && <span>({cartItems.length})</span>}
            </h1>
          </div>

          {cartItems.length > 0 ? (
            <div className="row g-4">
              {/* Items List */}
              <div className="col-lg-8">
                <div className="cart-items-list">
                  {cartItems.map((item) => (
                    <div className="cart-item-card" key={item.id}>
                      <div className="item-img">
                        <Image
                          src={item.img}
                          alt="product"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-details">
                        <h4>{isAr ? item.nameAr : item.nameEn}</h4>
                        <p className="unit-price">${formatPrice(item.price)}</p>
                      </div>

                      {/* Quantity */}
                      <div className="quantity-control">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity === 1}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>

                      <div className="item-total-price">
                        ${formatPrice(item.price * item.quantity)}
                      </div>

                      <button
                        className="remove-btn"
                        type="button"
                        onClick={() => setItemToDelete(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="trust-badges">
                  <div className="badge">
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span>
                      {isAr ? "تسوق آمن 100%" : "100% Secure Shopping"}
                    </span>
                  </div>
                  <div className="badge">
                    <FontAwesomeIcon icon={faTruck} />
                    <span>
                      {isAr
                        ? "شحن سريع لجميع المحافظات"
                        : "Fast Shipping All Governorates"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="col-lg-4">
                <div className="cart-summary-card">
                  <h3>{isAr ? "ملخص الطلب" : "Order Summary"}</h3>

                  <div className="summary-row">
                    <span>{isAr ? "عدد المنتجات" : "Items"}</span>
                    <span>
                      {totalQuantity} {isAr ? "قطعة" : "pcs"}
                    </span>
                  </div>
                  <div className="summary-row">
                    <span>{isAr ? "المجموع الفرعي" : "Subtotal"}</span>
                    <span>${formatPrice(subtotal)}</span>
                  </div>
                  <div className="summary-row">
                    <span>{isAr ? "الشحن" : "Shipping"}</span>
                    <span>
                      {shipping === 0
                        ? isAr
                          ? "مجاني"
                          : "Free"
                        : `$${shipping}`}
                    </span>
                  </div>
                  <hr />
                  <div className="summary-row total">
                    <span>{isAr ? "الإجمالي" : "Total"}</span>
                    <span>${formatPrice(total)}</span>
                  </div>

                  <button
                    className="checkout-btn"
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <FontAwesomeIcon icon={faCreditCard} />
                    {isAr ? "إتمام الشراء" : "Checkout"}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Empty State */
            <div className="empty-cart-state">
              <div className="empty-icon">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
              <h2>{isAr ? "سلتك فارغة" : "Your Cart is Empty"}</h2>
              <p>
                {isAr
                  ? "يبدو أنك لم تقم بإضافة أي منتجات إلى سلتك بعد"
                  : "Looks like you haven't added any products to your cart yet"}
              </p>
              <Link href="/products" className="shop-now-btn">
                {isAr ? "تسوق الآن" : "Shop Now"}
              </Link>
            </div>
          )}
        </div>

        {/* Delete Confirmation Modal */}
        {itemToDelete && (
          <div className="delete-confirm-overlay">
            <div className="delete-confirm-modal">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="warn-icon"
              />
              <h4>{isAr ? "هل أنت متأكد؟" : "Are you sure?"}</h4>
              <p>
                {isAr
                  ? "سيتم حذف هذا المنتج من السلة نهائياً."
                  : "This item will be removed from your cart."}
              </p>
              <div className="confirm-btns">
                <button
                  className="btn-cancel"
                  type="button"
                  onClick={() => setItemToDelete(null)}
                >
                  {isAr ? "إلغاء" : "Cancel"}
                </button>
                <button
                  className="btn-confirm-delete"
                  type="button"
                  onClick={confirmDelete}
                >
                  {isAr ? "حذف" : "Remove"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={checkoutProductData}
        quantity={totalQuantity}
        totalPrice={`$${formatPrice(total)}`}
        locale={locale}
      />
    </>
  );
}
