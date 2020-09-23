import React from 'react';
import NavLink from './NavLink';

class NavBar extends React.Component {

    render() {
        return (
                <div className="ui large top fixed inverted menu">
                    <div className="ui container">
                        <NavLink href="/" className="item">Top</NavLink>
                        <NavLink href="/about" className="item">About</NavLink>
                        <NavLink href="/projects" className="item">Projects</NavLink>
                        <NavLink href="/social" className="item">Contact Me</NavLink>
                    </div>
                </div>
        )
    }
}

export default NavBar;