import React, { PropTypes } from "react";
import Action from "./ActionCard";
import { calcDiscount, generateDeadline } from "../utils/helpers";

function ActionList({ displayGrid, toggleDisplayMode, items, categories, groups }) {
    // const item = items[0]

    let actionElements

    if (displayGrid) {
        actionElements = items.filter(() => true).map((item, id) => {
            const discount = calcDiscount(item.price_old, item.price_new)
            const badgeColor = discount >= 50 ? 'red' : discount >= 25 ? 'orange' : discount >= 15 ? 'green' : 'silver'
            return (
                <Action key={id}
                        title={item.title}
                        description={item.description}
                        badgeColor={badgeColor}
                        priceOld={item.price_old}
                        priceNew={item.price_new}
                        discount={discount}
                        deadline={generateDeadline(1)}
                        deadlineColor="red"
                        image={item.image}
                />
            )
        })
    } else {
        actionElements = items.filter(() => true).map((item, id) => {
            return (
                <tr key={id}>
                    <td>{item.title}</td>
                    <td>{item.price_new}</td>
                </tr>
            )
        })
    }


    return displayGrid ? (
            <div>
                <button onClick={toggleDisplayMode}>Change mode</button>

                <div className="Actions">
                    { actionElements }
                </div>
            </div>
        ) : (
            <div>
                <button onClick={toggleDisplayMode}>Change mode</button>
                <table>
                    <thead>
                    <td>Зона</td>
                    <td>Цена по акции</td>
                    </thead>
                    <tbody>
                    {actionElements}
                    </tbody>
                </table>
            </div>
        )

}

ActionList.propTypes = {
    displayGrid: PropTypes.bool.isRequired,
    toggleDisplayMode: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    categories: PropTypes.object.isRequired,
    groups: PropTypes.object.isRequired
}
ActionList.defaultProps = {}

export default ActionList
