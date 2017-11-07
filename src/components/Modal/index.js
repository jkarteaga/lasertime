import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#___gatsby')

class Modal extends React.Component {
    state = {
        isOpen: false,
    }

    handleOpenModal = () => {
        this.setState({ isOpen: true })
    }

    handleCloseModal = () => {
        this.setState({ isOpen: false })
    }

    render() {
        const { children, text } = this.props
        return (
            <div>
                <span onClick={this.handleOpenModal}>{text}</span>
                <ReactModal
                    isOpen={this.state.isOpen}
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    portalClassName={'ReactModalPortal'}
                >
                    <div className="">
                        <button onClick={this.handleCloseModal}>close</button>
                        {children}
                    </div>
                </ReactModal>
            </div>
        )
    }
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
}

export default Modal
