import { useOutletContext } from '@remix-run/react'
import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'

    }
  ]

}

export function meta(){
  return (
    {
      title: 'GuitarLA-Nosotros',
      description: 'Venta de guitarras, blog de música y más'
    }
  )
}

function Nosotros() {
  

  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>
        <div className="contenido">
            <img src={imagen} alt="imagen-aboutUs" />
            <div>
              <p>
              Morbi sit amet purus nec neque tempus ullamcorper vitae ut ex. Donec metus dolor, auctor eget facilisis ut,
              convallis sed mi.
              Donec ut augue dolor.
              Nunc tempus gravida velit id hendrerit. Pellentesque vel fermentum eros.
              Nunc condimentum arcu et diam euismod, nec pretium massa suscipit. Proin cursus volutpat odio ut cursus.
              </p>
              <p>
              Morbi sit amet purus nec neque tempus ullamcorper vitae ut ex. Donec metus dolor, auctor eget facilisis ut,
              convallis sed mi.
              Donec ut augue dolor.
              Nunc tempus gravida velit id hendrerit. Pellentesque vel fermentum eros.
              Nunc condimentum arcu et diam euismod, nec pretium massa suscipit. Proin cursus volutpat odio ut cursus.
              </p>

            </div>
        </div>
    </main>
  )
}

export default Nosotros