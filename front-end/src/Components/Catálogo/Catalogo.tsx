import { Producto } from '../ProductCard/ProductCard';
import { Fragment, useContext, useState } from 'react';
import { BusquedaContext } from "../../Context/busquedaContext";
import { ItemML } from '../../models/item';
import './Catalogo.css';

export const Catalogo = () => {
  const { getListaProductos } = useContext(BusquedaContext);

  let productos: ItemML[] = getListaProductos();

  const productosPaginacion: ItemML[][] = [];
  for (let i = 0; i < productos.length; i += 20) {
    productosPaginacion.push(productos.slice(i, i + 20));
  }

  let paginationCount = productosPaginacion.length;

  const [pagination, setPagination] = useState(0);

  return (
    <Fragment>
      <div className="container px-4 px-lg-5 mt-4">
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            productosPaginacion[pagination].length > 0 ?
              productosPaginacion[pagination].map((producto: ItemML) => {
                return <Producto key={producto.id} producto={producto} />
              })
              :
              <h4>Realiza una busqueda</h4>
          }
        </div>
      </div>

      <div className="pagination">
        {
          paginationCount > 1 ?
            <Fragment>
              <div className="d-flex justify-content-center">
                {
                  productosPaginacion.map((productos: ItemML[], index: number) => {
                    return <button className={`btn btn-dark mr-2 ${pagination === index ? 'active' : ''}`} onClick={() => setPagination(index)}>{index + 1}</button>
                  })
                }
              </div>
            </Fragment>
            :
            <Fragment></Fragment>
        }
      </div>
    </Fragment>
  )
}
