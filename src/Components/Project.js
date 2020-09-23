import '../Styles/Project.css';
import React from 'react';

const Project = (props) => {
    return (
        <div className="ui vertical segment">
            <div className="ui grid">
                <div className="four wide center aligned column">
                    <img 
                        className="ui centered small circular image" 
                        style={{marginTop: "2em", marginBottom:"2em"}}
                        alt="Costin Smilovici" 
                        src={props.src} 
                    />
                </div>
                <div className="twelve wide column">
                    <div className="ui text fluid container">
                        <h3>{props.header}</h3>
                        <p>{props.children}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;