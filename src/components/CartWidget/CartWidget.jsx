import './CartWidget.css';
import { useAppContext } from '../context/Context';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // ícono de carrito

function CartWidget() {
    const { carrito } = useAppContext();

    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);

    return (
        <Link to="/cart" className="cart-link">
            <FaShoppingCart size={24} />
            <span>({totalItems})</span>
        </Link>
    );
}

export default CartWidget;
