import '../Styles/Project.css';
import React from 'react';

const Project = (props) => {

    const navigateTo = (url) => {
        window.open(url);
    }

    return (
        <div className="ui vertical link segment" onClick={() => navigateTo(props.url)}>
            <div className="ui grid">
                <div className="four wide center aligned column">
                    <img 
                        className="ui centered medium bordered rounded image" 
                        style={{marginTop: "2em", marginBottom:"2em"}}
                        alt="Costin Smilovici" 
                        src={props.src} 
                    />
                </div>
                <div className="twelve wide column">
                    <div className="ui text container">
                        <h3>{props.header}</h3>
                        <p>{props.children}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;