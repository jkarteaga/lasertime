import React, { PropTypes } from 'react'
import ActionCard from './ActionCard'
import ActionGrid from './ActionGrid'
import ActionTable from './ActionTable'

class ActionList extends React.Component {

    state = {
        displayGrid: true,
        sortType: 'default', /* default, discount, price */
        sortReverse: false
    }


    handleChangeDisplayMode = () => {
        this.setState({ displayGrid: !this.state.displayGrid })
    }


    handleChangeSortType = (type) => {
        if (this.state.sortType === type) {
            this.setState({
                sortReverse: !this.state.sortReverse
            })
        } else {
            this.setState({
                sortType: type,
                sortReverse: false
            })
        }
    }


    // calculateDiscount returns number rounded to 5 like: 35 or 50
    calculateDiscount = (priceOld, priceNew) => {
        const discount = 100 - ((priceNew / priceOld) * 100)
        return discount - (discount % 5)
    }


    filterActionsByCategory = (array, catId) => array.filter(item => item.category === catId)


    // filterActionsByGroup returns array of action elements w/ added deadline field
    filterCurrentActionsByGroup = (items, groups) => {
        const date = new Date().getDate()
        const day = new Date().getDay()
        const actions = []

        items.forEach((item) => {
            const group = groups[item.group]
            let slice

            if (typeof group !== 'string') {
                for (let i = 0; i < group.length; i++) {
                    if (group[i].includes(date)) {
                        slice = group[i]
                        const deadline = slice[slice.length - 1] - (date - 1)
                        actions.push({ ...item, deadline })
                        break
                    }
                }
            } else if (group === 'weekdays' && day !== 0 && day !== 6) {
                const deadline = 6 - day
                actions.push({ ...item, deadline })
            } else if (group === 'weekend' && (day === 0 || day === 6)) {
                actions.push({ ...item, deadline: day === 0 ? 1 : 2 })
            } else if (group === 'alla' && [2, 4, 5, 6].includes(day)) {
                const deadline = day === 2 ? 1 : 7 - day
                actions.push({ ...item, deadline })
            }
        })

        return actions
    }


    generateDeadlineString = (days) => {
        switch (days) {
        case 1:
            return '1 день'
        case 2:
        case 3:
        case 4:
            return `${days} дня`
        default:
            return `${days} дней`
        }
    }


    sortActions = (actions, sortType, reverse) => {
        if (sortType === 'discount') {
            return this.sortActionsByDiscount(actions, reverse)
        } else if (sortType === 'price') {
            return this.sortActionsByPrice(actions, reverse)
        }
        return actions
    }


    // By default sorts from High => Low
    sortActionsByDiscount = (items, reverse) => {
        items.sort((a1, a2) => {
            const discount1 = a1.price_new / a1.price_old
            const discount2 = a2.price_new / a2.price_old
            return (!reverse ? 1 : -1) * (discount1 - discount2)
        })

        return items
    }

    // By default sorts from High => Low
    sortActionsByPrice = (items, reverse) => {
        items.sort((a1, a2) => {
            return (!reverse ? 1 : -1) * (a1.price_new - a2.price_new)
        })

        return items
    }


    render() {
        const { items, categories, groups } = this.props
        const { displayGrid, sortType, sortReverse } = this.state
        let actionCards
        let actionTables

        if (displayGrid) {
            const filteredActions = this.filterCurrentActionsByGroup(items, groups)
            const sortedActions = this.sortActions(filteredActions, sortType, sortReverse)

            actionCards = sortedActions.map((item) => {
                const discount = this.calculateDiscount(item.price_old, item.price_new)
                const deadline = item.deadline
                return (
                    <ActionCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        badgeColor={discount >= 35 ? 'gold' : discount >= 25 ? 'silver' : 'gray'}
                        priceOld={item.price_old}
                        priceNew={item.price_new}
                        discount={discount}
                        deadline={this.generateDeadlineString(item.deadline)}
                        deadlineColor={deadline <= 1 ? 'red' : deadline <= 2 ? 'orange' : 'black'}
                        image={item.image}
                    />
                )
            })
        } else {
            actionTables = categories.map((categoryTitle, categoryId) => {
                // Get all actions w/ current category
                const currentActions = this.filterCurrentActionsByGroup(items, groups)
                const filteredActions = this.filterActionsByCategory(currentActions, categoryId)
                const sortedActions = this.sortActions(filteredActions, sortType, sortReverse)


                const categoryElements = sortedActions.map((item) => {


                    const descriptionElement = Array.isArray(item.description) ?
                        item.description.join(' ') : item.description
                    return (
                        <tr key={item.id}>
                            <td>{`${item.title} (${descriptionElement})`}</td>
                            <td className="ActionTable__price ActionTable__price--old">{item.price_old}</td>
                            <td className="ActionTable__price">{item.price_new}</td>
                        </tr>
                    )
                })

                return categoryElements.length !== 0 ?
                    <ActionTable
                        key={categoryId}
                        title={categoryTitle}
                        elements={categoryElements}
                    />
                    : null
            })
        }


        return (
            <div>
                <h1>Акции нашей клиники</h1>
                <button onClick={this.handleChangeDisplayMode}>Change mode</button>
                <button onClick={() => this.handleChangeSortType('default')}>Default</button>
                <button onClick={() => this.handleChangeSortType('discount')}>Discount</button>
                <button onClick={() => this.handleChangeSortType('price')}>Price</button>
                {displayGrid ? <ActionGrid elements={actionCards} /> : actionTables}
            </div>
        )
    }
}

ActionList.propTypes = {
    items: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    groups: PropTypes.object.isRequired
}
ActionList.defaultProps = {}

export default ActionList
