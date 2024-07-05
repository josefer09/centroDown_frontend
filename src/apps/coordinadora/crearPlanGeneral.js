import { getAlumnos, getProfesores, getPropositosAlcanzados } from "../../api/alumnos/alumno";
import clienteAxios from "../../config/axios";
import { showAlert } from "../../helpers/alert";
import { printAlumnos, printProfesores, printPropositosAlcanzados } from "../../helpers/alumno";
import { isObjectEmpty } from "../../helpers/funciones";

(() => {
  // Selectores
  const form = document.querySelector("#formulario");
  const addPropositoBtn = document.getElementById('addProposito');
  const propositosContainer = document.getElementById('propositosContainer');
  let planSemestral = {
    nombre: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
    id_alumno: 0,
    id_profesor: 0,
    estatus: "0",
    propositosIds: []
  }

  // Variable para almacenar los propósitos alcanzados
  let propositosAlcanzadosData = [];

  document.addEventListener("DOMContentLoaded", async () => {
    // Llenar selectores de Alumnos y Profesores
    const { alumnos } = await getAlumnos();
    const { profesores } = await getProfesores();
    const { propositosAlcanzados } = await getPropositosAlcanzados();
    propositosAlcanzadosData = propositosAlcanzados; // Almacenar datos de propósitos alcanzados

    console.log(alumnos);
    console.log(profesores);
    console.log(propositosAlcanzados);

    // Asegúrate de que los elementos existen antes de intentar usarlos
    const alumnosSelect = document.querySelector('#alumnos');
    const profesoresSelect = document.querySelector('#profesores');
    const propositosSelect = document.querySelector('#propositosAlcanzados');

    if (alumnosSelect) {
      printAlumnos(alumnos, 'alumnos');
    } else {
      console.error("No se encontró el elemento con ID 'alumnos'");
    }

    if (profesoresSelect) {
      printProfesores(profesores, 'profesores');
    } else {
      console.error("No se encontró el elemento con ID 'profesores'");
    }

    if (propositosSelect) {
      printPropositosAlcanzados(propositosAlcanzados, 'propositosAlcanzados');
    } else {
      console.error("No se encontró el elemento con ID 'propositosAlcanzados'");
    }

    // Función para crear un nuevo propósito
    const createPropositoField = () => {
      const div = document.createElement('div');
      div.className = 'propositoItem flex items-center mb-2';
      div.innerHTML = `
        <select class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="propositosAlcanzados">
          <option value="" disabled selected>Seleccionar el propósito a alcanzar</option>
        </select>
        <button type="button" class="ml-2 text-red-500 hover:text-red-700" onclick="removeProposito(this)">Eliminar</button>
      `;
      propositosContainer.appendChild(div);

      // Llenar el selector con los propósitos alcanzados
      const select = div.querySelector('select');
      propositosAlcanzadosData.forEach(propositoAlcanzado => {
        const option = document.createElement('OPTION');
        option.value = propositoAlcanzado.id_proposito_alcanzado;
        option.textContent = `${propositoAlcanzado.proposito.nombre}`;
        select.appendChild(option);
      });
    };

    // Función para eliminar un propósito
    window.removeProposito = (button) => {
      const propositoItem = button.parentElement;
      propositosContainer.removeChild(propositoItem);
    };

    // Añadir un nuevo propósito al hacer clic en el botón
    addPropositoBtn.addEventListener('click', createPropositoField);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Selectores
      const nombre = document.querySelector('#nombre').value;
      const idAlumno = document.querySelector('#alumnos').value; // Obtengo id
      const idProfesor = document.querySelector('#profesores').value;
      const fechaInicio = document.querySelector('#fechaInicio').value;
      const fechaFin = document.querySelector('#fechaFin').value;
      const descripcion = document.querySelector('#descripcion').value;

      // Colocar al objeto
      planSemestral.nombre = nombre;
      planSemestral.id_alumno = idAlumno;
      planSemestral.id_profesor = idProfesor;
      planSemestral.fechaInicio = fechaInicio;
      planSemestral.fechaFin = fechaFin;
      planSemestral.descripcion = descripcion;
      console.log(planSemestral);

      const isEmpty = isObjectEmpty(planSemestral);

      if (isEmpty) {
        showAlert('Todos los campos son obligatorios', 'error', form);
        return;
      }

      // Obtener los valores de los propósitos seleccionados
      const propositosSeleccionados = Array.from(propositosContainer.querySelectorAll('select')).map(select => select.value);
      planSemestral.propositosIds = propositosSeleccionados;

      try {
        const response = await clienteAxios.post('/planes-semestrales', planSemestral);
        showAlert('Plan Semestral creado correctamente', 'success', form);
      } catch (error) {
        showAlert('Hubo un error al crear el Plan Semestral', 'error', form);
      }
    });
  });
})();
