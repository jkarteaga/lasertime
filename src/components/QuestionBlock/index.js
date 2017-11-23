import React from 'react'
import PropTypes from 'prop-types'

function QuestionBlock({ question, children }) {
    return (
        <div className="QuestionBlock">
            <div className="QuestionBlock__question">{question}</div>
            <div className="QuestionBlock__answer">{children}</div>
        </div>
    )
}

QuestionBlock.propTypes = {
    question: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

QuestionBlock.defaultProps = {}

export default QuestionBlock
