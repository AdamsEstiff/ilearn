import React from "react";
import { Card, Form, Button, Icon } from 'semantic-ui-react';
import {Link } from "react-router-dom";
import LabelForm from "../../../components/LabelForm";

export default function ResetPassword(){
    return(
        <div className="loginContent">
            <Card className="loginCard">
                <img src="https://cdn-icons-png.flaticon.com/512/6426/6426965.png" className="logo" alt="Capacitaciones"/>
                <h1 className="loginTitle">Recuperar la contraseña</h1>
                <Card.Content>
                    <Form>
                        <Form.Field>
                            <LabelForm title={"Correo Electrónico"} placeholder={"Escribe tu correo electrónico..."}>
                            </LabelForm>
                        </Form.Field>
                        <Link to="/">
                            <Button floated='left' icon type='submit' color='orange'><Icon name="arrow left"/> Atras </Button>
                        </Link>
                        <Button floated='right' positive icon type='submit'>Enviar contraseña <Icon name="arrow right"/></Button>
                    </Form>
                </Card.Content>
            </Card>
        </div>
    )
}