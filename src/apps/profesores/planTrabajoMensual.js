
(() => {
    console.log('from plan trabajo mensual');

    // Selectores
    const form = document.querySelector('#form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submit click');
        window.location.href = './completarPlanMensual.html';
    })
})()