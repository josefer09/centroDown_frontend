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

export function printProfesores(profesores, nombreSelector) {
    // Obtener los datos:
    const select = document.querySelector(`#${nombreSelector}`)
    // Construccion del option
    profesores.forEach(profesor => {
        const option = document.createElement('OPTION');
        option.value = profesor.id_profesor;
        option.textContent = `${profesor.nombre} ${profesor.apellido_paterno}`;
        select.appendChild(option);
    });
}

export function printPropositosAlcanzados(propositosAlcanzados, nombreSelector) {
    // Obtener los datos:
    const select = document.querySelector(`#${nombreSelector}`);
    // Construccion del option
    propositosAlcanzados.forEach(propositoAlcanzado => {
      const option = document.createElement('OPTION');
      option.value = propositoAlcanzado.id_proposito_alcanzado;
      option.textContent = `${propositoAlcanzado.proposito.nombre}`;
      select.appendChild(option);
    });
}