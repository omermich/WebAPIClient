import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Form } from "semantic-ui-react";
import { endPoint } from "../../../App";

const onSubmit = id => e => {
    e.preventDefault();

    fetch(endPoint + '/' + id, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        method: "PATCH",
    }).then((res) => {
        if (res.ok) {
            window.location.reload();
        } else {
            res.json().then((data) => alert(data));
        }
    });
}

export const TrainButton = (props) => {
    return (
        <div style={{ display: "inline-block" }}>
            <Form onSubmit={onSubmit(props.id)} method="PATCH">
                <Button className="train-btn" inverted color={props.color}>
                    {" "}
                    TRAIN{" "}
                </Button>
            </Form>
        </div>
    );
};
