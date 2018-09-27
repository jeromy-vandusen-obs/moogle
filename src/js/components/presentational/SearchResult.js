import React from "react"
import PropTypes from "prop-types"

const SearchResult = ({ id, type, title, year, country, thumb }) => (
    <tr>
        <td>{id}</td>
        <td>{type}</td>
        <td>{title}</td>
        <td>{year}</td>
        <td>{country}</td>
        <td><img src={thumb} /></td>
    </tr>
)

SearchResult.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
}

export default SearchResult
