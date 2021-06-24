import React from 'react';
import * as actions from '../js/redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar(props) { 
    return (
        <form id="search-form" //so this thing somehow POSTS the query to the server ... ?
            onSubmit={curryHandleSubmit(props)}
        >
            <input id="search-field"
                type="search"
                placeholder="Search..."
                name="search"
            />
            <button type="submit">
                <i className="fa fa-search"></i>
            </button>
        </form>
    )
}

const curryHandleSubmit = (props) =>{
    return function(event){
        event.preventDefault(); 
        const searchFiled = document.getElementById("search-field");
        const searchQuery = searchFiled.value;
        props.storeSearch(searchQuery);
        props.history.push("/search-result"); 
    }
}

const mapStateToProps = (state) => {
    return{
        searchQuery: state.databaseReducer.searchQuery
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        storeSearch: (searchQuery) => {
            dispatch(actions.searchQueried(searchQuery))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
