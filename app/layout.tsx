

import "./globals.css";
import { ReactNode } from "react";
import Background from "@/components/ui/Background";
import { ClientThemeProvider } from "@/components/common/ClientThemeProvider";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ScrollToTopButton from "@/components/common/ScrollButton";
import Navbar from "@/components/common/NavBar";
import SplashScreen from '@/components/ui/SplashScreen';
import { getSortedBlogsData } from "@/lib/blogs";

export const metadata = {
  title: "Mehedi Hasan | Full-Stack Developer & Web Engineer",
  description:
    "Portfolio of Mehedi Hasan – Full-Stack Developer specializing in Next.js, React, TypeScript, and modern web applications.",
  icons: { icon: "./favicon.ico" },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const allBlogsData = await getSortedBlogsData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientThemeProvider>
          {/* Splash always mounted once */}
           <SplashScreen />
          

          <Background />

          <div className="px-2 sm:px-0">
            <Navbar blogs={allBlogsData} />
            <main>{children}</main>
            <Footer />
          </div>

          <ScrollToTopButton />
          <WhatsAppButton />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
