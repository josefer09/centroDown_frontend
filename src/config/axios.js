import axios from 'axios';

// Método para crear peticiones previamente configuradas
const url = 'http://localhost:3000';
const clienteAxios = axios.create({
    baseURL: `${url}/api`
});

export default clienteAxios;
