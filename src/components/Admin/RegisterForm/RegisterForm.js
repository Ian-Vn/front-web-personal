import React, { useState } from 'react'

import { signUpApi } from '../../../api/user';
import { minLengthValitacion, emailValidation } from "../../../utils/formValidation";
import { Form, Icon, Input, Button, Checkbox, notification } from "antd";

import './RegisterForm.scss';
import { useRef } from 'react';


export const RegisterForm = () => {

    const { Item } = Form;

    // hook para el formulario
    const [form, setForm] = useState({ email: '', password: '', repeatPassword: '', privacyPolicy: false })

    // hook para la validacion del formulario
    const [formValid, setFormValid] = useState({ email: false, password: false, repeatPassword: false, privacyPolicy: false })

    // extrayendo los valores dle formulario
    // const { email, password, repeatPassword, privacyPolicy } = form;
    const { email:emailVal, password:passwordVal, repeatPassword:repeatPasswordVal, privacyPolicy:privacyPolicyVal } = form;
    // Funcion para manejar el submit
    const SubmitForm = async (e) => {
        e.preventDefault();
        // Verificar las validaciones
        const { email, password, repeatPassword, privacyPolicy } = formValid;
        //  Si cualquiera de los campos esta vacio 
        if ( !emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal ) {
            return notification["error"]({ message: "Todos los campos son obligatorios"  });
        }
        // si los campos estan llenos pero las contraseñas no coinciden
        if ( passwordVal != repeatPasswordVal) {
            return notification["error"]({ message: "Las contraseñas tienen que ser iguales" });
        }

        // Si todo ha sido validado se conecta con la API
        const result = await signUpApi(form);
        // Si se ha devuelto un true es porque el usuario ha sido creado exitosamente
        if ( !result.ok  ) {
            return notification["error"]({ message: result.message });
        }
        // si todo ha ocurrido bien
        notification["success"]({ message: result.message });
        setForm({email: '', password: '', repeatPassword: '', privacyPolicy: false});
        setFormValid( { email: false, password: false, repeatPassword: false, privacyPolicy: false } );
    }

    // Funcion para actualizar el estado
    const ChangeForm = ({ target }) => {

        // Uso de las funciones para validar los inputs cuando estos cambian
        const { type, name } = target;

        // Verificamos los casos
        switch (type) {
            case "email":
                setFormValid({ ...formValid, [name]: emailValidation(target) })
                break;

            case "password":
                setFormValid({ ...formValid, [name]: minLengthValitacion(target, 6) })
                break;

            case "checkbox":
                setFormValid({ ...formValid, [name]: target.checked })
                break;
            default:
                break;
        }
        
        if ( type != "checkbox" ) {
            setForm( {...form, [target.name]: target.value })
        } else {
            setForm( {...form, [target.name]: target.checked })
        }
    }

    return (
        <Form className="register-form" onSubmit={SubmitForm} >
            <Item >
                <Input onChange={ChangeForm}
                    className="register-form__input"
                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="email"
                    name="email"
                    placeholder="Correo"
                    value = { emailVal }
                />
            </Item>

            <Item>
                <Input onChange={ChangeForm}
                    className="register-form__input"
                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value = { passwordVal }
                />
            </Item>

            <Item>
                <Input onChange={ChangeForm}
                    className="register-form__input"
                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir contraseña"
                    value = { repeatPasswordVal }
                />
            </Item>

            <Item>
                <Checkbox onChange={ChangeForm} name="privacyPolicy" checked = { privacyPolicyVal }>
                    He leido y acepto la politica de privacidad
                </Checkbox>
            </Item>

            <Item>
                <Button htmlType="submit" className="register-form__button" >
                    Crear cuenta
                </Button>
            </Item>
        </Form>
    )
}
