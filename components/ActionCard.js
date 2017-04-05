import React, { PropTypes } from "react";
import { prefixLink } from "gatsby-helpers";

function Action({ title, description, badgeColor, priceOld, priceNew, discount, deadline, deadlineColor, image }) {
    return (
        <div className="Action">

            <div className="Action__header">
                <div className="Action__logo">
                    <img src={prefixLink(`/actions/images/${image}`)} alt={title} />
                </div>
                <div className="Action__title">
                    <div>{title}</div>
                </div>

            </div>

            <div className="Action__body">
                <div className={`Action__badge Action__badge--${badgeColor}`}>{`-${discount}%`}</div>
                <div className="Action__description">
                    <div>{description}</div>
                </div>

                <div className="Action__price">
                    <div className="Action__price Action__price--old">{priceOld} руб.</div>
                    <div className="Action__price Action__price--new">{priceNew} руб.</div>
                </div>

                <div className={`Action__deadline Action__deadline--${deadlineColor}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 290 290">
                        <path
                            d="M135 57H114V142l67.5 40.6L192 165l-57-33.4V57zm-7-57C57 0 0 57.6 0 128s57 128 128 128c70.4 0 128-57.6 128-128S198.4 0 128 0zm0 227.6c-54.8 0-99.6-44.8-99.6-99.6S73.2 28.4 128 28.4s99.6 44.8 99.6 99.6c0 55.5-44.8 99.6-99.6 99.6z" />
                    </svg>
                    {deadline}
                </div>

                <div className="Action__share-icons">
                    <a className="Action__share-icon Action__share-icon--fb">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 50 512 512">
                            <path
                                d="M223.2 71.2c16-15.3 39-20.4 60.5-21 22.8-.3 45.6-.2 68.4-.2.2 24 .2 48.2 0 72.2h-44c-9.5-.6-19 6.5-20.8 15.7-.2 16 0 32 0 48.2H352c-1.6 23.4-4.5 46.5-8 69.6-19 .2-38 0-57 0-.3 68.8 0 137.5-.3 206-28.3.2-56.7 0-85 .2-.6-68.7 0-137.4-.3-206-14-.2-27.7 0-41.6-.2v-69.2c14-.2 27.7 0 41.6 0 .4-22.6-.5-45 .4-67.5 1.4-17.6 8-35.5 21.4-47.8z"
                            />
                        </svg>
                    </a>
                    <a className="Action__share-icon Action__share-icon--tw">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 598 548">
                            <path
                                d="M512 97.2c-18.8 8.4-39 14-60.3 16.6 21.7-13 38.3-33.6 46.2-58.2-21 12-43 20.8-67 25.5-19-20-47-33-77-33-58 0-105 47-105 105 0 9 1 17 2.2 24-86.5-4-164.2-46-216-110-9 16-14.3 34-14.3 53 0 36.6 18.6 68.8 47 87.6-17.4-.5-33.6-5.2-47.7-13v1.2c0 51 36.2 93.4 84.2 103-8.8 2.4-18 3.7-27.6 3.7-6.4 0-13-.6-19.4-2 13.4 42 52.2 72.3 98 73-35.8 28.3-81 45-130.3 45-8 0-16.5-.4-25-1.4 46.8 30 102 47 161 47 193.5 0 299-160 299-299v-13.6c20-14.6 38-33 52-54.2z"
                            />
                        </svg>
                    </a>
                    <a className="Action__share-icon Action__share-icon--vk">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 40 548 548">
                            <path
                                d="M545.5 400.3c-.7-1.4-1.3-2.6-2-3.6-9.4-17-27.6-38-54.4-63l-.5-.6-.3-.2-.3-.3h-.4c-12-11.6-20-19.4-23-23.4-6-7.5-7.3-15.2-4-23 2.2-6 10.8-18.4 25.6-37.5 7.8-10 14-18 18.6-24.2 33-43.8 47.2-71.8 42.8-84l-1.7-2.8c-1.3-1.7-4.2-3.3-9-4.7-4.7-1.4-10.8-1.7-18.2-.7l-82.3.6c-1.3-.4-3.2-.4-5.7.2l-3.7.8-1.3.8-1.2.8c-1 .6-2 1.6-3 3-1.2 1.4-2.2 3-3 5-9 23-19 44.5-30.5 64.2-7 11.8-13.5 22-19.4 30.7-6 8.8-11 15.2-15 19.3-4 4-7.5 7.3-10.7 9.8-3.3 2.6-5.8 3.6-7.5 3.3l-5-1.2c-2.5-1.6-4.7-4-6.3-7-1.6-2.8-2.7-6.5-3.3-11-.7-4.5-1-8.3-1-11.6-.2-3.2 0-7.8 0-13.7.3-6 .3-10 .3-12 0-7.2.2-15 .5-23.5l.7-20.2c.2-5 .3-10 .3-15.7s-.4-9.8-1-13c-.7-3-1.7-6-3-9-1.4-3-3.3-5.3-6-7-2.4-1.6-5.6-2.8-9.4-3.8-10-2.3-23-3.5-38.6-3.7-35.4-.4-58 2-68.2 6.8-4 2-7.6 5-11 8.6-3.3 4.2-3.8 6.5-1.3 7 11.4 1.6 19.5 5.7 24.3 12l1.7 3.6c1.3 2.4 2.6 6.8 4 13 1.3 6.4 2.2 13.3 2.5 21 1 13.8 1 25.7 0 35.6-1 10-1.8 17.6-2.7 23-.7 5.7-2 10-3.7 13.6-1.7 3.4-3 5.5-3.5 6.2-.5.8-1 1.3-1.4 1.5-2.4 1-5 1.4-7.7 1.4s-6-1.2-9.7-4c-3.8-2.6-7.7-6.2-11.8-11-4-4.6-8.7-11-14-19.4-5-8.4-10.4-18.3-16-29.7l-4.4-8.4c-3-5.3-6.8-13-11.7-23.3-5-10.2-9.3-20-13-29.5-1.6-4-4-7-7-9.2l-1.4-.8c-1-.8-2.4-1.6-4.5-2.5-2-.8-4.2-1.4-6.5-1.8l-78.2.6c-8 0-13.4 2-16.3 5.5l-1 1.7c-.7 1-1 2.5-1 4.6 0 2 .6 4.6 1.7 7.7C13 178.3 25.7 204.2 39 229c13.4 25 25 45 35 60.4 9.8 15.2 20 29.6 30.2 43 10.3 13.6 17 22.3 20.4 26 3.4 4 6 6.7 8 8.6l7 7c4.6 4.4 11.3 10 20 16.3 9 6.4 18.8 12.7 29.5 18.8 11 6.3 23.4 11.4 37.7 15.3 14.3 4 28.2 5.4 41.7 4.7h32.8c6.7-.6 11.7-2.7 15-6.3l1.3-1.4c.7-1.2 1.5-3 2-5.3.8-2.4 1-5 1-8 0-8 .5-15.4 2-22 1.4-6.5 3-11.5 4.8-14.8 1.8-3.4 4-6.2 6.2-8.4 2.2-2.3 4-3.7 4.8-4.2l2.3-1c4.6-1.5 10 0 16 4.4 6.3 4.5 12 10 17.6 16.6 5.4 6.6 12 14 19.5 22 7.6 8.3 14.3 14.4 20 18.4l5.7 3.4c3.8 2.3 8.8 4.4 15 6.3 6 2 11.3 2.4 15.8 1.4l73-1c7.4 0 13-1.2 17-3.6 4-2.4 6.3-5 7-7.8 1-3 1-6 .3-9.7-.7-3.8-1.4-6.3-2-7.7z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

Action.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    badgeColor: PropTypes.string.isRequired,
    priceOld: PropTypes.number.isRequired,
    priceNew: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    deadline: PropTypes.string.isRequired,
    deadlineColor: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

Action.defaultProps = {}

export default Action
