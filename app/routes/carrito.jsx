import { useState, useEffect } from 'react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/carrito.css'

export function meta() {
  return {
    title: 'GuitarLA - Carrito de Compras',
    description: 'Guitarras, Venta de Guitarras, Blog y escuela de Musica'
  }
}

export function links () {
  return  [
    {
    rel: 'stylesheet',
    href: styles
    }
  ]

}

export default function Carrito() {
  const [total, setTotal]  = useState(0)
  const {carrito, actualizarCantidad, eliminarProducto} = useOutletContext()

   useEffect(() => {
      const granTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0 )
      setTotal(granTotal)
    }, [carrito])
    

  return (  
  <ClientOnly fallback={'Cargando..'}>
    {() => (
      <main className="contenedor">
        <h1 className="heading">Carrito de Compras</h1>

        <div className='contenido'>
          <div className='carrito'>
              <h2>Articulo</h2>
              {carrito?.length === 0 ? 'Carrrito Vacio' : (
                carrito?.map( producto => (
                  <div key={producto.id} className='producto'>
                    <div>
                      <img src={producto.imagen} alt={`Imagen producto ${producto.nombre}`} />
                    </div>

                    <div>
                      <p className='nombre'>{producto.nombre}</p>
                      <p className='cantidad'>Cantidad: </p> 
                      <select value={producto.cantidad}
                              className='select'
                              onChange={e => actualizarCantidad({
                                cantidad: +e.target.value,
                                id: producto.id
                              })}>
                          <option value="1"> 1 </option>
                          <option value="2"> 2</option>
                          <option value="3"> 3 </option>
                          <option value="4"> 4 </option>
                          <option value="5"> 5</option> 
                      </select>

                      <p className='precio'>$ <span>{producto.precio}</span></p>
                      <p className='subtotal'>SubTotal: $ <span>{producto.precio * producto.cantidad}</span></p>
                      <button
                        type='button'
                        className='btn_eliminar'
                        onClick={ () => eliminarProducto(producto.id) }>X</button>

                    </div>

                  </div>

                ))

              )}
          </div>

          <aside className="resumen">
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: $ {total}</p>
          </aside>
        
        </div>

      </main>
      )}
  </ClientOnly>  
  )
}
