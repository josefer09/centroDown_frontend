import { getAlumnos } from "../../api/alumnos/alumno";
import clienteAxios from "../../config/axios";
import { printAlumnos } from "../../helpers/alumno";

(() => {
  document.addEventListener("DOMContentLoaded", async () => {
    // Llenar selecor Alumno
    const {alumnos} = await getAlumnos();
    console.log(alumnos);
    printAlumnos(alumnos, 'alumnos');
  });

  


})();
