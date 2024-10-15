"use server";
import { Metadata } from "next";

export interface ITempMetadata {
  title: string;
  description: string;
  keywords: string[];
  altImg: string;
  img?: string;
}

export const generatePageMetadata = (tempMetadata: ITempMetadata): Metadata => {
  const metadata: Metadata = {
    title: tempMetadata.title,
    description: tempMetadata.description,
    keywords: tempMetadata.keywords,
    openGraph: {
      title: tempMetadata.title,
      description: tempMetadata.description,
      url: `https://naturchem.vercel.app/`,
      type: "website",
      images: {
        url: tempMetadata.img ?? "https://firebasestorage.googleapis.com/v0/b/naturchem-6f313.appspot.com/o/Preview_Naturchem.png?alt=media&token=fd82126f-e90a-4ff9-b902-364dde36a6f0",
        width: "1200",
        height: "630",
        alt: tempMetadata.altImg,
      },
      siteName: "Naturchem Store 🌿",
    },
    twitter: {
      title: tempMetadata.title,
      description: tempMetadata.description,
      images: {
        url: tempMetadata.img ?? "https://firebasestorage.googleapis.com/v0/b/naturchem-6f313.appspot.com/o/Preview_Naturchem.png?alt=media&token=fd82126f-e90a-4ff9-b902-364dde36a6f0",
        width: "1200",
        height: "630",
      },
      card: "summary_large_image",
    },
  };
  return metadata;
};