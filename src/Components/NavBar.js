import React from 'react';
import Link from './Link';

class NavBar extends React.Component {

    render() {
        return (
                <div className="ui large top fixed inverted menu">
                    <div className="ui container">
                        <Link href="/" className="item">Icon</Link>
                        <Link href="/about" className="item">About</Link>
                        <Link href="/projects" className="item">Projects</Link>
                        <Link href="/social" className="item">Social</Link>
                    </div>
                </div>
        )
    }
}

export default NavBar;