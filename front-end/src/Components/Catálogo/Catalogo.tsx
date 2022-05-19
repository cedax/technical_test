import { Producto } from '../ProductCard/ProductCard';
import { useContext } from 'react';
import { BusquedaContext } from "../../Context/busquedaContext";
import { ItemML } from '../../models/item';

export const Catalogo = () => {
  const {getListaProductos} = useContext(BusquedaContext);

  const productos:ItemML[] = getListaProductos();

  return (
    <div className="container px-4 px-lg-5 mt-4">
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {
          productos.length > 0 ? 
            productos.map((producto:ItemML) => {
              return <Producto key={producto.id} producto={producto} />
            })
          :
            <h4>Realiza una busqueda</h4>
        }
      </div>
    </div>
  )
}
