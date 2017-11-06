import React from 'react'
import PropTypes from 'prop-types'

class CollapsiblePanel extends React.Component {
    state = {
        isOpen: false,
    }

    static propTypes = {}

    render() {
        const { title, children } = this.props
        const openPanelClass = this.state.isOpen
            ? 'CollapsiblePanel--opened'
            : ''
        return (
            <div className={`CollapsiblePanel ${openPanelClass}`}>
                <h2
                    onClick={this.handleOpen}
                    className="CollapsiblePanel__title"
                >
                    {title}
                </h2>
                <div className={`CollapsiblePanel__body`}>{children}</div>
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
