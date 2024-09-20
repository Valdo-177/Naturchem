import { useEffect, useState } from "react";
import { getDocs, query, where } from "firebase/firestore";
import { collectionRef } from "../../lib/firebase";

interface Document {
  nombre: string;
  descripcion: string;
  id: string;
  codigo: string;
  imagen: string;
  Precios?: Record<string, string>;
};

const GetData = (category: string) => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;

    const fetchDocuments = async () => {
      try {
        const q = query(collectionRef, where("Categoria", "==", category));
        const querySnapshot = await getDocs(q);
        
        if (!cancel) {
          const docs: Document[] = [];
          querySnapshot.forEach((doc) => {
            // @ts-expect-error TS2614: Property 'Precios' is missing in type 'Product'.
            docs.push({ id: doc.id, ...doc.data() });
          });
          setDocuments(docs);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error al obtener documentos:', error);
        setLoading(false);
      }
    };

    fetchDocuments();

    return () => {
      cancel = true;
    };
  }, [category]);

  return {
    documents,
    loading
  };
};

export default GetData;


// import { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db, collectionRef } from "../../lib/firebase";

// const GetData = () => {
//     const [documents, setDocuments] = useState([]);
//     const [loading, setLoading] = useState(true); // Variable de estado para controlar la carga

//     useEffect(() => {
//         getDocs(collectionRef)
//             .then((querySnapshot) => {
//                 //@ts-ignore
//                 const docs = [];
//                 querySnapshot.forEach((doc) => {
//                     docs.push({ id: doc.id, ...doc.data() });
//                 });
//                 //@ts-ignore
//                 setDocuments(docs);
//                 setLoading(false); // Una vez que se^` obtienen los documentos, se detiene la carga
//             })
//             .catch((error) => {
//                 console.log('erro', error)
//                 setLoading(false); // En caso de error, se detiene la carga
//             });
//     }, []);


//     return {
//         documents,
//         loading
//     }
// }


// export default GetData