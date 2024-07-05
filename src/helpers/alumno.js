export function printAlumnos(alumnos, nombreSelector) {
    // Obtener los datos:
    const select = document.querySelector(`#${nombreSelector}`)
    // Construccion del option
    alumnos.forEach(alumno => {
        const option = document.createElement('OPTION');
        option.value = alumno.id_alumno;
        option.textContent = `${alumno.nombre} ${alumno.apellido_paterno}`;
        select.appendChild(option);
    });
}