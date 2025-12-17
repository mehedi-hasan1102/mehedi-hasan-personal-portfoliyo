
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
  keywords: ["Mehedi Hasan", "Full-Stack Developer", "Next.js", "React", "Portfolio", "Web Engineer"],
  authors: [{ name: "Mehedi Hasan" }],
  openGraph: {
    title: "Mehedi Hasan | Full-Stack Developer",
    description: "Portfolio of Mehedi Hasan – React & Next.js Developer",
    url: "https://m-hasan.vercel.app",
    siteName: "Mehedi Hasan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mehedi Hasan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Hasan | Full-Stack Developer",
    description: "Portfolio of Mehedi Hasan – React & Next.js Developer",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
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
      <head>
        {/* Structured data JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mehedi Hasan",
              url: "https://m-hasan.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/mehedi-hasan1102",
                "https://github.com/mehedi-hasan1102",
              ],
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Self-employed",
              },
            }),
          }}
        />
        {/* Canonical URL */}
        <link rel="canonical" href="https://m-hasan.vercel.app" />
      </head>
      <body suppressHydrationWarning>
        <ClientThemeProvider>
          {/* Splash mounted once */}
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

