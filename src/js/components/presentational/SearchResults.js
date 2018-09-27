import React from "react"
import PropTypes from "prop-types"

import SearchResult from "./SearchResult"

const SearchResults = ({ searchResults }) => (
    <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Title</th>
                <th>Year</th>
                <th>Country</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
            {
                searchResults.map(searchResult => (
                    <SearchResult
                        key={searchResult.id}
                        id={searchResult.id}
                        type={searchResult.type}
                        title={searchResult.title}
                        year={searchResult.year}
                        country={searchResult.country}
                        thumb={searchResult.thumb} />
                ))
            }
        </tbody>
    </table>
)

SearchResults.propTypes = {
    searchResults: PropTypes.array.isRequired
}

export default SearchResults
