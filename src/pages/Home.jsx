import './Home.css'
import { useState } from 'react';
function Home() {
    
    const [resgistrarInventario, setRegistrarInventario] = useState(false);
    const [registrarMateriaPrima, setRegistrarMateriaPrima] = useState(false);
    const [registrarDescargue, setRegistroDescargue] = useState(false);

    return(
        <section className="home">
            <div className="contenedor-botones">
                <button className="Botones">Inventario</button>
                <button className="Botones">Registro Materia Prima</button>
                <button className="Botones">Registro Descargue</button>
            </div>
        </section>
    )
}
export default Home;