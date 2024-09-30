import type { Metadata } from "next";
import { Inter } from '@next/font/google'
import "./globals.css";
import Nav from "@/src/components/Nav";
import Footer from "@/src/components/Footer";
import { Toaster } from "@/components/ui/sonner"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Naturchem Store 🌿",
  description: "Encuentra todos nuestros productos",
  openGraph: {
    title: "Naturchem 🌿| Jabones de glicerina, Materias primas cosmeticas",
    description: "Encuentra todos nuestros productos",
    url: "https://menu-la-terraza-de-la-casa.vercel.app/",
    siteName: "Naturchem Store🌿",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/HADA%2FPreviewNaturchem.png?alt=media&token=d39847b6-e74a-44e9-aff9-70952ea30f19 ",
        width: 1200,
        height: 630,
        alt: "Imagen representativa de Naturchem 🌿| Jabones de glicerina, Materias primas cosmeticas",
      },
    ],
    locale: "es-ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} bg-[#EBEBEB] min-h-[100vh]`}
      >
        <Nav />
        {children}
        <SpeedInsights />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
