import { createContext, useState, useReducer } from "react";
import { ItemML } from "../models/item";

import busquedaReducer from "./busquedaReducer";

const estadoInicial:any = {};

const BusquedaContext = createContext(estadoInicial);

interface props {
    children: JSX.Element | JSX.Element[];
}

const ContextProvider = ({children}:props) => {
    const [state, dispatch] = useReducer(busquedaReducer, estadoInicial);

    const setListaProductos = (productos:ItemML[]) => {
        dispatch({type: 'SET_PRODUCTOS', payload: {productos}});
    }

    const getListaProductos = () => {
        return state;
    }

    return <BusquedaContext.Provider value={{...estadoInicial, setListaProductos, getListaProductos}}>
        {children}
    </BusquedaContext.Provider>
};

export { BusquedaContext, ContextProvider };