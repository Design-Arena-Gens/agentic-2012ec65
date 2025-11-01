import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geç Başlangıçlı Neonatal Sepsis - Epidemiyolojik Dashboard",
  description: "2020-2025 Epidemiyolojik Özellikler ve Klinik Sunum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
