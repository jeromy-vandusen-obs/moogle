import React from "react"
import PropTypes from "prop-types"

const QueryTypes = ({ handleSelection }) => (
    <div>
        <div className="form-check form-check-inline">
            <input
                id="artistQuery"
                className="form-check-input"
                type="radio"
                name="queryType"
                value="artist"
                defaultChecked
                onChange={handleSelection} />
            <label className="form-check-label" htmlFor="artist">Artist</label>
        </div>
        <div className="form-check form-check-inline">
            <input
                id="album"
                className="form-check-input"
                type="radio"
                name="queryType"
                value="release_title"
                onChange={handleSelection} />
            <label className="form-check-label" htmlFor="album">Album</label>
        </div>
        <div className="form-check form-check-inline">
            <input
                id="song"
                className="form-check-input"
                type="radio"
                name="queryType"
                value="track"
                onChange={handleSelection} />
            <label className="form-check-label" htmlFor="song">Song</label>
        </div>
    </div>
)

QueryTypes.propTypes = {
    handleSelection: PropTypes.func.isRequired
}

export default QueryTypes
