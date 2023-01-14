import { useLoaderData } from "@remix-run/react"
import { getPost } from "~/models/post.server"
import { formatearFecha } from '~/utils/helpers'


export async function loader({ params }){
    const { postUrl } = params
    const post = await getPost( postUrl )
    

    if(post.data.length === 0){
      throw new Response('', {
        status: 404,
        statusText: 'Post No Encontrado'
      })
    }
    
    return post

}

export function meta({data}){
  
    
    if(!data){
        return {
            title: 'GuitarLa - Blog No encontrado',
            description: 'Guitarras, Blog de guitarras, Post No encontrado.'
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.titulo}`,
        description: `Guitarras, Blog de guitarras, post ${data.data[0].attributes.titulo}`
    }

}



 function Post(){

    const post = useLoaderData()
    const { contenido, titulo, createdAt, imagen } = post.data[0].attributes
    const urlImagen= imagen.data.attributes.formats.medium.url
   

return (
   <article className="post mt-3">
      <img className='imagen' src={urlImagen} alt="Imagen Muestra" />
      
      <div className="contenido">
      
        <h3>{titulo}</h3>
        <p className="texto">{contenido}</p>
        <br />
        <p className="fecha">{formatearFecha(createdAt)}</p>
      
      </div> 


   </article>

)
}

export default Post