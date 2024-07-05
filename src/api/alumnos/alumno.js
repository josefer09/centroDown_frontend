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


      export const getProfesores = async () => {
        try {
          const { data } = await clienteAxios.get("/profesor");
          return data;
        } catch (error) {
          console.log(error);
          return error;
        }
      };

      export const getPropositosAlcanzados = async () => {
        try {
          const { data } = await clienteAxios.get('/propositoAlcanzado');
          return data;
        } catch (error) {
          console.log(error);
          return error;
        }
      }