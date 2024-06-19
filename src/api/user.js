import clienteAxios from "../config/axios";


export const getAllUsers = async (token) => {
    // Consultamos a la api
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        const { data } = await clienteAxios('user/', config);
        return data;
    } catch (error) {
        console.log(error);
    }
}