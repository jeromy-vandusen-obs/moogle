import React from "react"
import PropTypes from "prop-types"

const SubmitButton = ({ id, icon, buttonClassName }) => (
    <button id={id} className={buttonClassName} type="submit">
        <i className={icon}></i>
    </button>
)

SubmitButton.propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    buttonClassName: PropTypes.string.isRequired
}

export default SubmitButton
