import './Inicio.css'
import Inventario from "../Components/Inventario";
import Logo from '../assets/Argos.png'
import { useNavigate } from 'react-router-dom';

function Inicio() {
    const navigate = useNavigate();

    function ingresar(){
        navigate('/login')
    }

    return (
        <section>
            <Inventario />
            <h1>Inventarios Argos</h1>
            <div className='contenedor'>
                <img src={Logo} alt="Logo de Argos" />
                <button type='button'className='Botones' onClick={ingresar}>Ingresar</button>
            </div>
        </section>
    )
}
export default Inicio;