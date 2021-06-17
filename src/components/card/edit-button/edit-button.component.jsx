import React from "react";
import "semantic-ui-css/semantic.min.css";
import ReactCircleModal from "react-circle-modal";
import { Button, Form } from "semantic-ui-react";
import { endPoint } from "../../../App";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeroForm } from "../../hero-form/hero-form.component.jsx";

export const EditButton = (props) => {
    return (
        <div style={{ display: "inline-block" }}>
            <ReactCircleModal
                className="modal-cont"
                backgroundColor="lightsteelblue"
                toogleComponent={(onClick) => (
                    <Button onClick={onClick}
                        className="delete-btn"
                        inverted
                        color={props.color}
                    >
                        <FontAwesomeIcon icon={faPen} />
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
                        <h2 className="title">Edit Hero</h2>
                        <HeroForm
                            details={props.details}
                            method="put"
                            urlSuffix={"/"+props.details.id}
                            onCancel={onClick}
                        />
                    </div>
                )}
            </ReactCircleModal>
        </div>
    );
};
