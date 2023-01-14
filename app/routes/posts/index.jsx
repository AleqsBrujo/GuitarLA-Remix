import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/models/post.server"
import ListadoPost from '~/components/listado-post'


export function meta(){
  return {
    title: 'GuitarLA - Nuestro Blog',
    description: 'GuitarLa - Blog de Musica y Venta de Guitarras'
  }

}


export async function loader(){
  const posts = await getPosts()

  return  posts.data

}

function Blog() {

  const posts = useLoaderData()
  
  return (   
    <ListadoPost
      posts={posts}/>     
      
  )
}

export default Blog