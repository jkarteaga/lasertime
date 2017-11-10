import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

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
        const { children, text, title } = this.props
        return (
            <div>
                <span
                    className={'Modal__trigger'}
                    onClick={this.handleOpenModal}
                >
                    {text}
                </span>
                <ReactModal
                    isOpen={this.state.isOpen}
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    closeTimeoutMS={300}
                    className={{
                        base: 'Modal',
                        afterOpen: 'Modal--after-open',
                        beforeClose: 'Modal--before-close',
                    }}
                    overlayClassName={{
                        base: 'Modal__overlay',
                        afterOpen: 'Modal__overlay--after-open',
                        beforeClose: 'Modal__overlay--before-close',
                    }}
                >
                    <div
                        className={'Modal__close-icon'}
                        onClick={this.handleCloseModal}
                    />
                    <div className="Modal__title">
                        <div className="Modal__title-wrapper">{title}</div>
                    </div>

                    <div className="Modal__body">{children}</div>
                </ReactModal>
            </div>
        )
    }
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Modal
