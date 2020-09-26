import React from 'react';
import NavLink from './NavLink';

class NavBar extends React.Component {

    render() {
        return (
                <div className="ui large top fixed inverted menu">
                    <div className="ui container">
                        <NavLink href="/" pointer="welcome" onNavLinkClick={this.props.onNavLinkClick} className="item">Top</NavLink>
                        <NavLink href="/about" pointer="about" onNavLinkClick={this.props.onNavLinkClick} className="item">About</NavLink>
                        <NavLink href="/projects" pointer="projects" onNavLinkClick={this.props.onNavLinkClick} className="item">Projects</NavLink>
                        <NavLink href="/social" pointer="contact" onNavLinkClick={this.props.onNavLinkClick} className="item">Contact Me</NavLink>
                    </div>
                </div>
        )
    }
}

export default NavBar;