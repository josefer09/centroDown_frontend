import clienteAxios from "../config/axios";
import { showAlert } from "../helpers/alert";
import { isObjectEmpty } from "../helpers/funciones";

(() => {
  console.log("Hello from login.ts");
  const form = document.querySelector("#form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Selectores
    const emailSelect = document.querySelector("#email").value;
    const passSelect = document.querySelector("#password").value;

    // Comenzamos a validar
    const isEmpty = isObjectEmpty({ emailSelect, passSelect });

    if (isEmpty) {
      // Mostrar Alerta
      showAlert("Todos los campos son obligatorios", "error", form);
      return;
      // Los campos son requeridos
    }

    // Consultar a la api
    try {
      const { data } = await clienteAxios.post("/user/login", {
        email: emailSelect,
        password: passSelect,
      });

      const { dataUser } = data;
      // Guardar en localstorage la session del usuario
      localStorage.setItem("userSession", JSON.stringify(dataUser));
      console.log(dataUser);
      // Redirigir al usuario
      if(dataUser.user.rol === "ADMIN") {
        window.location.href = "../pages/admin.html";
      } else if(dataUser.user.rol === "MAESTRO") {
        window.location.href = "../pages/profesores/admin.html";
      } else if(dataUser.user.rol === "COORDINADOR") {
        window.location.href = "../pages/coordinadora/index.html";
      }
    } catch (error) {
      // Es la forma en la que response la API
      const {response} = error;
      return showAlert(response.data.msg, 'error', form); // Mostramos los errores que nos brinda la API  
    }
  });
})();
