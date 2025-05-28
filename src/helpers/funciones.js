import Swal from "sweetalert2";

export function alerta_confirmacion(mensaje) {
    Swal.fire({
        title: "Bienvenido",
        text: mensaje,
        icon: "success"
    });
}

export function aletrta_error(mensaje) {
    Swal.fire({
        title: "Error!",
        text: mensaje,
        icon: "error"
    });
}

export function alerta_redireccion(path, redireccion, titulo) {
    let timerInterval;
    Swal.fire({
        title: titulo,
        html: "Redirigiendo a el home en <b></b> milisegundos.",
        timer: 2000,
        icon: "success",
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
            redireccion(path)
        }
    })
}

export function generar_token() {
    return Math.random().toString(36).substring(2,10) + "-" + Math.random().toString(36).substring(2,10);
}