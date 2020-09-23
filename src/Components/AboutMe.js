import React from 'react';
import Portrait from '../Images/Portrait.jpeg';

const AboutMe = (props) => {
    return (
        <div className="ui center aligned vertical segment stripe">
                        <h2 className="ui header">Hi, I'm Costin Smilovici! Let me tell you a bit about myself...</h2>
                        <img 
                            className="ui centered small circular image" 
                            style={{marginTop: "2em", marginBottom:"2em"}}
                            alt="Costin Smilovici" 
                            src={Portrait}
                        />
                        <div className="ui text container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
        </div>
    )
}

export default AboutMe;