import Logo from '../assets/Argos.png'
import './Encabezado.css'
function Encabezado() {
    return (
        <section className='section-encabezado'>
            <header>
                <h1>Inventarios Argos</h1>
                <img src={Logo} alt="Logo Argos" />
            </header>
        </section>
    )
}
export default Encabezado;