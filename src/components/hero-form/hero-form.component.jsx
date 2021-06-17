import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "semantic-ui-react";
import { colors, abilities } from "../../hero-config.js";
import { endPoint } from "../../App.js";

const intSpecs = ["id", "guideId", "ability", "startingPower", "currentPower"];

export class HeroForm extends React.Component {
    constructor(pps) {
        super(pps);

        this.props = pps;
        const details = pps.details;
        console.log(details);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            id: details ? details.id : 0,
            startingDate: new Date().toISOString().slice(0, 10),
            name: details ? details.name : "",
            guideId: details ? details.guideId : null,
            ability: details ? details.ability : "",
            startingPower: details ? details.startingPower : null,
            currentPower: details ? details.currentPower : 0,
            primaryColor: details ? details.primaryColor : "",
            secondaryColor: details ? details.secondaryColor : "",
            dailyTrainCount: details ? details.dailyTrainCount : 0,
        };

        this.deatils = details;
    }

    handleChange = (e, { name, value }) => {
        this.setState({
            [name]: value,
        });
    };

    onSubmit = (e) => {
        // check if fields empty
        // convert relevant fields to Number instead of given String.
        var curState = {};
        for (const [name, value] of Object.entries(this.state)) {
            if (value === "") {
                alert("Please fill all inputs.");
                return;
            }

            if (intSpecs.includes(name)) {
                curState[name] = Number(value);
            } else {
                curState[name] = value;
            }
        }
        // Send request to server.
        e.preventDefault();

        fetch(endPoint + this.props.urlSuffix, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            method: this.props.method,
            body: JSON.stringify(curState),
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

    render() {
        return (
            <Form method={this.props.method} onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Input
                        fluid
                        name="name"
                        label="Name"
                        placeholder="Name"
                        width="10"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        name="guideId"
                        width="6"
                        label="Guide ID"
                        placeholder="Guide ID"
                        value={this.state.guideId}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Select
                        fluid
                        name="ability"
                        label="Ability"
                        options={abilities}
                        placeholder="Select"
                        value={this.state.ability}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        name="startingPower"
                        label="Starting Power"
                        placeholder="Starting Power"
                        value={this.state.startingPower}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Select
                        fluid
                        id="primaryColor"
                        name="primaryColor"
                        label="Primary Color"
                        options={colors}
                        placeholder="Select"
                        value={this.state.primaryColor}
                        onChange={this.handleChange}
                    />
                    <Form.Select
                        fluid
                        name="secondaryColor"
                        label="Secondary Color"
                        options={colors}
                        placeholder="Select"
                        value={this.state.secondaryColor}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Button>Submit</Button>
                <Button type="button" basic onClick={this.props.onCancel}>
                    Cancel
                </Button>
            </Form>
        );
    }
}
