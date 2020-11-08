import React from 'react';

function SearchBox(props) {
    return (
        <div className="col-12 bg-primary text-white">
            <div className="input-group mb-3">
                <input type="text" onChange={props.handleSearch} className="form-control"/>
                <div className="input-group-append">
                    <button className="btn text-white btn-success btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBox;