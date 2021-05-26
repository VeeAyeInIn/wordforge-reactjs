import "./index.css"

import PropTypes from "prop-types"

/**
 * Generates an in-line copyright text with basic information.
 *
 * @param {string|number} year - year(s) of registered copyright
 * @param {string} name - entity claiming copyright
 * @returns {JSX.Element} the generated copyright element
 * @constructor
 */
const Copyright = ({ year, name }) => {
    return (
        <span className={'copyright'}>© <cite>{year}, {name}</cite>. <em>All rights reserved</em></span>
    )
}

Copyright.propTypes = {
    year: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
    name: PropTypes.string.isRequired
}

export default Copyright