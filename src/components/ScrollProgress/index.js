import React from 'react'
import PropTypes from 'prop-types'

class ScrollProgress extends React.Component {
    state = {
        to: null,
        browserHeight: null,
        pageHeight: null,
        totalScrollableArea: null,
        currentPage: null,
    }

    componentDidMount() {
        window.addEventListener('scroll', this._onScroll)
        setTimeout(this._initialize, 200)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._onScroll)
    }

    _initialize = () => {
        const pageHeight = document.body.scrollHeight
        const totalScrollableArea = pageHeight - window.innerHeight

        this.setState({
            browserHeight: window.innerHeight,
            pageHeight: pageHeight,
            totalScrollableArea: totalScrollableArea,
            currentPage: window.location.pathname,
        })
    }

    _onScroll = () => {
        if (this.state.to) {
            return
        }

        // If 'to' timerId is not set
        const id = setTimeout(() => {
            if (this.state.currentPage !== window.location.pathname) {
                this._initialize()
            }

            const percentage = this.calcProgress()
            this.refs.ScrollProgressValue.style.width = percentage + '%'

            // clear timer
            this.setState({
                to: null,
            })
        }, 100)

        this.setState({
            to: id,
        })
    }

    calcProgress = () => {
        let scrolled = window.scrollY

        return (scrolled / this.state.totalScrollableArea).toFixed(2) * 100
    }

    render() {
        return (
            <div className="ScrollProgress">
                <div
                    ref="ScrollProgressValue"
                    className="ScrollProgress__value"
                    style={{ backgroundColor: this.props.backgroundColor }}
                />
            </div>
        )
    }
}

ScrollProgress.propTypes = {
    backgroundColor: PropTypes.string,
    route: PropTypes.object,
}

ScrollProgress.defaultProps = {
    backgroundColor: '#32a5f0',
}

export default ScrollProgress
