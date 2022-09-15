import React from "react";
import { Card, Form, Button, Icon } from 'semantic-ui-react';
import {Link } from "react-router-dom";
import LabelForm from "../../components/LabelForm";

export default function Login(){
    return(
        <div className="loginContent">
            <Card className="loginCard">
                <img src="https://cdn-icons-png.flaticon.com/512/6426/6426965.png" className="logo" alt="Capacitaciones"/>
                <h1 className="loginTitle">Capacitaciones</h1>
                <Card.Content>
                    <Form>
                        <Form.Field>
                            <LabelForm title={"Correo Electrónico"} placeholder={"Escribe tu correo electrónico..."}>
                            </LabelForm>
                        </Form.Field>
                        <Form.Field>
                            <LabelForm 
                                title={"Contraseña"} 
                                placeholder={"Escribe tu contraseña..."}>
                            </LabelForm>
                        </Form.Field>
                        <Form.Field>
                            <label><Link  to="reset" className="link">¿Olvidaste la contraseña?</Link></label>
                        </Form.Field>
                        <Button positive icon type='submit'>Ingresar <Icon name="sign in"/></Button>
                    </Form>
                </Card.Content>
            </Card>
        </div>
    )
}