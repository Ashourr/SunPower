"use client";
import "./team.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "../../../../i18n/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Team() {
  const locale = useLocale();
  let pathname = usePathname();

  const teamMembers = [
    {
      id: 1,
      nameAr: "م. محمد عاشور",
      nameEn: "Eng. Mohamed Ashour",
      roleAr: "كبير مهندسي البرمجيات",
      roleEn: "Senior Software Engineer",
      img: "/image/team-1.webp",
    },
    {
      id: 2,
      nameAr: "م. محمد عاشور",
      nameEn: "Eng. Mohamed Ashour",
      roleAr: "كبير مهندسي البرمجيات",
      roleEn: "Senior Software Engineer",
      img: "/image/team-1.webp",
    },
    {
      id: 3,
      nameAr: "م. محمد عاشور",
      nameEn: "Eng. Mohamed Ashour",
      roleAr: "كبير مهندسي البرمجيات",
      roleEn: "Senior Software Engineer",
      img: "/image/team-1.webp",
    },
    {
      id: 4,
      nameAr: "م. محمد عاشور",
      nameEn: "Eng. Mohamed Ashour",
      roleAr: "كبير مهندسي البرمجيات",
      roleEn: "Senior Software Engineer",
      img: "/image/team-1.webp",
    },
    {
      id: 5,
      nameAr: "م. محمد عاشور",
      nameEn: "Eng. Mohamed Ashour",
      roleAr: "كبير مهندسي البرمجيات",
      roleEn: "Senior Software Engineer",
      img: "/image/team-1.webp",
    },
    {
      id: 6,
      nameAr: "م. محمد عاشور",
      nameEn: "Eng. Mohamed Ashour",
      roleAr: "كبير مهندسي البرمجيات",
      roleEn: "Senior Software Engineer",
      img: "/image/team-1.webp",
    },
  ];

  // التحقق مما إذا كنا في صفحة الخدمات أم في الصفحة الرئيسية
  const isTeamPage = pathname.includes("/team");

  // عرض 12 إذا كنا في الصفحة، و 6 فقط إذا كنا في السكشن بالصفحة الرئيسية
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

            {/* إخفاء زر "عرض الكل" إذا كنا بالفعل في صفحة الخدمات */}
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
                  />
                  <div className="social-overlay">
                    <a href="#">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{locale === "ar" ? member.nameAr : member.nameEn}</h3>
                  <p>{locale === "ar" ? member.roleAr : member.roleEn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
