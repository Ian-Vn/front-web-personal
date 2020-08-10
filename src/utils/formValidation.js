// Funcionaes para validacion

// fumcion para validadr el tamaño minimo de un input
export const minLengthValitacion = (inputData, minLength) => {

    // extraemos el valor del input
    const { value } =  inputData;

    // llamamos a la funcion
    removeClassErrorSuccess( inputData );

    // verificamos el tamaño del value, si es mayor es que cumple los requerimientos
    if ( value.length >= minLength ) {
        inputData.classList.add("success");
        return true;
    } else {
        inputData.classList.add("error");
        return false;
    }
}

// Funcion para validar el email
export const emailValidation = ( inpuData ) => {
    // se crea la expresion egular
    const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // se extrae el value
    const { value } = inpuData;

    // se remueven las clases
    removeClassErrorSuccess(inpuData);

    // se testea si el value concuerda con la expresion regular
    if ( emailValid.test( value ) ) {
        inpuData.classList.add("success");
        return true;
    } else {
        inpuData.classList.add("error");
        return false;
    }
}

const removeClassErrorSuccess = (inpuData) => {
    inpuData.classList.remove("success");
    inpuData.classList.remove("error");
}