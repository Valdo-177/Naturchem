import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import productImg from "../assets/aceite.jpg"

export interface ProductType {
  nombre: string;
  descripcion: string;
  codigo: string;
  imagen: string;
  Precios: {
    [key: string]: string;
  };
  id: string;
}


export const GetProduct = (productId: string) => {
  const [product, setProduct] = useState<ProductType | null>({
    nombre: 'Producto de Prueba',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quibusdam! Repudiandae maiores natus dolorum et officia repellat commodi vitae, officiis nisi optio sed dolore mollitia ratione necessitatibus esse veniam explicabo.',
    codigo: '1234',
    imagen: productImg.src,
    Precios: {
      "Precio X Mayor": "13.000"
    },
    id: "siohdkhsduhsdj",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'Products', productId);
        const docSnap = await getDoc(productRef);

        if (isMounted && docSnap.exists()) {
          const productData = docSnap.data();
          setProduct({
            id: docSnap.id,
            ...productData
          } as ProductType);
        } else {
          setProduct({
            nombre: 'Producto de Prueba',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quibusdam! Repudiandae maiores natus dolorum et officia repellat commodi vitae, officiis nisi optio sed dolore mollitia ratione necessitatibus esse veniam explicabo.',
            codigo: '1234',
            imagen: productImg.src,
            Precios: {
              "Precio X Mayor": "13.000"
            },
            id: "siohdkhsduhsdj",
          });
        }

        setLoading(false);
      } catch (error) {
        console.error('Error al obtener producto:', error);
        setError('No se pudo cargar el producto');
        setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [productId]);

  return {
    product,
    loading,
    error
  };
};

