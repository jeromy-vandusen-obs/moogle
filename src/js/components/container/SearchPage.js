import React, { Component } from "react"
import axios from "axios"

import Logo from "../presentational/Logo"
import Input from "../presentational/Input"
import SubmitButton from "../presentational/SubmitButton"
import SearchResults from "../presentational/SearchResults"
import QueryTypes from "../presentational/QueryTypes"

class SearchPage extends Component {
    componentDidMount() {
        const { store } = this.props
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate()
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    performSearch(query, type) {
        axios.get(
            `https://api.discogs.com/database/search?${type}=${query}&token=KGlofzPxbKEohvnzsGlWNEHrJviqGZtrnuhYJgkX`
        ).then(response => {
            this.onSearchCompleted(response.data.results)
        })
    }

    onSearchCompleted(searchResults) {
        const { store } = this.props
        store.dispatch({
            type: 'DISPLAY_RESULTS',
            value: searchResults
        })
    }

    render() {
        const { store } = this.props
        const { searchForm: { query, type }, search: { hasSearched, searchResults } } = store.getState()

        return (
            <div>
                <form id="search-form" className="form-horizontal" onSubmit={event => {
                    event.preventDefault()
                    this.performSearch(query, type)
                }}>
                    <div className="input-group">
                        <Logo />
                    </div>
                    <div className="input-group">
                        <Input
                            id="query"
                            type="text"
                            value={query}
                            autoFocus="autoFocus"
                            handleChange={event => {
                                store.dispatch({
                                    type: 'ENTER_QUERY',
                                    value: event.target.value
                                })
                            }} />
                        <div className="input-group-append">
                            <SubmitButton
                                id="search-button"
                                icon="fas fa-search"
                                buttonClassName="btn btn-primary" />
                        </div>
                    </div>
                    <div className="input-group">
                        <QueryTypes handleSelection={event => {
                            store.dispatch({
                                type: 'SELECT_TYPE',
                                value: event.target.value
                            })
                        }} />
                    </div>
                </form>
                { hasSearched ? <SearchResults searchResults={searchResults} /> : null }
            </div>
        )
    }
}

export default SearchPage
