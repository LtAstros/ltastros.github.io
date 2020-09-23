import React from 'react';
import Project from './Project';

class Projects extends React.Component {
    
    render() {
        return (
            <div className="ui vertical segment">
                <h2 className="ui center aligned header">Here are some of my recent projects...</h2>
                <Project 
                    src="https://upload.wikimedia.org/wikipedia/en/4/40/Black_Ops_Cold_War.jpeg" 
                    header="Scoopidy Poop">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Project>
                <Project 
                    src="https://upload.wikimedia.org/wikipedia/en/4/40/Black_Ops_Cold_War.jpeg" 
                    header="Scoopidy Poop">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Project>
                <Project 
                    src="https://upload.wikimedia.org/wikipedia/en/4/40/Black_Ops_Cold_War.jpeg" 
                    header="Scoopidy Poop">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Project>
            </div>
        );
    }
}

export default Projects;