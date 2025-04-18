import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [contador, setContador] = useState(1);

    const agregarAlCarrito = (producto) => {
        if (carrito.some(el => el.id === producto.id)) {
            const newCarrito = carrito.map(el => {
                if (el.id === producto.id) {
                    return {
                        ...el,
                        cantidad: el.cantidad + producto.cantidad,
                    };
                } else {
                    return el;
                }
            });

            setCarrito(newCarrito);
        } else {
            setCarrito([...carrito, producto]);
        }
        setContador(1);
    };

    const eliminarProducto = (id) => {
        const newCarrito = carrito.filter(el => el.id !== id);
        setCarrito(newCarrito);
    };

    return (
        <AppContext.Provider value={{ carrito, contador, setContador, agregarAlCarrito, eliminarProducto }}>
            {children}
        </AppContext.Provider>
    );
};
