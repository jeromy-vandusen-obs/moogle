import React from "react"
import ReactDOM from "react-dom"
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
const store = createStore(searchPage)

ReactDOM.render(
    <SearchPage store={store} />,
    document.getElementById("root")
)
