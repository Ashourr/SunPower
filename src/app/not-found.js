"use client";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faExclamationTriangle, 
  faHome, 
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
  const isAr = locale === "ar";

  return (
    <div className={`not-found-page ${locale}`}>
      <div className="container">
        <div className="error-content">
          <div className="error-code">
            <span className="code-4">4</span>
            <span className="code-0">0</span>
            <span className="code-4-last">4</span>
          </div>
          <div className="error-icon">
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </div>
          <h2>
            {isAr 
              ? "عذراً، لقد ضللت الطريق!" 
              : "Oops! You've Lost Your Way"}
          </h2>
          <p>
            {isAr 
              ? "يبدو أن الصفحة التي تبحث عنها قد نفدت طاقتها أو انتقلت لمجرة أخرى." 
              : "It seems the page you are looking for has run out of energy or moved to another galaxy."}
          </p>
          <div className="error-actions">
            <Link href={`/`} className="btn-home">
              <FontAwesomeIcon icon={faHome} />
              {isAr ? "العودة للرئيسية" : "Back to Home"}
            </Link>
            <Link href={`/${locale}/contactUs`} className="btn-support">
              <FontAwesomeIcon icon={faHeadset} />
              {isAr ? "الدعم الفني" : "Support"}
            </Link>
          </div>
        </div>
        <div className="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        <div className="planet"></div>
      </div>
    </div>
  );
}