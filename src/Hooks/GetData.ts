import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db, collectionRef } from "../../lib/firebase";

const GetData = (collectionName:string) => {
    const collectionUser = collection(db, collectionName);
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true); // Variable de estado para controlar la carga

    useEffect(() => {
        getDocs(collectionUser)
            .then((querySnapshot) => {
                const docs: any = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ id: doc.id, ...doc.data() });
                });
                setDocuments(docs);
                setLoading(false); // Una vez que se^` obtienen los documentos, se detiene la carga
            })
            .catch((error) => {
                setLoading(false); // En caso de error, se detiene la carga
            });
    }, []);


    return {
        documents
    }
}


export default GetData