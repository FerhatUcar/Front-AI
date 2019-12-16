import React, {Fragment}  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ReadFront from "./components/pages/ReadFront";
import SeeFront from "./components/pages/SeeFront";
import ClassifyFront from "./components/pages/ClassifyFront";

// Style
import './assets/scss/App.scss';


const App = () => {
    return (
        <Router>
            <Fragment>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/read" component={ReadFront} />
                        <Route exact path="/see" component={SeeFront} />
                        <Route exact path="/classify" component={ClassifyFront} />
                    </Switch>
                </div>
            </Fragment>
        </Router>

    );
};

export default App;
