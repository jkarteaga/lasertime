import React, { Component, PropTypes } from "react";
import ActionList from '../../components/ActionList';
import { actions, categories, groups } from './fixtures'

class Actions extends Component {

    // display mode: grid vs table
    state = {
        displayGrid: true,
    }

    toggleDisplayMode = () => {
        this.setState({ displayGrid: !this.state.displayGrid })
    }

    render() {
        return (
            <ActionList
                display={this.state.displayGrid}
                toggleDisplayMode={this.toggleDisplayMode}
                items={actions}
                categories={categories}
                groups={groups}
            />
        )
    }
}

Actions.propTypes = {}
Actions.defaultProps = {}

export default Actions
