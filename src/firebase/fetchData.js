import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Asegurate de que este path esté bien

export const fetchData = async () => {
    const productosRef = collection(db, "productos");


    try {
        const snapshot = await getDocs(productosRef);

        const productos = snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() };
        });

        console.log("📦 Productos cargados desde Firebase:", productos); // <--- ESTE CONSOLE

        return productos;
    } catch (error) {
        console.error("🔥 Error al obtener productos de Firestore:", error);
        return [];
    }
};
