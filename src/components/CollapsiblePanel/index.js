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
            ? 'CollapsiblePanel__body--opened'
            : ''
        return (
            <div className={`CollapsiblePanel`}>
                <h2
                    onClick={this.handleOpen}
                    className="CollapsiblePanel__title"
                >
                    {title}
                </h2>
                <div className={`CollapsiblePanel__body ${openPanelClass}`}>
                    {children}
                </div>
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
