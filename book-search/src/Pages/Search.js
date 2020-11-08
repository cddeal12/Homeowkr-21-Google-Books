import React, {Component} from "react";
import BooksReturn from "../Components/BooksReturn";
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
        API.searchBooks(this.state.searchValue)
        .then((res) => {
            this.setState({books: res.data.items});
        });
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
                    <BooksReturn books={this.state.books} />
                </div>
            </div>
        );
    };
};

export default Search;