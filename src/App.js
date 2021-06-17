import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { CardList } from "./components/card-list/card-list.component.jsx";
import { MainBar } from "./components/main-bar/main-bar.component.jsx";

export const endPoint = "http://localhost:5000/hero";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            heroes: null,
            searchField: "",
        };
    }

    componentDidMount() {
        fetch(endPoint)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then((data) => this.setState({ heroes: data }))
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    }

    handleChange = (e) => this.setState({ searchField: e.target.value });

    render() {
        // in case data hasn't loaded before first render.
        if (this.state.heroes == null) {
            return <div />;
        }

        const { heroes, searchField } = this.state;
        const filteredHeroes = heroes.filter((hero) =>
            hero.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <div className="cont">
                    <MainBar />
                    {/* <SearchBox
                        placeholder="Search Heroes"
                        handleChange={this.handleChange}
                    ></SearchBox> */}
                    <CardList heroes={filteredHeroes}></CardList>
                </div>
            </div>
        );
    }
}

export default App;
