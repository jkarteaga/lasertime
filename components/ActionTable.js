import React, { PropTypes } from 'react'

function ActionTable({ title, elements }) {
    return (
        <div>
            <h2 className="Actions__heading">{title}</h2>

            <table className="ActionTable">
                <thead>
                <tr>
                    <th>Зона</th>
                    <th>Цена, руб.</th>
                    <th>Цена по акции, руб.</th>
                </tr>
                </thead>
                <tbody>
                {elements}
                </tbody>
            </table>

        </div>
    )
}

ActionTable.propTypes = {
    title: PropTypes.string.isRequired,
    elements: PropTypes.array.isRequired
}
ActionTable.defaultProps = {}

export default ActionTable
