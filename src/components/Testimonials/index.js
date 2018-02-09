import React from 'react'
import PropTypes from 'prop-types'
import QuotesIcon from './icon-quotes.svg'

const SWITCH_INTERVAL = 10000

class Testimonials extends React.Component {
    state = {
        testimonial: this.props.testimonials[0],
        timer: null,
    }

    componentDidMount() {
        this.setState({
            timer: setInterval(this.switchTestimonial, SWITCH_INTERVAL),
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    render() {
        const { testimonial } = this.state

        return (
            <div className="Testimonials">
                <div className="Testimonials__container">
                    <div className="Testimonials__title">Отзывы</div>
                    <div className="Testimonials__header">
                        Что Говорят Наши Клиенты
                    </div>
                    <img className="Testimonials__icon" src={QuotesIcon} />
                    <div
                        key={this.state.testimonial.name}
                        className="Testimonials__body"
                    >
                        <div className="Testimonials__text">
                            {testimonial.text}
                        </div>
                        <div className="Testimonials__name">
                            <a
                                className="Testimonials__link"
                                href={testimonial.link}
                                target="_blank"
                            >
                                {testimonial.name}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    switchTestimonial = () => {
        const ts = this.props.testimonials
        const idx = ts.indexOf(this.state.testimonial)

        if (idx === ts.length - 1) {
            this.setState({
                testimonial: ts[0],
            })
        } else {
            this.setState({ testimonial: ts[idx + 1] })
        }
    }
}

Testimonials.propTypes = {
    testimonials: PropTypes.array.isRequired,
}

Testimonials.defaultProps = {}

export default Testimonials
