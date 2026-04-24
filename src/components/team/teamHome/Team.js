"use client";
import "./team.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUsersGear } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "../../../../i18n/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Team() {
  const locale = useLocale();
  let pathname = usePathname();

  const teamMembers = [
    {
      id: 1,
      nameAr: "معاذ احمد محمد",
      nameEn: "Moaz Ahmed Mohamed",
      img: "/image/team-1.jpeg",
    },
    {
      id: 2,
      nameAr: "بسام محمد احمد",
      nameEn: "Bassam Mohamed Ahmed",
      img: "/image/team-2.jpeg",
    },
    {
      id: 3,
      nameAr: "فاطمه احمد محمد",
      nameEn: "Fatma Ahmed Mohamed",
      img: "/image/team-3.jpeg",
    },
    {
      id: 4,
      nameAr: "يمني محمد عبد الحميد",
      nameEn: "Yomna Mohamed Abd Elhamid",
      img: "/image/team-4.jpeg",
    },
    {
      id: 5,
      nameAr: "يسرى محروس عويضة",
      nameEn: "Yosra Mahrous Owaida",
      img: "/image/team-5.jpeg",
    },
    {
      id: 6,
      nameAr: "فرحه سيد عباس",
      nameEn: "Farha Sayed Abbas",
      img: "/image/team-6.jpeg",
    },
  ];

  const isTeamPage = pathname.includes("/team");
  const displayedMembers = isTeamPage ? teamMembers : teamMembers.slice(0, 6);

  return (
    <section className={`team-section ${locale}`}>
      <div className="container">
        <div className="content">
          <h6>
            <FontAwesomeIcon icon={faUsersGear} />{" "}
            {locale === "ar" ? "خبراء صن باور" : "SunPower Experts"}
          </h6>
          <div className="title">
            <div>
              {locale === "ar" ? (
                <h2 className={`${locale}`}>
                  نحن نبني المستقبل بأيدي
                  <br /> محترفين
                </h2>
              ) : (
                <h2>
                  <span className="span1">Building</span> the Future <br />
                  <span className="span2">Professional Hands</span>
                </h2>
              )}
            </div>

            {!isTeamPage && (
              <div>
                <Link href={`/${locale}/team`} className={`${locale}`}>
                  {locale === "ar" ? "عرض الفريق كامل" : "view the full team"}
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="row g-4">
          {displayedMembers.map((member) => (
            <div className="col-12 col-sm-6 col-lg-4" key={member.id}>
              <div className="team-card">
                <div className="member-img-wrapper">
                  <Image
                    src={member.img}
                    alt={member.nameEn}
                    width={500}
                    height={500}
                    style={{ objectPosition: "top" }}
                  />
                </div>
                <div className="member-info">
                  <h3>{locale === "ar" ? member.nameAr : member.nameEn}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
