let loginRegistro = document.getElementById("loginRegistro")
let loginIngreso = document.getElementById("loginIngreso")

loginRegistro.classList.add("hidden")
// Funciones del login -----------------------------------------------------------------------------------

let btniniciarSesion = document.getElementById("btniniciarSesion").addEventListener("click", iniciarSesion)

function iniciarSesion() {
    
}

let btnIrAlRegistro = document.getElementById("btnIrAlRegistro").addEventListener("click", formularioRegistro)

function formularioRegistro() {
    loginRegistro.classList.remove("hidden")
    loginIngreso.classList.add("hidden")
}
let btnRegistrarse = document.getElementById("btnRegistrarse").addEventListener("click", registrarUsuario)

function registrarUsuario() {
    
}

export let btnYaEstoyRegistrado = document.getElementById("btnYaEstoyRegistrado").addEventListener("click", formularioInicioSesion)

export function formularioInicioSesion() {
    loginRegistro.classList.add("hidden")
    loginIngreso.classList.remove("hidden")
}
