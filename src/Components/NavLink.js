import React from 'react';

const NavLink = ({ href, className, children, onNavLinkClick, pointer}) => {
    return (
        <a 
            href={href} 
            className={className}
            onClick={(e) => onNavLinkClick(e, pointer)}>
            {children}
        </a>
    )
}

export default NavLink;