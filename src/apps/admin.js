import { validateUserSession } from "../helpers/funciones";

(() => {

    // Primero verificar si existe token
    const userInfo = validateUserSession();
    console.log(userInfo);

    // Cargar elementos del DOM
    const userName = document.querySelector('#userName');
    userName.textContent = `Bienvenido ${userInfo.user.name}`
    // Toggle sidebar
    // Toggle sidebar
    document.getElementById('mobileMenuButton').addEventListener('click', function () {
        let sidebar = document.querySelector('aside');
        let icon = document.getElementById('mobileMenuIcon');
        sidebar.classList.toggle('hidden');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Toggle profile menu
    const profileButton = document.querySelector('#profileButton');
    const profileMenu = document.querySelector('#profileMenu');
    const overlay = document.querySelector('#overlay');

    profileButton.addEventListener('click', () => {
        profileMenu.classList.toggle('hidden');
        overlay.classList.toggle('hidden');
    });

    overlay.addEventListener('click', function () {
        profileMenu.classList.add('hidden');
        overlay.classList.add('hidden');
    });
})();