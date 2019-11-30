import React from "react"
import {Link} from 'gatsby';
import './header.css'
export const Header = () => <div>
<ul>
    <li><Link to='/' activeClassName = 'activeLink'>home</Link></li>
    <li><Link to= '/newPage' activeClassName = 'activeLink'>About</Link></li>
</ul>
</div>