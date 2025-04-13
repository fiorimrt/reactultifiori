import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useAppContext } from "../context/Context";
import './Checkout.css';

function Checkout() {
    const { carrito, setCarrito } = useAppContext();

    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: ''
    });

    const [orderId, setOrderId] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const orden = {
            comprador: formData,
            productos: carrito,
            total: carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0),
            fecha: serverTimestamp()
        };

        try {
            const docRef = await addDoc(collection(db, "ordenes"), orden);
            setOrderId(docRef.id);
            setCarrito([]);
        } catch (error) {
            console.error("Error al guardar la orden:", error);
        }
    };

    if (orderId) {
        return (
            <div className="checkout-container">
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es:</p>
                <strong>{orderId}</strong>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Finalizar compra</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </label>
                <label>
                    Correo:
                    <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
                </label>
                <label>
                    Teléfono:
                    <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Checkout;
