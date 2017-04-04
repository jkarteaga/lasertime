import React, { PropTypes } from 'react'
import ActionCard from './ActionCard'
import ActionGrid from './ActionGrid'
import ActionTable from './ActionTable'
import { calcDiscount, generateDeadlineString, filterActionsByCategory, filterCurrentActionsByGroup } from '../utils/helpers'

function ActionList({ displayGrid, toggleDisplayMode, items, categories, groups }) {
    // const item = items[0]

    let actionCards
    let actionTables

    if (displayGrid) {
        actionCards = filterCurrentActionsByGroup(items, groups).map((item, id) => {
            const discount = calcDiscount(item.price_old, item.price_new)
            const badgeColor = discount >= 50 ? 'gold' : discount >= 25 ? 'silver' : 'gray'
            const deadline = item.deadline
            const deadlineString = generateDeadlineString(deadline)
            const deadlineColor = deadline <= 2 ? 'red' : deadline <= 3 ? 'orange' : 'black'
            return (
                <ActionCard
                    key={id}
                    title={item.title}
                    description={item.description}
                    badgeColor={badgeColor}
                    priceOld={item.price_old}
                    priceNew={item.price_new}
                    discount={discount}
                    deadline={deadlineString}
                    deadlineColor={deadlineColor}
                    image={item.image}
                />
            )
        })
    } else {
        actionTables = categories.map((catTitle, catId) => {
            // Get all actions w/ current category
            const currentActions = filterCurrentActionsByGroup(items, groups)
            const categoryElements = filterActionsByCategory(currentActions, catId).map((item, id) => {
                return (
                    <tr key={id}>
                        <td>{`${item.title} (${item.description})`}</td>
                        <td className="ActionTable__price ActionTable__price--old">{item.price_old}</td>
                        <td className="ActionTable__price">{item.price_new}</td>
                    </tr>
                )
            })

            return categoryElements.length !== 0 ?
                <ActionTable key={catId} title={catTitle} elements={categoryElements} />
                : null
        })
    }


    return (
        <div>
            <h1>Акции нашей клиники</h1>
            <button onClick={toggleDisplayMode}>Change mode</button>
            {displayGrid ? <ActionGrid elements={actionCards} /> : actionTables}
        </div>
    )
}

ActionList.propTypes = {
    displayGrid: PropTypes.bool.isRequired,
    toggleDisplayMode: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    groups: PropTypes.object.isRequired
}
ActionList.defaultProps = {}

export default ActionList
