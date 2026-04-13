"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./Loading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  const pathname = usePathname();
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsChanging(true);
    }, 0);

    const endTimer = setTimeout(() => {
      setIsChanging(false);
    }, 1500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [pathname]);

  if (!isChanging) return null;

  return (
    <div className="page-loader-overlay">
      <div className="loader-container">
        <div className="bolt-wrapper">
          <FontAwesomeIcon icon={faBolt} />
        </div>
        <div className="loader-text">
          SUN<span>POWER</span>
        </div>
        <div className="energy-track">
          <div className="energy-fill"></div>
        </div>
      </div>
    </div>
  );
}
