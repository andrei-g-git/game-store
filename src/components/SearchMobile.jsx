import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../js/redux/actions';
import searchIcon from '../assets/img/search-white.png';
import '../css/SearchMobile.scss';

import { useEffect } from 'react';

const $ = require('jquery');

function SearchMobile(props) {

    useEffect(() => {
        // $('img').on('focusout', () => {
        //     $(this).removeClass('display-none');
        // })
        const form = document.getElementsByClassName("mobile-search-form")[0];
        form.addEventListener("focusout", (event) => {
            props.toggleSearch(false);
        });
    }, [])

    let searchIconVisibilityClass;
    let formVisibilityClass;
    let formTransitionClass;
    if(props.clicked){
        searchIconVisibilityClass = "icon-display-none";
        //formVisibilityClass = "form-display-block";
        formTransitionClass = " form-transition-expand";
    } else {
        searchIconVisibilityClass = "icon-display-block";
        //formVisibilityClass = "form-display-none";
        formTransitionClass = " form-transition-contract";
    }

    return (
        <div className="search-mobile-wrapper">
            <img className={"mobile-search-icon " + searchIconVisibilityClass}
                src={searchIcon}
                alt="search"
                onClick={() => props.toggleSearch(true)}
            />
            <form className={"mobile-search-form " /* + formVisibilityClass */ + formTransitionClass}
                onSubmit={console.log('abc')}
            >
                <input className="mobile-search-field"
                    type="text"
                    placeholder="Search..."
                />
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        clicked: state.uiReducer.mobileSearchToggled
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        toggleSearch: (visible) => {
            dispatch(actions.mobileSearchToggled(visible));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchMobile);
