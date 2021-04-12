import React from "react"
import { NavLink } from "react-router-dom"

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/nba'>NBA</NavLink></li>
                    <li><NavLink to='/anime'>Anime</NavLink></li>
                    <li><NavLink to='/computers'>Computers</NavLink></li>
                </ul>
            </nav>
        )
    }

}
