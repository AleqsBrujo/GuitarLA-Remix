
export async function getCurso() {
    const respuesta = await fetch(`${process.env.API_URL_}/curso?populate=imagen`)
    
    return await respuesta.json()

}