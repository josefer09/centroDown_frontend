(() => {
  // Selectores
  const alumno = document.querySelector("#alumno");
  const maestro = document.querySelector("#maestro");
  const periodo = document.querySelector("#periodo");

  const planMensual = {
    nombreAlumno: "Juan Lopez",
    maestro: "Leticia",
    periodo: "12 de Mayo de 2024 a 12 de Junio de 2024",
  };
  // Data
  const propositos = [
    { id: 1, text: "Aprender a hablar", estatus: 0 },
    { id: 2, text: "Proposito 2" },
    { id: 3, text: "Proposito 3" },
    // Más propósitos...
  ];

  const aprendizajes = [
    { id: 1, text: "Pronunciar vocales", estatus: 0 },
    { id: 2, text: "Hacer movimientos" },
    { id: 3, text: "Aprendizaje matematico" },
    // Más propósitos...
  ];

  document.addEventListener("DOMContentLoaded", () => {
    llenarPropositos(propositos);
    llenarAprendizajes(aprendizajes);
    llenarDatos();
  });

  // Llenar dinamicamente los propositos
  function llenarPropositos(propositos) {
    const propositosContainer = document.getElementById("propositosContainer");

    propositos.forEach((proposito, index) => {
      const propositoDiv = document.createElement("div");
      propositoDiv.classList.add("mb-4", "flex", "items-center");

      const input = document.createElement("input");
      input.type = "text";
      input.id = `proposito${index + 1}`;
      input.name = `proposito${index + 1}`;
      input.value = proposito.text;
      input.classList.add(
        "appearance-none",
        "border",
        "rounded",
        "w-full",
        "py-2",
        "px-3",
        "text-gray-700",
        "leading-tight",
        "focus:outline-none",
        "focus:shadow-outline"
      );
      input.disabled = true;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `checkbox${index + 1}`;
      checkbox.name = `checkbox${index + 1}`;
      checkbox.classList.add("ml-2");

      checkbox.addEventListener("change", (e) => {
        input.disabled = !e.target.checked;
      });

      propositoDiv.appendChild(input);
      propositoDiv.appendChild(checkbox);
      propositosContainer.appendChild(propositoDiv);
    });
  }

  function llenarAprendizajes(aprendizajes) {
    const aprendizajesContainer = document.getElementById(
      "aprendizajesContainer"
    );

    aprendizajes.forEach((aprendizaje, index) => {
      const propositoDiv = document.createElement("div");
      propositoDiv.classList.add("mb-4", "flex", "items-center");

      const input = document.createElement("input");
      input.type = "text";
      input.id = `aprendizaje${index + 1}`;
      input.name = `aprendizaje${index + 1}`;
      input.value = aprendizaje.text;
      input.classList.add(
        "appearance-none",
        "border",
        "rounded",
        "w-full",
        "py-2",
        "px-3",
        "text-gray-700",
        "leading-tight",
        "focus:outline-none",
        "focus:shadow-outline"
      );
      input.disabled = true;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `checkbox${index + 1}`;
      checkbox.name = `checkbox${index + 1}`;
      checkbox.classList.add("ml-2");

      checkbox.addEventListener("change", (e) => {
        input.disabled = !e.target.checked;
      });

      propositoDiv.appendChild(input);
      propositoDiv.appendChild(checkbox);
      aprendizajesContainer.appendChild(propositoDiv);
    });
  }

  function llenarDatos() {
    alumno.value = planMensual.nombreAlumno;
    maestro.value = planMensual.maestro;
    periodo.value = planMensual.periodo;
  }

  document
    .getElementById("formulario")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir el envío del formulario

      const formData = new FormData(this);
      const propositosSeleccionados = [];

      for (let pair of formData.entries()) {
        const [name, value] = pair;
        if (
          name.startsWith("proposito") &&
          formData.get(`checkbox${name.match(/\d+/)[0]}`)
        ) {
          propositosSeleccionados.push(value);
        }
      }

      const aprendizajesSeleccionados = [];

      for (let pair of formData.entries()) {
        const [name, value] = pair;
        if (
          name.startsWith("aprendizaje") &&
          formData.get(`checkbox${name.match(/\d+/)[0]}`)
        ) {
          aprendizajesSeleccionados.push(value);
        }
      }

      planMensual.propositos = propositosSeleccionados;
      planMensual.aprendizajes = aprendizajesSeleccionados;

      console.log(planMensual);
    });
})();
