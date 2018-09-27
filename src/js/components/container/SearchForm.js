import React, { Component } from "react"
import ReactDOM from "react-dom"
import axios from "axios"

import Logo from "../presentational/Logo"
import Input from "../presentational/Input"
import SubmitButton from "../presentational/SubmitButton"
import SearchResults from "../presentational/SearchResults"

class SearchForm extends Component {
    constructor() {
        super()

        this.state = {
            query: "",
            hasSearched: false,
            searchResults: []
        }

        this.handleChange = event => {
            this.setState({ [event.target.id]: event.target.value })
        }

        this.performSearch = event => {
            event.preventDefault()
            const value = this.state.query

            axios.get(
                `https://api.discogs.com/database/search?artist=${value}&token=KGlofzPxbKEohvnzsGlWNEHrJviqGZtrnuhYJgkX`
            ).then(response => {
                this.setState({ hasSearched: true, searchResults: response.data.results })
            })
        }
    }

    render() {
        const { query, hasSearched, searchResults } = this.state
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
                </form>
                { hasSearched ? <SearchResults searchResults={searchResults} /> : null }
            </div>
        )
    }
}

export default SearchForm

const wrapper = document.getElementById("moogle")
wrapper ? ReactDOM.render(<SearchForm />, wrapper) : false
