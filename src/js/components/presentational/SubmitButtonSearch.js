import { connect } from "react-redux"

import SubmitButton from "./SubmitButton"

const mapStateToProps = state => ({
    id: "search-button",
    icon: "fas fa-search",
    buttonClassName: "btn btn-primary"
})

const SubmitButtonSearch = connect(mapStateToProps)(SubmitButton)

export default SubmitButtonSearch
