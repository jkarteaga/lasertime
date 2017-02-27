import React from 'react';


// Constants for calculating the scrollable height of the page
const browserHeight = window.innerHeight;
let pageHeight;
let totalScrollableArea;



class ScrollProgress extends React.Component {
    constructor(props) {
        super(props);
        this.to = null;
        this._onScroll = this._onScroll.bind(this);
    }

    componentWillMount() {
        window.addEventListener('scroll', this._onScroll);
        setTimeout(() => {
            pageHeight = document.body.scrollHeight;
            totalScrollableArea = pageHeight - browserHeight;
        }, 200)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._onScroll);
    }

    render() {
        return (
            <div className="ScrollProgress">
                <div
                    ref="ScrollProgressValue"
                    className="ScrollProgress__value"
                    style={ { backgroundColor: this.props.backgroundColor } }>
                </div>
            </div>
        );
    }

    _onScroll() {

        if (this.to) {
            clearTimeout(this.to);
        }

        this.to = setTimeout(() => {
            console.log(`browserHeight: ${browserHeight}
pageHeight: ${pageHeight}
scrollableArea: ${totalScrollableArea}
scrolled: ${document.body.scrollTop}`)

            var scrolled = document.body.scrollTop;
            var percentage = (scrolled / totalScrollableArea).toFixed(2) * 100;
            this.refs.ScrollProgressValue.style.width = percentage + '%';
        }, 100);
    }
};


ScrollProgress.propTypes = {
    backgroundColor: React.PropTypes.string
};


ScrollProgress.defaultProps = {
    backgroundColor: '#32a5f0'
};


export default ScrollProgress;
