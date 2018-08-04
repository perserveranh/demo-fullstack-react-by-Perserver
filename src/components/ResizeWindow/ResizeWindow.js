import React, { Component } from 'react';
import '../../App.css';

class ResizeWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    handleResizedScreen() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResizedScreen.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResizedScreen.bind(this));
    }

    render() {
        return (
            <div className="centered">
                <h1>{this.state.width} x {this.state.height}</h1>
            </div>
        );
    }

}

export default ResizeWindow;