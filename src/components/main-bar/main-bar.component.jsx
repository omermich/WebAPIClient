import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { AddPopup } from "../add-popup/add-popup.component.jsx";

export const MainBar = () => (
    <Navbar
        bg="light"
        variant="light"
        expand="lg"
        style={{ marginBottom: "3%" }}
    >
        <h1>Heroes</h1>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
                <AddPopup />
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
