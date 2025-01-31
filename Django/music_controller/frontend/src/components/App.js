import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HomePage />
            </div>
        );
    }
}

export default App;
// If you're rendering the component to the DOM
//rendering this App component in app class of div
render(<App name="jacob" />, document.getElementById("app"));
