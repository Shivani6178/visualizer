import React, { Component } from 'react';
import "./style.css";
import Typewriter from "typewriter-effect";
import logoo from "./images/logoo.png";

class Greet extends Component {
    render() {
        return (
            <div className="greet">
                <h1 className="display-3 heading">
                    Visualizer
                    {/* <img src={logoo} alt="Logo" style={{ width: '300px', height: '200px' }} /> */}
                </h1>
                {/* <hr className="dropdown-divider" /> */}
                <h5 className="display-5">
                    Experience <Typewriter
                    options={{
                        strings: ['Graph Algorithms', 'Sorting Algorithms',"8 Queen"],
                        autoStart: true,
                        loop: true,
                    }}
                /> through detailed visualizations
                </h5>
            </div>
        );
    }
}

export default Greet;
