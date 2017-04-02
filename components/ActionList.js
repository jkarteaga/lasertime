import React, { PropTypes } from 'react';
import Action from './ActionCard';

function ActionList({ display, toggleDisplayMode, items, categories, groups }) {
    const item = items[0]
    return (
        <div>
            <button onClick={toggleDisplayMode}>Change mode</button>
            <div className="Actions">
                <Action
                    title={item.title}
                    description={item.description}
                    priceOld={item.price_old}
                    priceNew={item.price_new}
                    discount={60}
                    deadline={3}
                    deadlineColor="red"
                    image={item.image}
                />
            </div>
        </div>

    )
}

ActionList.propTypes = {
    display: PropTypes.bool.isRequired,
    toggleDisplayMode: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    categories: PropTypes.object.isRequired,
    groups: PropTypes.object.isRequired
}
ActionList.defaultProps = {}

export default ActionList
