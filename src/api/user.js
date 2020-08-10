import { basePath } from "./config";

// data es un objeto
export const signUpApi = async (data) => {
    const url = `${basePath}/sign-up`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        } 
    };
    try {
        const response = await fetch(url, params);
        const respData = await response.json();
        // si no se ha regresado el usuario el usuario es porque ha ocurrido un error
        if ( !respData.user) {
            return { ok: false, message: respData.message  }
        }
        // si no ha ocurrido un error
        return { ok: true, message: respData.message };
    } catch (err) {
        return {
            ok: false, message: err.message
        };
    }
    // se realizar la peticion fetch

}