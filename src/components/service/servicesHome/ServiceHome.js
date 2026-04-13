"use client";
import "./serviceHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "../../../../i18n/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function ServiceHome() {
  let locale = useLocale();
  let pathname = usePathname();

  const services = [
    {
      id: "01",
      titleAr: "أنظمة طاقة للمنازل",
      titleEn: "Residential Solar Systems",
      descAr:
        "حلول متكاملة لتوليد الكهرباء من الشمس وتقليل فواتير منزلك بنسبة تصل إلى 100%.",
      descEn:
        "Complete solutions to generate solar power and reduce your home bills by up to 100%.",
    },
    {
      id: "02",
      titleAr: "المتجر الشمسي الذكي",
      titleEn: "Smart Solar Store",
      descAr:
        "تسوق أحدث المنتجات التي تعمل بالطاقة الشمسية من كشافات وسخانات وأجهزة ذكية.",
      descEn:
        "Shop the latest solar-powered products, from lighting and heaters to smart gadgets.",
    },
    {
      id: "03",
      titleAr: "أنظمة الري والزراعة",
      titleEn: "Solar Irrigation Systems",
      descAr:
        "تصميم وتركيب مضخات مياه تعمل كلياً بالطاقة الشمسية لخدمة الأراضي والمزارع.",
      descEn:
        "Designing and installing water pumps powered entirely by solar energy for farms.",
    },
    {
      id: "04",
      titleAr: "محطات القطاع التجاري",
      titleEn: "Commercial Solar Power",
      descAr:
        "تخفيض التكاليف التشغيلية للمصانع والشركات عبر بناء محطات طاقة شمسية كبرى.",
      descEn:
        "Reducing operational costs for factories and companies via large-scale solar plants.",
    },
    {
      id: "05",
      titleAr: "سخانات المياه الشمسية",
      titleEn: "Solar Water Heaters",
      descAr:
        "توفير مياه ساخنة على مدار الساعة باستخدام حرارة الشمس لتوفير الغاز والكهرباء.",
      descEn:
        "Providing 24/7 hot water using solar thermal energy to save on gas and electricity.",
    },
    {
      id: "06",
      titleAr: "أنظمة الإنارة الذكية",
      titleEn: "Solar Lighting Systems",
      descAr:
        "كشافات وإنارة شوارع وحدائق تعمل ذاتياً بالطاقة الشمسية مع حساسات حركة.",
      descEn:
        "Self-operating street and garden lights powered by solar with motion sensors.",
    },
    {
      id: "07",
      titleAr: "حلول تخزين الطاقة",
      titleEn: "Energy Storage Solutions",
      descAr:
        "أنظمة بطاريات متطورة لضمان استمرار التيار الكهربائي أثناء الليل أو انقطاعه.",
      descEn:
        "Advanced battery systems to ensure continuous power during the night or outages.",
    },
    {
      id: "08",
      titleAr: "الصيانة والدعم الفني",
      titleEn: "Maintenance & Support",
      descAr:
        "عقود صيانة دورية وتنظيف للألواح لضمان عمل النظام بأعلى كفاءة ممكنة.",
      descEn:
        "Periodic maintenance and cleaning to ensure the system operates at peak efficiency.",
    },
    {
      id: "09",
      titleAr: "الاستشارات الهندسية",
      titleEn: "Engineering Consulting",
      descAr:
        "دراسات جدوى تقنية ومالية لمشاريع الطاقة الشمسية لتحديد العائد على الاستثمار.",
      descEn:
        "Technical and financial feasibility studies to determine the return on investment.",
    },
    {
      id: "10",
      titleAr: "كاميرات مراقبة شمسية",
      titleEn: "Solar Security Cameras",
      descAr:
        "توريد وتركيب كاميرات مراقبة تعمل بالطاقة الشمسية للأماكن البعيدة والنائية.",
      descEn:
        "Supply and installation of solar-powered security cameras for remote locations.",
    },
    {
      id: "11",
      titleAr: "شواحن السيارات الكهربائية",
      titleEn: "EV Charging Stations",
      descAr:
        "تركيب محطات شحن السيارات الكهربائية التي تستمد طاقتها مباشرة من الشمس.",
      descEn:
        "Installing EV charging stations powered directly by solar energy systems.",
    },
    {
      id: "12",
      titleAr: "تطوير الأنظمة القديمة",
      titleEn: "System Upgrades",
      descAr:
        "تحديث وتطوير أنظمة الطاقة الشمسية القديمة لزيادة قدرتها الإنتاجية وطول عمرها.",
      descEn:
        "Updating older solar systems to increase production capacity and lifespan.",
    },
  ];

  // التحقق مما إذا كنا في صفحة الخدمات أم في الصفحة الرئيسية
  const isServicesPage = pathname.includes("/services");

  // عرض 12 إذا كنا في الصفحة، و 6 فقط إذا كنا في السكشن بالصفحة الرئيسية
  const displayedServices = isServicesPage ? services : services.slice(0, 6);

  return (
    <div className={`serviceHome ${locale}`}>
      <div className="container">
        <div className="content">
          <h6>{locale === "ar" ? "ماذا نقدم" : "WHAT WE OFFER"}</h6>
          <div className="title">
            <div>
              {locale === "ar" ? (
                <h2 className={`${locale}`}>حلول طاقة ذكية لعملائنا</h2>
              ) : (
                <h2>
                  <span className="span1">Innovative</span> Solar Solutions for{" "}
                  <br />
                  <span className="span2">Our Clients</span>
                </h2>
              )}
            </div>

            {/* إخفاء زر "عرض الكل" إذا كنا بالفعل في صفحة الخدمات */}
            {!isServicesPage && (
              <div>
                <Link href={`/${locale}/services`} className={`${locale}`}>
                  {locale === "ar" ? "عرض جميع الخدمات" : "view all services"}
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="row">
          {displayedServices.map((service) => (
            <div className="col-12 col-md-6 col-lg-4" key={service.id}>
              <div className="itme">
                <div className="logo">
                  <div></div>
                  <div>
                    <p>{service.id}</p>
                  </div>
                </div>
                <h3 className={`${locale}`}>
                  {locale === "ar" ? service.titleAr : service.titleEn}
                </h3>
                <p className={`pra ${locale}`}>
                  {locale === "ar" ? service.descAr : service.descEn}
                </p>
                <Link
                  href={`/${locale}/services/${service.id}`}
                  className={`${locale}`}
                >
                  {locale === "ar" ? "استكشاف المزيد" : "Explore More"}{" "}
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
