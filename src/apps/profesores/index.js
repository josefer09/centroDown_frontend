// Esperar a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el botón de cerrar sesión
    const btnCerrarSesion = document.querySelector('#cerrarSesion');

    // Verificar si el botón se encontró antes de añadir el evento
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener('click', () => {
            console.log('Click en cerrar sesión');
            // Aquí puedes agregar la lógica para cerrar sesión
        });
    } else {
        console.error('No se encontró el botón #cerrarSesion en el DOM.');
    }
});
