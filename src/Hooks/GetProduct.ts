import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";

interface Product {
  nombre: string;
  descripcion: string;
  codigo: string;
  imagen: string;
  Precios: {
    [key: string]: string;
  };
  id: string;
  productPrice: string[];
}


const GetProduct = (productId: string) => {
  const [product, setProduct] = useState<Product | null>(null);
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
          } as Product);
        } else {
          setProduct(null);
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

export default GetProduct;
