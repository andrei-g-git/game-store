import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/SignInOrUp.scss';

function SignOrUp(props) {
    return (
        <input className={"standard-button " + props.colorClass}
            type="button"
            value={props.name}
            onClick={() => handleClick(props)}
        />
    )
}

const handleClick = (props) => {
    props.history.push(props.redirectPath);
}

export default withRouter(SignOrUp);
