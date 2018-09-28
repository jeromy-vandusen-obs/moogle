import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import QueryType from "./QueryType"

const mapStateToArtistProps = state => ({
    id: "artistQuery",
    value: "artist",
    label: "Artist",
    defaultChecked: true
})

const mapStateToAlbumProps = state => ({
    id: "albumQuery",
    value: "album",
    label: "Album"
})

const mapStateToSongProps = state => ({
    id: "songQuery",
    value: "track",
    label: "Song"
})

const mapDispatchToProps = dispatch => ({
    handleSelection: event => {
        dispatch({
            type: 'SELECT_TYPE',
            value: event.target.value
        })
    }
})

const QueryTypeArtist = connect(
    mapStateToArtistProps,
    mapDispatchToProps
)(QueryType)

const QueryTypeAlbum = connect(
    mapStateToAlbumProps,
    mapDispatchToProps
)(QueryType)

const QueryTypeSong = connect(
    mapStateToSongProps,
    mapDispatchToProps
)(QueryType)

const QueryTypes = () => (
    <div>
        <div className="form-check form-check-inline">
            <QueryTypeArtist />
        </div>
        <div className="form-check form-check-inline">
            <QueryTypeAlbum />
        </div>
        <div className="form-check form-check-inline">
            <QueryTypeSong />
        </div>
    </div>
)

export default QueryTypes
