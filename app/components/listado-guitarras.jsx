import Guitarra from './guitarra'


export default function ListadoGuitarras({guitarras}) {
  return (
    <div>
          <h2 className="heading">NUESTRA COLECCION</h2>

        {guitarras?.length && (
        <div className="guitarras-grid">
        {guitarras?.map( guitarra => (
        <Guitarra 
            key={guitarra.id}
            guitarra={guitarra?.attributes}/>
         ))}
        </div>
)}
    </div> 
    
    
    )
}
