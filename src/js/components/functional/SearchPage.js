import React, { Component } from "react"
import PropTypes from "prop-types"
import axios from "axios"

import Logo from "../presentational/Logo"
import InputQuery from "../presentational/InputQuery"
import SubmitButton from "../presentational/SubmitButton"
import QueryTypes from "../presentational/QueryTypes"
import SearchResults from "../presentational/SearchResults"

class SearchPage extends Component {
    componentDidMount() {
        const { store } = this.context
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
        const { store } = this.context
        store.dispatch({
            type: 'DISPLAY_RESULTS',
            value: searchResults
        })
    }

    render() {
        const { store } = this.context
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
                        <InputQuery />
                        <div className="input-group-append">
                            <SubmitButton
                                id="search-button"
                                icon="fas fa-search"
                                buttonClassName="btn btn-primary" />
                        </div>
                    </div>
                    <div className="input-group">
                        <QueryTypes />
                    </div>
                </form>
                { hasSearched ? <SearchResults searchResults={searchResults} /> : null }
            </div>
        )
    }
}

SearchPage.contextTypes = {
    store: PropTypes.object
}

export default SearchPage
