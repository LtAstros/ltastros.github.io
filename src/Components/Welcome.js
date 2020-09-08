import '../Styles/Welcome.css';
import React from 'react';

const Welcome = (props) => {

    return (
        <div className="ui inverted vertical center aligned segment welcome">
            <div className="ui container">
                <h1 className="ui inverted header">Welcome</h1>
                <h2 style={{fontWeight: "normal"}}>Learn more about me, my projects, and more on this website!</h2>
            </div>
        </div>
    )
}

export default Welcome;