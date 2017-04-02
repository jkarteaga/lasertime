import React, { PropTypes } from "react";

function Action({ title, description, priceOld, priceNew, discount, deadline, deadlineColor, image }) {
    return (
        <div className="Action">

            <div className="Action__header">
                <div className="Action__logo">
                    <img src={`./images/${image}`} alt={title} />
                </div>
                <div className="Action__title">{title}</div>

            </div>

            <div className="Action__body">
                <div className="Action__badge">{`-${discount}%`}</div>
                <div className="Action__description">{description}</div>

                <div className="Action__price">
                    <div className="Action__price Action__price--old">{priceOld} руб.</div>
                    <div className="Action__price Action__price--new">{priceNew} руб.</div>
                </div>

                <div className={`Action__deadline ${deadlineColor}`}>{deadline}</div>

                <div className="Action__share-icons">
                    <div className="Action__share-icon Action__share-icon--fb">fb</div>
                    <div className="Action__share-icon Action__share-icon--tw">tw</div>
                    <div className="Action__share-icon Action__share-icon--vk">vk</div>
                </div>
            </div>
        </div>
    )
}

Action.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priceOld: PropTypes.number.isRequired,
    priceNew: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    deadline: PropTypes.string.isRequired,
    deadlineColor: PropTypes.string,
    image: PropTypes.string.isRequired
}

Action.defaultProps = {
    deadlineColor: ''
}

export default Action
