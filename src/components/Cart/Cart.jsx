import { useAppContext } from "../context/Context";
import { Link } from "react-router-dom";
import './Cart.css';

function Cart() {
    const { carrito, eliminarProducto, setCarrito } = useAppContext();

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    const limpiarCarrito = () => setCarrito([]);

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>

            {carrito.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <div className="cart-items">
                    {carrito.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.img} alt={item.nombre} className="cart-img" />
                            <h3>{item.nombre}</h3>
                            <p>Precio: ${item.precio}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Subtotal: ${item.precio * item.cantidad}</p>
                            <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
                        </div>
                    ))}
                </div>
            )}

            {carrito.length > 0 && (
                <div className="cart-summary">
                    <h3>Total: ${total}</h3>
                    <button onClick={limpiarCarrito}>Limpiar carrito</button>
                    <Link to="/checkout">
                        <button className="checkout-btn">Finalizar compra</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
