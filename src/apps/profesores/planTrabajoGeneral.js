(() => {
    console.log('hello world from plan de trabajo general js');
    document.addEventListener('DOMContentLoaded', () => {
        const addPropositoBtn = document.getElementById('addProposito');
        const propositosContainer = document.getElementById('propositosContainer');
      
        // Función para crear un nuevo propósito
        const createPropositoField = () => {
          const div = document.createElement('div');
          div.className = 'propositoItem flex items-center mb-2';
          div.innerHTML = `
            <select class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="propositos[]">
              <option value="" disabled selected>Seleccionar propósito</option>
              <option value="Propósito 1">Propósito 1</option>
              <option value="Propósito 2">Propósito 2</option>
              <option value="Propósito 3">Propósito 3</option>
              <!-- Puedes agregar más opciones según sea necesario -->
            </select>
            <button type="button" class="ml-2 text-red-500 hover:text-red-700" onclick="removeProposito(this)">Eliminar</button>
          `;
          propositosContainer.appendChild(div);
        };
      
        // Función para eliminar un propósito
        window.removeProposito = (button) => {
          const propositoItem = button.parentElement;
          propositosContainer.removeChild(propositoItem);
        };
      
        // Añadir un nuevo propósito al hacer clic en el botón
        addPropositoBtn.addEventListener('click', createPropositoField);
      });
      
})();