import Navbar from "@/components/navber/Navbar";
import Bootstrap from "@/components/Bootstartp";
import ClientProvider from "@/rit/slices/ClientProvider";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "../../../i18n/routing";
import { setRequestLocale } from "next-intl/server";
import Footer from "@/components/footer/Footer";
import Loading from "@/components/Loading/Loading";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const finalLocale = locale || routing.defaultLocale || "en";
  const isRtl = finalLocale === "ar";

  await setRequestLocale(finalLocale);
  const messages = (await import(`../../../messages/${finalLocale}.json`)).default;

  return (
    <html lang={finalLocale} dir={isRtl ? "rtl" : "ltr"}>
      <body cz-shortcut-listen="true">
        <NextIntlClientProvider locale={finalLocale} messages={messages}>
          <ClientProvider>
            <Bootstrap />
            {/* <Loading /> */}
            <Navbar />
            {children}
            <Footer />
          </ClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}