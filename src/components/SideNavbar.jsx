import React from 'react';

import '../css/SideNavbar.scss';

function SideNavbar(props) {
    return (
        <div className={"navbar-wrapper" + " " + props.layout}>
            This shouldn't scroll
        </div>
    )
}

export default SideNavbar;
