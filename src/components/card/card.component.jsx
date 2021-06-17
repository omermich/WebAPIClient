import React from "react";
import "./card.styles.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Form, Divider, Table } from "semantic-ui-react";
import { endPoint } from "../../App";
import { TrainButton } from "./train-button/train-button.component";
import { EditButton } from "./edit-button/edit-button.component";
import { DeleteButton } from "./delete-button/delete-button.component";

var heroId = 0;

export const Card = (props) => {
    const { name, ...pps } = props.hero;
    const entries = Object.entries(pps);
    heroId = pps.id;
    return (
        <div
            className="card-container"
            // style={{
            //     boxShadow: pps.secondaryColor + " 0px 1px 4px",
            // }}
        >
            <h2>{name}</h2>
            <Divider style={{ marginTop: "5px" }}></Divider>

            <Table
                singleline="true"
                style={{
                    backgroundColor: "rgba(255,255,255,0.5)",
                }}
            >
                <Table.Body>
                    {entries.map((prop) => (
                        <Table.Row key={prop[0]} style={{ fontSize: "11px" }}>
                            <Table.Cell style={{ fontWeight: "bold" }}>
                                {prop[0]}
                            </Table.Cell>
                            <Table.Cell>{prop[1]}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <div className="btn-line">
                <TrainButton id={heroId} color={pps.primaryColor} />
                <EditButton details={props.hero} id={heroId} color={pps.primaryColor} />
                <DeleteButton details={props.hero} color={pps.primaryColor} />
            </div>
        </div>
    );
};
