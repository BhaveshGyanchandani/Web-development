import React, { Component } from "react";
import {BrowserRouter as Router ,redirect,Switch, Link ,Route} from 'react-router-dom'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' > <p>this is the home page</p> </Route>
                    

                </Switch>
            </Router>
        )
    }

}