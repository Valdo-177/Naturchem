import { generatePageMetadata } from "@/src/metadata/generatePageMetadata";
import { categoryCards } from "@/src/models";
import type { Metadata } from "next";

export interface Props {
    params: { id: string };
    children: React.ReactNode;
}
function desencriptarCadena(cadena: string) {
    return decodeURIComponent(cadena.replace(/%20/g, ' '));
}

export const generateMetadata = async (
    { params: { id } }: Props,
): Promise<Metadata> => {
    const product = categoryCards.find((card) => card.name === desencriptarCadena(id));
    return generatePageMetadata({
        title: `${desencriptarCadena(id)} | Naturchem 🌿`,
        description: product?.description ?? "404 Not found",
        keywords: [],
        img: product?.urlImage,
        altImg: "project image",
    });
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
