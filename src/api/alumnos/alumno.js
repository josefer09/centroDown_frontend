import clienteAxios from "../../config/axios";

    
    export const getAlumnos = async () => {
        try {
          const { data } = await clienteAxios.get("/alumno");
          return data;
        } catch (error) {
          console.log(error);
          return error;
        }
      };
