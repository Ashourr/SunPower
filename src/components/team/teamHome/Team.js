"use client";
import "./team.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link, usePathname } from "../../../../i18n/navigation";
import Image from "next/image";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const teamMembers = [
  {
    id: 1,
    nameAr: "أحمد خالد المنصور",
    nameEn: "Ahmed Khaled Al-Mansour",
    roleAr: "المدير التنفيذي",
    roleEn: "Chief Executive Officer",
    deptAr: "الإدارة العليا",
    deptEn: "Leadership",
    img: "/image/team-new-1.png",
  },
  {
    id: 2,
    nameAr: "عمر ياسر الحسيني",
    nameEn: "Omar Yasser El-Husseiny",
    roleAr: "كبير مهندسي الطاقة الشمسية",
    roleEn: "Chief Solar Engineer",
    deptAr: "الهندسة",
    deptEn: "Engineering",
    img: "/image/team-new-2.png",
  },
  {
    id: 3,
    nameAr: "نورا سامي عبد الرحمن",
    nameEn: "Noura Samy Abdelrahman",
    roleAr: "مديرة العمليات والتركيب",
    roleEn: "Operations & Installation Director",
    deptAr: "العمليات",
    deptEn: "Operations",
    img: "/image/team-new-3.png",
  },
  {
    id: 4,
    nameAr: "مريم هشام فؤاد",
    nameEn: "Mariam Hesham Fouad",
    roleAr: "مهندسة تصميم كهربائي",
    roleEn: "Electrical Design Engineer",
    deptAr: "التصميم",
    deptEn: "Design",
    img: "/image/team-new-4.png",
  },
  {
    id: 5,
    nameAr: "لينا محمود الشريف",
    nameEn: "Lina Mahmoud El-Sherif",
    roleAr: "مديرة علاقات العملاء",
    roleEn: "Client Relations Manager",
    deptAr: "خدمة العملاء",
    deptEn: "Client Success",
    img: "/image/team-new-5.png",
  },
  {
    id: 6,
    nameAr: "هدى كريم عبدالله",
    nameEn: "Hoda Karim Abdullah",
    roleAr: "مسؤولة الجودة والسلامة",
    roleEn: "Quality & Safety Lead",
    deptAr: "الجودة",
    deptEn: "Quality",
    img: "/image/team-new-6.png",
  },
];

export default function Team() {
  const locale = useLocale();
  const pathname = usePathname();
  const isAr = locale === "ar";
  const isTeamPage = pathname.includes("/team");
  const displayedMembers = isTeamPage ? teamMembers : teamMembers.slice(0, 6);

  return (
    <section
      className={`team-section ${isAr ? "is-rtl" : "is-ltr"}`}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="team-glow-bg" aria-hidden="true">
        <div className="glow-sphere glow-1" />
        <div className="glow-sphere glow-2" />
        <div className="grid-overlay" />
      </div>

      <div className="container position-relative">
        <motion.div
          className="team-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="team-pill">
            <span className="pill-dot" />
            <FontAwesomeIcon icon={faUsers} className="pill-icon" />
            <span>{isAr ? "فريق القيادة والهندسة" : "Leadership & Engineering"}</span>
          </motion.div>

          <div className="team-title-row">
            <motion.h2 variants={fadeUp} className="team-heading">
              {isAr ? (
                <>
                  فريق متخصص يقود كل{" "}
                  <span className="text-gradient">مشروع شمسي</span>
                </>
              ) : (
                <>
                  The specialists behind every{" "}
                  <span className="text-gradient">solar project</span>
                </>
              )}
            </motion.h2>

            {!isTeamPage && (
              <motion.div variants={fadeUp}>
                <Link href="/team" className="team-cta">
                  <span>{isAr ? "عرض الفريق كامل" : "View the full team"}</span>
                  <FontAwesomeIcon
                    className="cta-arrow"
                    icon={isAr ? faArrowLeft : faArrowRight}
                  />
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {displayedMembers.map((member) => (
            <motion.div
              className="col-12 col-sm-6 col-lg-4"
              key={member.id}
              variants={fadeUp}
            >
              <article className="team-card">
                <div className="member-photo">
                  <Image
                    src={member.img}
                    alt={isAr ? member.nameAr : member.nameEn}
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                    className="member-img"
                  />
                  <div className="photo-shade" />
                  <div className="member-meta">
                    <span className="member-dept">
                      {isAr ? member.deptAr : member.deptEn}
                    </span>
                    <h3>{isAr ? member.nameAr : member.nameEn}</h3>
                    <p>{isAr ? member.roleAr : member.roleEn}</p>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
