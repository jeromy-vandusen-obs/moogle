import React, { Component } from "react"
import axios from "axios"

import Logo from "../presentational/Logo"
import Input from "../presentational/Input"
import SubmitButton from "../presentational/SubmitButton"
import SearchResults from "../presentational/SearchResults"
import QueryTypes from "../presentational/QueryTypes"

class SearchForm extends Component {
    constructor() {
        super()

        this.state = {
            query: "",
            type: "artist",
            hasSearched: false,
            searchResults: []
        }

        this.handleChange = event => {
            this.setState({ query: event.target.value })
        }

        this.handleSelection = event => {
            this.setState({ type: event.target.value })
        }

        this.performSearch = event => {
            event.preventDefault()
            const { query, type } = this.state

            axios.get(
                `https://api.discogs.com/database/search?${type}=${query}&token=KGlofzPxbKEohvnzsGlWNEHrJviqGZtrnuhYJgkX`
            ).then(response => {
                this.setState({ hasSearched: true, searchResults: response.data.results })
            })
        }
    }

    render() {
        const { query, type, hasSearched, searchResults } = this.state
        return (
            <div>
                <form id="search-form" className="form-horizontal" onSubmit={this.performSearch}>
                    <div className="input-group">
                        <Logo />
                    </div>
                    <div className="input-group">
                        <Input
                            id="query"
                            type="text"
                            value={query}
                            autoFocus="autoFocus"
                            handleChange={this.handleChange} />
                        <div className="input-group-append">
                            <SubmitButton
                                id="search-button"
                                icon="fas fa-search"
                                buttonClassName="btn btn-primary" />
                        </div>
                    </div>
                    <div className="input-group">
                        <QueryTypes handleSelection={this.handleSelection} />
                    </div>
                </form>
                { hasSearched ? <SearchResults searchResults={searchResults} /> : null }
            </div>
        )
    }
}

export default SearchForm
