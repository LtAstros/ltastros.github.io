import React from 'react';

const NavLink = ({ href, className, children}) => {
    const onClick = (event) => {
        event.preventDefault();
    }
    return (
        <a 
            href={href} 
            className={className} 
            onClick={onClick}>
            {children}
        </a>
    )
}

export default NavLink;