import React from 'react';
import * as actions from '../js/redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import searchIcon from '../assets/img/search-1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SearchBar.scss';

function SearchBar(props) { 
    return (
        <form className="search-form" //so this thing somehow POSTS the query to the server ... ?
            onSubmit={curryHandleSubmit(props)}
        >
            <input className="search-field"
                id="search-field"
                type="search"
                placeholder="Search..."
                name="search"
            />
            {/* <button className="btn btn-primary" 
                type="submit"
            >
                <i className="fa fa-search"></i>
            </button> */}
            <input className="search-icon"
                type="image"
                src={searchIcon}
                alt="submit"
            />
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
