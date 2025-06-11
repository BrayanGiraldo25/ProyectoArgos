import  "../assets/styles.css";
import { useEffect, useState } from "react";
import Inventario from "../Components/Inventario";
import "../Components/Boton.css";
import "./RegistroInventario.css"
import { alerta_redireccion, aletrta_error } from "../helpers/funciones";
import { useNavigate } from "react-router-dom";
let db_inventario = "http://localhost:8080/inventario"

function RegistroInventario() {
    let usuario = JSON.parse(localStorage.getItem("usuario"))
    let redireccion = useNavigate();

    const [inventario, setinventario] = useState("");
    const [planta, setplanta] = useState("");
    const [getusuario, setusuario] = useState("");
    const [silo1, setsilo1] = useState("");
    const [silo2, setsilo2] = useState("");
    const [silo3, setsilo3] = useState("");
    const [silo4, setsilo4] = useState("");
    const [silo5, setsilo5] = useState("");
    const [silo6, setsilo6] = useState("");
    const [silo7, setsilo7] = useState("");
    const [fecha, setfecha] = useState("");
    const [plastiment, setplastiment] = useState("");
    const [sikaplast, setsikaplast] = useState("");
    const [aerd, setaerd] = useState("");
    const [sikatard, setsikatard] = useState("");
    const [separol, setseparol] = useState("");
    const [sikacontrol, setsikacontrol] = useState("");
    const [sikarapid, setsikarapid] = useState("");
    const [sikafume, setsikafume] = useState("");
    const [wt240, setwt240] = useState("");
    const [fpolipropileno, setfpolipropileno] = useState("");
    const [acpm, setacpm] = useState("");
    const [agua, setagua] = useState("");
    const [energia, setenergia] = useState("");
        
    function getInventario() {
        fetch(db_inventario)
        .then((response)=> response.json())
        .then((data)=> setinventario(data))
        .catch((error)=> console.log(error))
    }

    useEffect(()=>{getInventario()}, []);
    console.log(inventario);

    function setInventario() {
        let auth = inventario.find((item)=> item.fecha == fecha);
        if (auth) {
             aletrta_error("El inventario de esta fecha ya esta registrado.")
        }else if (fecha.trim() !== "", silo1.trim() !== "", silo2.trim() !== "", silo3.trim() !== "", silo4.trim() !== "", silo5.trim() !== "", silo6.trim() !== "", silo7.trim() !== "", plastiment.trim() !== "", sikaplast.trim() !== "", aerd.trim() !== "", sikatard.trim() !== "", separol.trim() !== "", sikacontrol.trim() !== "", sikarapid.trim() !== "", sikafume.trim() !== "", wt240.trim() !== "", fpolipropileno.trim() !== "", acpm.trim() !== "", agua.trim() !== "", energia.trim() !== "", getusuario.trim() !== "", planta.trim() !== "") {
             alerta_redireccion("/home", redireccion, "Descargue registrado.")
        fetch(db_inventario, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                fecha: fecha,
                s1elba: silo1,
                s2elba: silo2,
                s3elba: silo3,
                s4elba: silo4,
                s1erie: silo5,
                s2erie: silo6,
                s3erie: silo7,
                plastiment: plastiment,
                sikaplast: sikaplast,
                aerd: aerd,
                sikatard: sikatard,
                separol: separol,
                sikacontrol: sikacontrol,
                sikarapid: sikarapid,
                sikafume: sikafume,
                wt240: wt240,
                fpolipropileno: fpolipropileno,
                acpm: acpm,
                agua: agua,
                energia: energia,
                usuario: {
                    documento: getusuario
                },
                planta: {
                    idplanta: planta
                }
            })
        })
        }else{
          aletrta_error("Ningun campo debe de quedar vacío.")
        }
    }

    


    return(
        <section className="registroInventario">
            <Inventario />
            <form action="" className="form_inventario">
                <h1>Inventario</h1>
                <select name="" id=""required  value={getusuario} onChange={(e)=> setusuario(e.target.value)}>
                    <option value="">Seleccione su usuario</option>
                    <option value={usuario.documento}>{usuario.nombre}</option>
                </select>
                <select name="" id="" required value={planta} onChange={(e)=> setplanta(e.target.value)}>
                    <option value="">Seleccione la planta</option>
                    <option value="PT001">PT Medellín</option>
                </select>
                {planta == "PT001" && (
                    <div className="form_silos">
                        <input type="date"  required placeholder="Fecha"  onChange={(e)=> setfecha(e.target.value)}/>
                        <input type="text"  required placeholder="Silo 1 Elba"  onChange={(e)=> setsilo1(e.target.value)}/>
                        <input type="text"  required placeholder="Silo 2 Elba"  onChange={(e)=> setsilo2(e.target.value)}/>
                        <input type="text"  required placeholder="Silo 3 Elba"  onChange={(e)=> setsilo3(e.target.value)}/>
                        <input type="text"  required placeholder="Silo 4 Elba"  onChange={(e)=> setsilo4(e.target.value)}/>
                        <input type="text"  required placeholder="Silo 1 Erie"  onChange={(e)=> setsilo5(e.target.value)}/>
                        <input type="text"  required placeholder="Silo 2 Erie"  onChange={(e)=> setsilo6(e.target.value)}/>
                        <input type="text"  required placeholder="Silo 3 Erie"  onChange={(e)=> setsilo7(e.target.value)}/>
                        <input type="text"  required placeholder="Plastiment"  onChange={(e)=> setplastiment(e.target.value)}/>
                        <input type="text"  required placeholder="Sikaplast"  onChange={(e)=> setsikaplast(e.target.value)}/>
                        <input type="text"  required placeholder="AER-D"  onChange={(e)=> setaerd(e.target.value)}/>
                        <input type="text"  required placeholder="Sikatard"  onChange={(e)=> setsikatard(e.target.value)}/>
                        <input type="text"  required placeholder="Separol"  onChange={(e)=> setseparol(e.target.value)}/>
                        <input type="text"  required placeholder="Sikacontrol"  onChange={(e)=> setsikacontrol(e.target.value)}/>
                        <input type="text"  required placeholder="Sikarapid"  onChange={(e)=> setsikarapid(e.target.value)}/>
                        <input type="text"  required placeholder="Sikafume"  onChange={(e)=> setsikafume(e.target.value)}/>
                        <input type="text"  required placeholder="WT240"  onChange={(e)=> setwt240(e.target.value)}/>
                        <input type="text"  required placeholder="Fibra polipropileno"  onChange={(e)=> setfpolipropileno(e.target.value)}/>
                        <input type="text"  required placeholder="ACPM"  onChange={(e)=> setacpm(e.target.value)}/>
                        <input type="text"  required placeholder="Contador agua"  onChange={(e)=> setagua(e.target.value)}/>
                        <input type="text"  required placeholder="Contador energia"  onChange={(e)=> setenergia(e.target.value)}/>
                    </div>
                )}
                <button type="button" className="Botones" onClick={setInventario}>Enviar</button>

            </form>
            
        </section>
    )
    
}
export default RegistroInventario;