import React, { useState } from 'react';  // Asegúrate de importar useState
import "./FormularioAditivos.css";

function FormularioAditivos() {

    const [aditivoActual, setAditivoActual] = useState({
        tipo: '',
        cantidad1: '',
        placa: '',
        cantidad2: '',
        observaciones: ''
    });

    const [listaAditivos, setListaAditivos] = useState([]);
    const [registroCompleto, setRegistroCompleto] = useState(false);

    const handleChange = (e) => {
        setAditivoActual({
            ...aditivoActual,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Guarda el aditivo actual en la lista
        setListaAditivos((prevLista) => [...prevLista, aditivoActual]);

        // Pregunta si desea agregar otro
        const deseaAgregarOtro = window.confirm("¿Deseas agregar otro aditivo?");
        
        if (deseaAgregarOtro) {
            // No se limpia el formulario, continúa como está
            setRegistroCompleto(false);
        } else {
            console.log("Lista completa de aditivos:", [...listaAditivos, aditivoActual]);
            setRegistroCompleto(true);
        }
    };

    return (
        <div>
            <h2>Registro Aditivos</h2>

            <form onSubmit={handleSubmit}>  {/* Asegúrate de manejar el submit */}
                <div>
                    <label htmlFor="tipo">Tipo de Aditivos</label>
                    <select name="tipo" id="tipo" value={aditivoActual.tipo} onChange={handleChange}>
                        <option value="">Selecciona el Aditivo</option>
                        <option value="Plastiment 160 SO">Plastiment 160 SO</option>
                        <option value="SikaPlast">SikaPlast</option>
                        <option value="AER-D">AER-D</option>
                        <option value="SikaTard">SikaTard</option>
                        <option value="Separol">Separol</option>
                        <option value="Fibra Polipropileno">Fibra Polipropileno</option>
                        <option value="Fibra STRUX">Fibra STRUX</option>
                        <option value="Mapei ST50">Mapei ST50</option>
                        <option value="F-MAX">F-MAX</option>
                        <option value="Sika WT-240">Sika WT-240</option>
                        <option value="SikaFume">SikaFume</option>
                        <option value="Fibra Dramix">Fibra Dramix</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="cantidad1">Cantidad de Aditivos:</label>
                    <input 
                        type="number" 
                        id="cantidad1" 
                        name="cantidad1" 
                        value={aditivoActual.cantidad1} 
                        onChange={handleChange} 
                    />
                </div>

                <div>
                    <label htmlFor="placa">Placa:</label>
                    <input 
                        type="text" 
                        id="placa" 
                        name="placa" 
                        value={aditivoActual.placa} 
                        onChange={handleChange} 
                    />
                </div>

                <div>
                    <label htmlFor="cantidad2">Cantidad (otra vez):</label>
                    <input 
                        type="number" 
                        id="cantidad2" 
                        name="cantidad2" 
                        value={aditivoActual.cantidad2} 
                        onChange={handleChange} 
                    />
                </div>

                <div>
                    <label htmlFor="observaciones">Observaciones:</label>
                    <textarea 
                        id="observaciones" 
                        name="observaciones" 
                        rows="4" 
                        value={aditivoActual.observaciones} 
                        onChange={handleChange} 
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FormularioAditivos;


