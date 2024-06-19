import { getAllUsers } from "../api/user";
import { validateUserSession } from "../helpers/funciones";

(() => {
  const userInfo = validateUserSession();
  userName.textContent = `Bienvenido ${userInfo.user.name}`;

  // Buscar Usuario en la api

  async function loadTable() {
    try {
      // Obtener usuarios de api
      const { users } = await getAllUsers(userInfo.token);
      console.log(users);

      //  Selector de la tabla
      const tbody = document.querySelector("#tbodyUser");
      // const trElement = document.querySelector('#trTableUser');

      // Construccion de las columnas
      users.forEach((user) => {
        const trElement = document.createElement("TR");
        // Construccion del elemento
        const thName = document.createElement("TD");
        thName.classList.add(
          "w-1/3",
          "text-left",
          "py-3",
          "px-4",
          "uppercase",
          "font-semibold",
          "text-sm"
        );
        thName.textContent = user.name;

        const thEmail = document.createElement("TD");
        thEmail.classList.add(
          "w-1/3",
          "text-left",
          "py-3",
          "px-4",
          "uppercase",
          "font-semibold",
          "text-sm"
        );
        thEmail.textContent = user.email;

        const thRol = document.createElement("TD");
        thRol.classList.add(
          "w-1/3",
          "text-left",
          "py-3",
          "px-4",
          "uppercase",
          "font-semibold",
          "text-sm"
        );
        thRol.textContent = user.rol;

        const thActions = document.createElement("TD");
        thActions.innerHTML = `<a href="#" data-employee="${user.id}" class="text-red-600 hover:text-red-900 mr-5 eliminar">Eliminar</a>
                      <a href="#" data-employee="${user.id}" class="text-yellow-600 hover:text-red-900 ver">Editar</a>`;

        // Agregar a la tabla
        trElement.appendChild(thName);
        trElement.appendChild(thEmail);
        trElement.appendChild(thRol);
        trElement.appendChild(thActions);
        tbody.appendChild(trElement);
      });
    } catch (error) {
      console.log(error);
    }
  }

  loadTable();
})();
