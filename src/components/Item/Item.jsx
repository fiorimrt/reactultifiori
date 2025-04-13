
import { Link } from 'react-router-dom';
import './Item.css';

import { useAppContext } from "../context/Context";
function Item({ id, nombre, precio, img }) {


    const { agregarAlCarrito } = useAppContext();

    return (
        <div className="card">
            <img src={img} alt={nombre} className="item-img" />
            <h2>{nombre || "NO DISPONIBLE"}</h2>
            <h3>Precio: ${precio || "SIN PRECIO"}</h3>
            <button disabled={!nombre} className="card-btn" onClick={() => agregarAlCarrito({ id, nombre, precio, img, cantidad: 1 })}
            >Agregar al carrito</button>
            <Link to={`/detalle/${id}`}>
                <button disabled={!nombre} className="card-btn">
                    Ver detalle
                </button>
            </Link>
        </div>
    );
};

export default Item;
