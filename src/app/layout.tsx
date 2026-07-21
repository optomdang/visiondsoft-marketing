import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { ContactFloatingButtons } from "@/components/contact-floating-buttons";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "VisionD Soft — Phần mềm quản lý cửa hàng kính & phòng khám mắt",
    template: "%s | VisionD Soft",
  },
  description:
    "Hệ thống quản lý phòng khám và cửa hàng kính mắt: khách hàng, đặt lịch, bán hàng, kho và kiểm soát cận thị (KSCT). Giá công khai, kích hoạt tự động.",
  metadataBase: new URL("https://visiondsoft.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans antialiased">
        <SiteHeader />
        <main className="flex-1 pt-12">{children}</main>
        <SiteFooter />
        <ContactFloatingButtons />
      </body>
    </html>
  );
}
