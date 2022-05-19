import { Producto } from '../ProductCard/ProductCard';
import { Fragment, useContext, useState } from 'react';
import { BusquedaContext } from "../../Context/busquedaContext";
import { ItemML } from '../../models/item';
import './Catalogo.css';

export const Catalogo = () => {
  const { getListaProductos, setListaProductos } = useContext(BusquedaContext);

  let productos = getListaProductos();

  const productosPaginacion:any = [];
  for (let i = 0; i < productos.length; i += 20) {
    productosPaginacion.push(productos.slice(i, i + 20));
  }

  let paginationCount = productosPaginacion.length;

  const [pagination, setPagination] = useState(0);

  const ordenarDeMayorAMenor = () => {
    let order = productos.sort((a:any, b:any) => {
      if (a.price > b.price) {
        return -1;
      }
    });
    setListaProductos(order);
  }

  const ordenarDeMenorAMayor = () => {
    let order = productos.sort((a:any, b:any) => {
      if (a.price < b.price) {
        return -1;
      }
    });
    setListaProductos(order);
  }

  return (
    <Fragment>
      {productos.length > 0 && (
        <div className="filtros">
          <button className="btn btn-primary" onClick={() => ordenarDeMenorAMayor()}>Order de menor a mayor</button>
          <button className="btn btn-primary" onClick={() => ordenarDeMayorAMenor()}>Order de mayor a menor</button>
        </div>
      )}

      <div className="container px-4 px-lg-5 mt-4">
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            productosPaginacion[pagination]?.length > 0 ?
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
              <div className="d-flex justify-content-center">
                {
                  productosPaginacion.map((productos: ItemML[], index: number) => {
                    return <button key={index} className={`btn btn-dark mr-2 ${pagination === index ? 'active' : ''}`} onClick={() => setPagination(index)}>{index + 1}</button>
                  })
                }
              </div>
            :
            <div></div>
        }
      </div>
    </Fragment>
  )
}
