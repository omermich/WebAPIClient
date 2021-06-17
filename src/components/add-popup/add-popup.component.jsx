import React from "react";
import ReactCircleModal from "react-circle-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./add-popup.styles.css";
import { Button, Form } from "semantic-ui-react";
import { HeroForm } from "../hero-form/hero-form.component";
import {endPoint} from "../../App";

export const AddPopup = () => {
    return (
        <ReactCircleModal
            className="modal-cont"
            backgroundColor="lightsteelblue"
            toogleComponent={(onClick) => (
                <Button className="add-btn" onClick={onClick}>
                    <h3>+</h3>
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
                    <h2 className="title">Add New Hero</h2>
                    <HeroForm
                        urlSuffix={""}
                        method="post"
                        onCancel={onClick}
                    />
                </div>
            )}
        </ReactCircleModal>
    );
};
