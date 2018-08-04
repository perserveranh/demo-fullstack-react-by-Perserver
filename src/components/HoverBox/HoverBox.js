import React, { Component } from 'react';

var styles = {
    box: {
        width: '100px',
        height: '100px'
    },
    in: {
        backgroundColor: 'red'
    },
    out: {
        backgroundColor: 'green'
    }
};

class HoverBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            box_state: 'out'
        };
    }

    changeColor() {
        this.setState({
            box_state: 'in'
        });
    }

    resetColor() {
        this.setState({
            box_state: 'out'
        });
    }

    render() {
        return (
            <div
                style={{ ...styles.box, ...styles[this.state.box_state] }}
                onMouseEnter={this.changeColor.bind(this)}
                onMouseLeave={this.resetColor.bind(this)}>
            </div>
        );
    }
}

export default HoverBox;