"use client";
import { useState, useEffect } from "react";
import "./CheckoutModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimes,
  faArrowRight,
  faArrowLeft,
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCreditCard,
  faTruck,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function CheckoutModal({
  isOpen,
  onClose,
  product,
  quantity = 1,
  totalPrice,
  locale,
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "cash",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  // توليد رقم الطلب مرة واحدة فقط عند إنشاء المكون
  const [orderId] = useState(() => Math.floor(10000 + Math.random() * 90000));

  if (!isOpen) return null;

  const isAr = locale === "ar";

  // حساب السعر الإجمالي
  const getTotalPrice = () => {
    if (totalPrice) return totalPrice;
    // لو مفيش totalPrice، نحسب من product.price * quantity
    if (product?.price) {
      const priceValue = parseFloat(product.price.replace(/[^0-9.-]/g, ""));
      if (!isNaN(priceValue)) {
        return `$${(priceValue * quantity).toLocaleString()}`;
      }
    }
    return product?.price || "$0";
  };

  const finalTotalPrice = getTotalPrice();

  const validateStep = (stepNumber) => {
    const newErrors = {};
    if (stepNumber === 1) {
      if (!formData.name.trim())
        newErrors.name = isAr ? "الاسم مطلوب" : "Name is required";
      if (!formData.phone.trim())
        newErrors.phone = isAr
          ? "رقم الهاتف مطلوب"
          : "Phone number is required";
      if (formData.phone && !/^[\d\s\+\(\)\-]{10,15}$/.test(formData.phone))
        newErrors.phone = isAr ? "رقم هاتف غير صالح" : "Invalid phone number";
    }
    if (stepNumber === 2) {
      if (!formData.address.trim())
        newErrors.address = isAr ? "العنوان مطلوب" : "Address is required";
      if (!formData.city.trim())
        newErrors.city = isAr ? "المدينة مطلوبة" : "City is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (validateStep(step)) setStep((prev) => prev + 1);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev - 1);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 4) {
      console.log("Order Data:", {
        ...formData,
        product,
        quantity,
        totalPrice: finalTotalPrice,
      });
      setIsComplete(true);
    }
  };

  const handleClose = () => {
    setIsComplete(false);
    setStep(1);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      paymentMethod: "cash",
      notes: "",
    });
    setErrors({});
    onClose();
  };

  const steps = [
    { n: 1, label: isAr ? "معلوماتك" : "Your Info" },
    { n: 2, label: isAr ? "العنوان" : "Address" },
    { n: 3, label: isAr ? "الدفع" : "Payment" },
    { n: 4, label: isAr ? "تأكيد" : "Confirm" },
  ];

  return (
    <div className={`modal-overlay ${locale}`} onClick={handleClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className="modal-header">
          <h3>{isAr ? "إتمام عملية الشراء" : "Checkout"}</h3>
        </div>

        {!isComplete ? (
          <>
            {/* Progress Steps */}
            <div className="checkout-steps">
              {steps.map(({ n, label }) => (
                <div
                  key={n}
                  className={`step ${step >= n ? "active" : ""} ${step > n ? "completed" : ""}`}
                >
                  <span>
                    {step > n ? <FontAwesomeIcon icon={faCheckCircle} /> : n}
                  </span>
                  <label>{label}</label>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1 — Personal Info */}
              {step === 1 && (
                <div className="modal-step">
                  <div className="form-group">
                    <label>
                      <FontAwesomeIcon icon={faUser} />{" "}
                      {isAr ? "الاسم الكامل" : "Full Name"} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={
                        isAr ? "أدخل اسمك الكامل" : "Enter your full name"
                      }
                      className={errors.name ? "error" : ""}
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      <FontAwesomeIcon icon={faEnvelope} />{" "}
                      {isAr ? "البريد الإلكتروني" : "Email"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <FontAwesomeIcon icon={faPhone} />{" "}
                      {isAr ? "رقم الهاتف" : "Phone Number"} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={
                        isAr ? "01xxxxxxxxx" : "Enter your phone number"
                      }
                      className={errors.phone ? "error" : ""}
                    />
                    {errors.phone && (
                      <span className="error-message">{errors.phone}</span>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2 — Address */}
              {step === 2 && (
                <div className="modal-step">
                  <div className="form-group">
                    <label>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                      {isAr ? "العنوان" : "Address"} *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder={
                        isAr
                          ? "اسم الشارع، رقم المبنى"
                          : "Street name, building number"
                      }
                      className={errors.address ? "error" : ""}
                    />
                    {errors.address && (
                      <span className="error-message">{errors.address}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>{isAr ? "المدينة" : "City"} *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder={isAr ? "اسم المدينة" : "City name"}
                      className={errors.city ? "error" : ""}
                    />
                    {errors.city && (
                      <span className="error-message">{errors.city}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      {isAr ? "ملاحظات إضافية" : "Additional Notes"}
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder={
                        isAr
                          ? "أي ملاحظات إضافية..."
                          : "Any additional notes..."
                      }
                    />
                  </div>
                </div>
              )}

              {/* Step 3 — Payment */}
              {step === 3 && (
                <div className="modal-step">
                  <div className="payment-options">
                    {[
                      {
                        value: "cash",
                        icon: faTruck,
                        title: isAr ? "الدفع عند الاستلام" : "Cash on Delivery",
                        desc: isAr
                          ? "ادفع نقداً عند استلام المنتج"
                          : "Pay cash when you receive the product",
                      },
                      {
                        value: "card",
                        icon: faCreditCard,
                        title: isAr ? "بطاقة ائتمان" : "Credit Card",
                        desc: isAr
                          ? "ادفع بأمان عبر الإنترنت"
                          : "Pay securely online",
                      },
                    ].map(({ value, icon, title, desc }) => (
                      <label
                        key={value}
                        className={`payment-option ${formData.paymentMethod === value ? "selected" : ""}`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={value}
                          checked={formData.paymentMethod === value}
                          onChange={handleInputChange}
                        />
                        <div className="option-content">
                          <FontAwesomeIcon icon={icon} />
                          <div>
                            <strong>{title}</strong>
                            <span>{desc}</span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4 — Confirm */}
              {step === 4 && (
                <div className="modal-step confirm-step">
                  <h4>{isAr ? "تأكيد طلبك" : "Confirm Your Order"}</h4>
                  <div className="order-summary">
                    {[
                      {
                        label: isAr ? "المنتج" : "Product",
                        value: product?.name,
                        bold: true,
                      },
                      {
                        label: isAr ? "الكمية" : "Quantity",
                        value: quantity,
                        bold: true,
                      },
                      {
                        label: isAr ? "السعر الإجمالي" : "Total Price",
                        value: finalTotalPrice,
                        highlight: true,
                      },
                      { label: isAr ? "الاسم" : "Name", value: formData.name },
                      {
                        label: isAr ? "البريد" : "Email",
                        value: formData.email || "—",
                      },
                      {
                        label: isAr ? "الهاتف" : "Phone",
                        value: formData.phone,
                      },
                      {
                        label: isAr ? "العنوان" : "Address",
                        value: `${formData.address}, ${formData.city}`,
                      },
                      {
                        label: isAr ? "طريقة الدفع" : "Payment",
                        value:
                          formData.paymentMethod === "cash"
                            ? isAr
                              ? "الدفع عند الاستلام"
                              : "Cash on Delivery"
                            : isAr
                              ? "بطاقة ائتمان"
                              : "Credit Card",
                      },
                    ].map((row, i) => (
                      <div className="summary-item" key={i}>
                        <span>{row.label}:</span>
                        {row.bold ? (
                          <strong>{row.value}</strong>
                        ) : row.highlight ? (
                          <strong className="price-highlight">
                            {row.value}
                          </strong>
                        ) : (
                          <span>{row.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="modal-actions">
                {step > 1 && (
                  <button type="button" className="btn-prev" onClick={prevStep}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    {isAr ? "السابق" : "Previous"}
                  </button>
                )}
                {step < 4 ? (
                  <button type="button" className="btn-next" onClick={nextStep}>
                    {isAr ? "التالي" : "Next"}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                ) : (
                  <button type="submit" className="btn-submit">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {isAr ? "تأكيد الشراء" : "Confirm Order"}
                  </button>
                )}
              </div>
            </form>
          </>
        ) : (
          <div className="success-message">
            <div className="success-animation">
              <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
            </div>
            <h3>
              {isAr ? "تم استلام طلبك بنجاح!" : "Order Received Successfully!"}
            </h3>
            <p>
              {isAr
                ? `شكراً لتسوقك معنا. إجمالي طلبك: ${finalTotalPrice}`
                : `Thank you! Your order total: ${finalTotalPrice}`}
            </p>
            <div className="success-details">
              <p>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                {isAr
                  ? "تم إرسال تأكيد الطلب إلى بريدك الإلكتروني"
                  : "Order confirmation sent to your email"}
              </p>
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                {isAr ? "رقم الطلب: " : "Order #: "}#ORD{orderId}
              </p>
            </div>
            <button
              type="button"
              className="close-success-btn"
              onClick={handleClose}
            >
              {isAr ? "إغلاق" : "Close"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
