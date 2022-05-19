import { createContext } from "react";

const estadoInicial = {
    productos: [
        {
            id: 1,
            nombre: "Producto 1",
            precio: 100,
            descripcion: "Descripción del producto 1",
            imagen: "https://via.placeholder.com/150"
        },
    ]
};

const BusquedaContext = createContext(estadoInicial);

interface props {
    children: JSX.Element | JSX.Element[];
}

const ContextProvider = ({children}:props) => {
    return <BusquedaContext.Provider value={estadoInicial}>
        {children}
    </BusquedaContext.Provider>
};

export { BusquedaContext, ContextProvider };