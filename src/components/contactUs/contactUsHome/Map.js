"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import "./contactUs.css";

export default function Map() {
  const mapRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let isMounted = true;

    const initMap = async () => {
      // تجنب إعادة التهيئة
      if (mapInstanceRef.current) {
        return;
      }

      // تنظيف الحاوية إذا كانت تحتوي على خريطة سابقة
      if (mapRef.current && mapRef.current._leaflet_id) {
        mapRef.current._leaflet_id = null;
      }

      const L = await import("leaflet");

      // ضبط أيقونات الماركر
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      if (!isMounted) return;

      // إنشاء الخريطة
      const map = L.map(mapRef.current).setView([30.0444, 31.2357], 7);
      
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // إضافة الماركرز
      const locations = [
        { id: 1, name: "فرع القاهرة", coords: [30.0444, 31.2357], desc: "مقرنا في مدينة نصر" },
        { id: 2, name: "فرع الفيوم", coords: [29.3084, 30.8428], desc: "مكتبنا في مدينة الفيوم" },
      ];

      locations.forEach((loc) => {
        const marker = L.marker(loc.coords).addTo(map);
        marker.bindPopup(`
          <div style="text-align: right; font-family: inherit;">
            <h6 style="margin: 0 0 5px 0; color: var(--primary-color); font-size: 14px;">📍 ${loc.name}</h6>
            <p style="margin: 0; font-size: 12px; color: #333;">${loc.desc}</p>
          </div>
        `);
      });

      mapInstanceRef.current = map;
    };

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isClient]);

  if (!isClient) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#161a1e",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#8a8e92",
        }}
      >
        جاري تحميل الخريطة...
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
        background: "#161a1e",
        borderRadius: "20px",
      }}
    />
  );
}