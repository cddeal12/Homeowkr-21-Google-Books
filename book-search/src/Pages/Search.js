import React, {Component} from "react";
import SearchBox from '../Components/SearchBox';
import API from '../utils/API';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            books: []
        };
    };

    handleSearch = (event) => {
        this.setState({searchValue: event.target.value});
    };

    searchBooks = () => {
        API.searchBooks();
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Google Books Search</h1>
                        <h3>Search for and save books</h3>
                    </div>
                    <SearchBox handleSearch={this.handleSearch} searchBooks={this.searchBooks}/>
                </div>
            </div>
        );
    };
};

export default Search;