class SearchResult extends React.Component {
    render() {
        const {id, type, title, year, country, thumb} = this.props
        return (
            <tr>
                <td>{id}</td>
                <td>{type}</td>
                <td>{title}</td>
                <td>{year}</td>
                <td>{country}</td>
                <td><img src={thumb} /></td>
            </tr>
        )
    }
}

class SearchResults extends React.Component {
    render() {
        const results = this.props.searchResults.map(result =>
            <SearchResult id={result.id} type={result.type} title={result.title} year={result.year} country={result.country} thumb={result.thumb} />
        )
        return (
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
                    {results}
                </tbody>
            </table>
        )
    }
}

class App extends React.Component {
    state = {hasSearched: false, searchResults: undefined}

    performSearch = event => {
        event.preventDefault()
        const value = this.inputNode.value

        axios({
            url: `https://api.discogs.com/database/search?artist=${value}&token=KGlofzPxbKEohvnzsGlWNEHrJviqGZtrnuhYJgkX`,
            method: 'get'
        }).then(response => {
            this.setState({hasSearched: true, searchResults: response.data.results})
        })
    }

    render() {
        const {hasSearched, searchResults} = this.state
        return (
            <div>
                <form className="form-horizontal" onSubmit={this.performSearch}>
                    <div className="input-group">
                        <span className="h1"><span className="text-primary">M</span><span className="text-danger">o</span><span className="text-warning">o</span><span className="text-primary">g</span><span className="text-success">l</span><span className="text-danger">e</span></span>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" autofocus="autofocus" ref={node => (this.inputNode = node)} />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
                {hasSearched ? <SearchResults searchResults={searchResults} /> : null}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react'))
