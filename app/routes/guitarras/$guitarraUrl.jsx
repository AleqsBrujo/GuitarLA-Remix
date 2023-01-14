import { useState } from 'react'
import {useLoaderData, useOutletContext } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'




export async function loader({ params }){
    const { guitarraUrl } = params
    const guitarra = await getGuitarra( guitarraUrl )

    if(guitarra.data.length === 0){
      throw new Response('', {
        status: 404,
        statusText: 'Guitarra No encontrada'
      })
    }
    
    return guitarra
}


export function meta({data}){
    
  if(!data){
    return {
      title: 'GuitarLa - Guitarra No encontrada',
      description: 'Guitarras, venta de guitarras, Guitarra No encontrada.'
    }
  }

  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre} `

  }
}


function Guitarra() {

  const {agregarCarrito}= useOutletContext()
  

  const [cantidad, setCantidad] = useState(0)

  const guitarra =  useLoaderData()
  const { nombre, descripcion, imagen, precio} = guitarra.data[0].attributes
  const urlImagen =imagen.data.attributes.formats.medium.url

  const handleSubmit = (e) => {
    e.preventDefault()
    if(cantidad < 1){
      alert('Debes seleccionar al menos un articulo')
      return
    }
    
    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: urlImagen,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada) 

  }

  
   
  return (
    <div className='contenedor guitarra'>
      
      <img src={urlImagen} alt={`Imagen de guitarra ${nombre}`} />
      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>$ {precio}.00</p>
      </div>

      <form 
      className='formulario'
      onSubmit={handleSubmit}>
        <label htmlFor="cantidad">Cantidad</label>

        <select 
          onChange={ e => setCantidad(+e.target.value)}
          id="cantidad">  
          <option value="0">-- SELECCIONE --</option>
          <option value="1"> 1 </option>
          <option value="2"> 2</option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
          <option value="5"> 5</option>        
        </select>
        <input 
            type="submit"
            value='Añadir al Carrito'   />

      </form>

    </div>
  )
}

export default Guitarra