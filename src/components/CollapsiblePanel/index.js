import React from 'react'
import PropTypes from 'prop-types'

class CollapsiblePanel extends React.Component {
    state = {
        isOpen: false,
    }

    static propTypes = {}

    render() {
        const { title, children } = this.props
        return (
            <div className="CollapsiblePanel">
                <div
                    onClick={this.handleOpen}
                    className="CollapsiblePanel__title"
                >
                    {title}
                </div>
                <div className="CollapsiblePanel__body">{children}</div>
            </div>
        )
    }

    handleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
}

CollapsiblePanel.propTypes = {
    title: PropTypes.string.isRequired,
}
//CollapsiblePanel.defaultProps = {}

export default CollapsiblePanel
