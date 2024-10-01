import { Inter } from '@next/font/google'
import "./globals.css";
import Nav from "@/src/components/Nav";
import Footer from "@/src/components/Footer";
import { Toaster } from "@/components/ui/sonner"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { generatePageMetadata } from "@/src/metadata/generatePageMetadata";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export interface ITempMetadata {
  title: string;
  description: string;
  keywords: string[];
  altImg: string;
  img?: string;
}

// export const metadata: Metadata = {
//   title: "Naturchem Store 🌿",
//   description: "Encuentra todos nuestros productos",
//   openGraph: {
//     title: "Naturchem 🌿| Jabones de glicerina, Materias primas cosmeticas",
//     description: "Encuentra todos nuestros productos",
//     url: "https://menu-la-terraza-de-la-casa.vercel.app/",
//     siteName: "Naturchem Store🌿",
//     images: [
//       {
//         url: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/HADA%2FPreviewNaturchem.png?alt=media&token=d39847b6-e74a-44e9-aff9-70952ea30f19 ",
//         width: 1200,
//         height: 630,
//         alt: "Imagen representativa de Naturchem 🌿| Jabones de glicerina, Materias primas cosmeticas",
//       },
//     ],
//     locale: "es-ES",
//     type: "website",
//   },
// };

export const homeMetadataEs: ITempMetadata = {
  title: "Naturchem Store 🌿",
  description:
    "Encuentra todos nuestros productos",
  keywords: [
    "Naturchem",
    "Naturchem Store",
    "Naturchem tienda",
    "Naturchem tienda barranquilla",
    "Insumos para jabones artesanales",
    "Velas de cera y parafina",
    "Resinas para productos artesanales",
    "Productos de aseo y limpieza artesanales",
    "Tratamiento de agua natural",
    "Insumos de alta calidad",
    "Materias primas naturales",
    "Químicos para productos artesanales",
    "Inventario completo de insumos",
    "Fabricación y distribución de insumos",
    "Catalogo de insumos para emprendimientos",
    "Soluciones integrales para productores artesanales",
    "Distribución de insumos naturales y químicos",
    "Fabricación de ingredientes para jabones y velas",
    "Suministro de materiales para productos artesanos",
    "Cera de cera de abeja",
    "Resinas naturales",
    "Ingredientes para creación de jabones artesanales",
    "Insumos para tratamiento de agua natural",
    "Materiales para producción de velas de cera",
    "Insumos para elaboración de jabones",
    "Materiales para fabricación de velas",
    "Ingredientes para productos de aseo artesanal",
    "Sustancias para tratamiento de agua",
    "Inventario de insumos para artesanía",
    "Suministro de materias primas naturales",
    "Distribución de productos químicos para artesanía",
    "Guías para elaboración de jabones",
    "Técnicas para crear velas de cera",
    "Innovadores métodos para productos artesanales",
    "Eco-friendly insumos para productos de cuidado",
    "Insumos para productos de belleza caseros",
    "Materiales para productos de limpieza artesanal",
    "Innovadoras fórmulas para jabones",
    "Técnica para elaboración de velas",
    "Insumos para productos de cuidado corporal",
    "Materiales para productos de aseo naturales",
    "Innovadores ingredientes para productos artesanales",
    "Técnicas para elaboración de productos de aseo",
    "Insumos para productos de cuidado personal",
    "Materiales para productos de belleza casera",
    "Jabones de glicerina Barranquilla",
    "Jabones Barranquilla"
  ],
  altImg: "Imagen representativa de Naturchem 🌿| Jabones de glicerina, Materias primas cosmeticas",
};

export const generateMetadata = async () => generatePageMetadata(homeMetadataEs);

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
