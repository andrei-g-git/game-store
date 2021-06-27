import React from 'react';
import { connect } from 'react-redux';
import { /* withRouter, */ useHistory } from 'react-router-dom';
import * as actions from '../js/redux/actions';
import searchIcon from '../assets/img/search-white.png';
import searchIconDark from '../assets/img/search-1.png';
import '../css/SearchMobile.scss';

import { useEffect } from 'react';

const $ = require('jquery');

function SearchMobile(props) {

    useEffect(() => {
        const form = document.getElementsByClassName("mobile-search-form")[0];
        form.addEventListener("focusout", (event) => {
            props.toggleSearch(false);
        });
    }, [])

    let history = useHistory();

    let searchIconVisibilityClass;
    let formTransitionClass;
    if(props.clicked){
        searchIconVisibilityClass = "icon-display-none";
        formTransitionClass = " form-transition-expand";
    } else {
        searchIconVisibilityClass = "icon-display-block";
        formTransitionClass = " form-transition-contract";
    }

    return (
        <div className="search-mobile-wrapper">
            <img className={"mobile-search-icon " + searchIconVisibilityClass}
                src={searchIcon}
                alt="search"
                onClick={() => props.toggleSearch(true)}
            />
            <form className={"mobile-search-form " + formTransitionClass}
                onSubmit={curryHandleSubmit(props, history)}
            >
                <input className="mobile-search-field"
                    type="text"
                    placeholder="Search..."
                />
                <input className="mobile-search-button"
                    src={searchIconDark}
                    alt="search"
                    type="image"
                />
            </form>
        </div>
    )
}

const curryHandleSubmit = (props, history) =>{
    return function(event){
        event.preventDefault(); 
        const searchFiled = document.getElementsByClassName("mobile-search-field")[0];
        const searchQuery = searchFiled.value;
        props.storeSearch(searchQuery);
        history.push("/search-result");
    }
}

const mapStateToProps = (state) => {
    return{
        clicked: state.uiReducer.mobileSearchToggled,
        searchQuery: state.databaseReducer.searchQuery
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        toggleSearch: (visible) => {
            dispatch(actions.mobileSearchToggled(visible));
        },
        storeSearch: (searchQuery) => {
            dispatch(actions.searchQueried(searchQuery))
        }        
    }
}
export default /* withRouter( */connect(mapStateToProps, mapDispatchToProps)(SearchMobile)/* ) */;
