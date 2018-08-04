import React, { Component } from 'react';

var styles = {
    box_container: {
        padding: '20px'
    },
    box: {
        width: '50px',
        height: '50px',
        float: 'left',
        marginLeft: '10px'
    },
    default_box: {
        backgroundColor: 'gray',
    },
    selected_box: {
        backgroundColor: 'orange'
    }
}

class SelectBoxes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                false,
                false,
                false
            ]
        }
    }

    selectBox(index, event) {
        var box_states = this.state.boxes;
        if (!event.ctrlKey) {
            box_states = [
                false,
                false,
                false
            ];
        }

        var is_selected = box_states[index];
        box_states[index] = !is_selected;
        this.setState({
            boxes: box_states
        });
    }

    renderBoxes() {
        return this.state.boxes.map((is_selected, index) => {
            let box_type = 'default_box';
            if (is_selected) {
                box_type = 'selected_box';
            }
            return (
                <div
                    key={index}
                    style={{ ...styles.box, ...styles[box_type] }}
                    onClick={this.selectBox.bind(this, index)}>
                </div>
            );
        });
    }

    render() {
        return (
            <div style={styles.box_container}>
                {this.renderBoxes.call(this)}
            </div>
        );
    }
}

export default SelectBoxes;