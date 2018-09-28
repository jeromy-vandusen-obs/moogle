import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import axios from "axios"

import Logo from "../presentational/Logo"
import InputQuery from "../presentational/InputQuery"
import SubmitButtonSearch from "../presentational/SubmitButtonSearch"
import QueryTypes from "../presentational/QueryTypes"
import SearchResults from "../presentational/SearchResults"

const mapStateToProps = state => ({
    query: state.searchForm.query,
    type: state.searchForm.type,
    hasSearched: state.search.hasSearched,
    searchResults: state.search.searchResults
})

const mapDispatchToProps = dispatch => ({
    performSearch: (query, type) => {
        axios.get(
            `https://api.discogs.com/database/search?${type}=${query}&token=KGlofzPxbKEohvnzsGlWNEHrJviqGZtrnuhYJgkX`
        ).then(response => {
            dispatch({
                type: 'DISPLAY_RESULTS',
                value: response.data.results
            })
        })
    }
})

const Search = ({ query, type, hasSearched, searchResults, performSearch }) => (
    <div>
        <form id="search-form" className="form-horizontal" onSubmit={event => {
            event.preventDefault()
            performSearch(query, type)
        }}>
            <div className="input-group">
                <Logo />
            </div>
            <div className="input-group">
                <InputQuery />
                <div className="input-group-append">
                    <SubmitButtonSearch />
                </div>
            </div>
            <div className="input-group">
                <QueryTypes />
            </div>
        </form>
        { hasSearched ? <SearchResults searchResults={searchResults} /> : null }
    </div>
)

Search.propTypes = {
    query: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    hasSearched: PropTypes.bool.isRequired,
    searchResults: PropTypes.array.isRequired
}

const SearchPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)

export default SearchPage
