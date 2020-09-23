import '../Styles/Welcome.css';
import React from 'react';

const Welcome = (props) => {

    return (
        <div className="ui inverted vertical center aligned segment welcome">
            <div className="ui container">
                <h1 className="ui inverted header">Welcome</h1>
                <h2 style={{fontWeight: "normal"}}>...to the hub of my passion for coding!</h2>
            </div>
        </div>
    )
}

export default Welcome;