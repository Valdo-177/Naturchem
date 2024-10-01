import { Inter } from '@next/font/google'
import "./globals.css";
import Nav from "@/src/components/Nav";
import Footer from "@/src/components/Footer";
import { Toaster } from "@/components/ui/sonner"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { generatePageMetadata } from "@/src/metadata/generatePageMetadata";
import type { Metadata, ResolvingMetadata } from "next";
import { homeMetadataEs } from '@/src/models';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export interface Props {
  params: { locale: string };
  children: React.ReactNode;
}

export const generateMetadata = async (
  { params: { locale } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> =>
  generatePageMetadata(homeMetadataEs);

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
