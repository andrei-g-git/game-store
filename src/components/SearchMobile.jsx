import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../js/redux/actions';
import searchIcon from '../assets/img/search-white.png';
import '../css/SearchMobile.scss';

function SearchMobile(props) {

    let searchIconVisibilityClass;
    if(props.clicked){
        searchIconVisibilityClass = "display-none"
    } else {
        searchIconVisibilityClass = "display-block"
    }

    return (
        <div className="search-mobile-wrapper">
            <img className={"mobile-search-icon " + searchIconVisibilityClass}
                src={searchIcon}
                alt="search"
                onClick={() => props.toggleSearch(true)}
            />
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
