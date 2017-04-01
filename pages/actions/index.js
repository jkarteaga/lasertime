import React, { Component, PropTypes } from "react";
import ActionList from "../../components/ActionList";

class Actions extends Component {

    // display mode: grid vs table
    state = {
        displayTable: false,
    }

    toggleDisplayMode = () => {
        this.setState({ displayTable: !this.state.displayTable })
    }

    render() {
        return (
            <ActionList display={this.state.display} toggleDisplayMode={this.toggleDisplayMode} />
        )
    }
}

Actions.propTypes = {}
Actions.defaultProps = {}

export default Actions
