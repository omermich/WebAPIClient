import React from "react";
import "semantic-ui-css/semantic.min.css";
import ReactCircleModal from "react-circle-modal";
import { Button, Form } from "semantic-ui-react";
import { endPoint } from "../../../App";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// delete request.
const onSubmit = (id) => (e) => {
    e.preventDefault();

    fetch(endPoint + "/" + id, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        method: "delete",
    })
        .then((res) => {
            if (res.ok) {
                window.location.reload();
            } else {
                throw new Error(res.statusText);
            }
        })
        .catch((err) => {
            console.log(err);
            alert("Error: See Logs for more information.");
        });
};

export const DeleteButton = (props) => {
    return (
        <ReactCircleModal
            className="modal-cont"
            backgroundColor="lightsteelblue"
            toogleComponent={(onClick) => (
                <Button
                    onClick={onClick}
                    className="delete-btn"
                    inverted
                    color={props.color}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            )}
        >
            {(onClick) => (
                <div
                    style={{
                        backgroundColor: "#fff",
                        padding: "2em",
                        margin: "3em 20%",
                    }}
                >
                    <h3 className="title">
                        Are you sure you want to delete {props.details.name}?
                    </h3>
                    <Form method="delete" onSubmit={onSubmit(props.details.id)}>
                        <Button>Yes</Button>
                        <Button type="button" onClick={onClick}>
                            No
                        </Button>
                    </Form>
                </div>
            )}
        </ReactCircleModal>
    );
};
