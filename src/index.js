import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { combineReducers, createStore } from "redux"

import SearchPage from "./js/components/functional/SearchPage"

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

ReactDOM.render(
    <Provider store={createStore(searchPage)}>
        <SearchPage />
    </Provider>,
    document.getElementById("root")
)
