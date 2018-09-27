import React from "react"
import PropTypes from "prop-types"

const Input = ({ id, type, value, autoFocus, handleChange }) => (
    <input
        id={id}
        type={type}
        className="form-control"
        value={value}
        autoFocus={autoFocus}
        onChange={handleChange} />
)

Input.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    autoFocus: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default Input
