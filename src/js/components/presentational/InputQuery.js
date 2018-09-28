import { connect } from "react-redux"

import Input from "./Input"

const mapStateToProps = state => ({
    id: "query",
    type: "text",
    value: state.searchForm.query,
    autoFocus: "autoFocus"
})

const mapDispatchToProps = dispatch => ({
    handleChange: event => {
        dispatch({
            type: 'ENTER_QUERY',
            value: event.target.value
        })
    }
})

const InputQuery = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input)

export default InputQuery
