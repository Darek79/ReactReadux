import React, {Fragment} from "react";
import {NavLink} from 'react-router-dom'

export const Navigation = (props) => {
    console.log(props)
    return (
        <Fragment>

            <ul>
                <li><NavLink to='/'>Homepage</NavLink></li>
                <li><NavLink to='/nr2'>Nr2</NavLink></li>
                <li><NavLink to='/nr3'>Nr3</NavLink></li>
            </ul>
        </Fragment>
    )
}