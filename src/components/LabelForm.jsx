import React from "react";
import { Item } from "semantic-ui-react";
export default function ResetPassword({title, placeholder}){
    return(
        <Item>
            <Item.Content>
                <Item.Header as='a' className="">
                    <label className="labelForm">{title}</label>
                    <input placeholder={placeholder}/>
                </Item.Header>
            </Item.Content>
        </Item>
    )
}