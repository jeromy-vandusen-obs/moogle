import React, { Component } from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import { combineReducers, createStore } from "redux"

import SearchPage from "./js/components/container/SearchPage"

const searchForm = (
    state = {
        query: "",
        type: "artist"
    },
    action
) => {
    switch (action.type) {
        case 'ENTER_QUERY':
            return { ...state, query: action.value }
        case 'SELECT_TYPE':
            return { ...state, type: action.value }
        default:
            return state
    }
}

const search = (
    state = {
        hasSearched: false,
        searchResults: []
    },
    action
) => {
    switch (action.type) {
        case 'DISPLAY_RESULTS':
            return { hasSearched: true, searchResults: action.value }
        default:
            return state
    }
}

const searchPage = combineReducers({
    searchForm,
    search
})

class Provider extends Component {
    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        return this.props.children
    }
}

Provider.childContextTypes = {
    store: PropTypes.object
}

ReactDOM.render(
    <Provider store={createStore(searchPage)}>
        <SearchPage />
    </Provider>,
    document.getElementById("root")
)
