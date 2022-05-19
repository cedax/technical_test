import { useContext, useState } from "react";
import { BusquedaContext } from "../../Context/busquedaContext";

import './SearchBar.css';

export const BarrraBusqueda = () => {
    const [busqueda, setBusqueda] = useState("");
    
    const percentage = 73000;

    const {setListaProductos} = useContext(BusquedaContext);

    const actualizaBusqueda = (busqueda:EventTarget) => {
        const input = busqueda as HTMLInputElement;
        setBusqueda(input.value);
    }

    const buscar = (e:any) => {
        e.preventDefault();
        if(busqueda.trim() === "") return;

        const url = `http://127.0.0.1:5100/api/search?query=${busqueda}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                setListaProductos(resultado);
            });

        setBusqueda("");
    }

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container px-4 px-lg-5"><a className="navbar-brand" href="#!">Prueba tecnica</a>
                    <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex form-busqueda" role="search" onSubmit={buscar}>
                            <input className="form-control me-2" type="search" placeholder="Nombre producto"
                                value={busqueda} onInput={e => actualizaBusqueda(e.target)}
                            />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
            <header className="bg-dark py-1">
                <div className="container px-4 px-lg-5 my-3">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Christopher</h1>
                        <p className="lead fw-normal text-white-50 mb-0">Catalogo usando la API de MercadoLibre</p>
                    </div>
                </div>
            </header>
        </>
    )
}
