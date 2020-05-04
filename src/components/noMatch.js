import React,{Fragment} from "react";
import {Link} from 'react-router-dom';

export const notFoundPage=()=>(
    <Fragment>
        <h2>sorry this page does not exist</h2>
        <Link to='/'>Homepage</Link>
    </Fragment>
)