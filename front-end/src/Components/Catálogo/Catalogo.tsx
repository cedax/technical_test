import { Producto } from '../ProductCard/ProductCard';
import { useContext } from 'react';
import {BusquedaContext} from '../../Context/busquedaContext';

export const Catalogo = () => {
  const { productos } = useContext(BusquedaContext);
  console.log(productos);

  return (
    <>
      <div className="container px-4 px-lg-5 mt-4">
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Producto/>
        </div>
      </div>
    </>
  )
}
