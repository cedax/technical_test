import './ProductCard.css';

export const Producto = () => {
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          <div className="divImagen mt-2">
            <img className="card-img-top" src="http://http2.mlstatic.com/D_847272-MLA48883742699_012022-I.jpg" alt="Kit Restaurador De Volantes Apto T Las Marcas Y Modelos" />
          </div>
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">Kit Restaurador De Volantes Apto T Las Marcas Y Modelos</h5>
              <div className="detalles mt-1 mb-1">
                <div className="badge bg-dark text-white stock">Con Stock</div>
                <div className="badge bg-dark text-white">Usado</div>
              </div>
              $1500.00
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
