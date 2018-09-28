import React from "react"
import PropTypes from "prop-types"

const QueryType = ({ id, value, label, defaultChecked, handleSelection }) => (
    <div>
        <input
            id={id}
            className="form-check-input"
            type="radio"
            name="queryType"
            value={value}
            defaultChecked={defaultChecked}
            onChange={handleSelection} />
        <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
)

QueryType.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    defaultChecked: PropTypes.bool,
    handleSelection: PropTypes.func.isRequired
}

export default QueryType
