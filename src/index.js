import React from "react"
import ReactDOM from "react-dom"
import { combineReducers, createStore } from "redux"

import SearchForm from "./js/components/container/SearchForm"

const query = (
    state = "",
    action
) => {
    switch (action.type) {
        case 'ENTER_QUERY':
            return action.value
        default:
            return state
    }
}

const type = (
    state = "artist",
    action
) => {
    switch (action.type) {
        case 'SELECT_TYPE':
            return action.value
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
    query,
    type,
    search
})
const store = createStore(searchPage)

const render = () => {
    ReactDOM.render(
        <SearchForm
            state={store.getState()}
            onQueryEntered={value =>
                store.dispatch({
                    type: 'ENTER_QUERY',
                    value: value
                })
            }
            onTypeSelected={type =>
                store.dispatch({
                    type: 'SELECT_TYPE',
                    value: type
                })
            }
            onSearchCompleted={searchResults =>
                store.dispatch({
                    type: 'DISPLAY_RESULTS',
                    value: searchResults
                })
            }/>,
        document.getElementById("root")
    )
}

store.subscribe(render)
render()
