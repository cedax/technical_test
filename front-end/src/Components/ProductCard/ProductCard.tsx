import { Fragment } from 'react';
import { ItemML } from '../../models/item';
import './ProductCard.css';

interface Props {
    producto: ItemML;
}

export const Producto = ({producto}:Props) => {
  return (
    <Fragment>
      <div className="col mb-5">
        <div className="card h-100">
          <div className="divImagen mt-2">
            <img className="card-img-top" src={producto.thumbnail} alt={producto.title} />
          </div>
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder titulo">{producto.title}</h5>
              <div className="detalles mt-1 mb-1">
                <div className="badge bg-dark text-white stock">Stock: {producto.available_quantity}</div>
                <div className="badge bg-dark text-white mb-2">Estado: {producto.condition}</div>
              </div>
              <div className="precio">
                <span>${producto.price} ARS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
