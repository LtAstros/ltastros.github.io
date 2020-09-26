import React from 'react';
import Project from './Project';
import VideoImage from '../Images/VideoThumbnail.png';
import WidgetsImage from '../Images/WidgetsThumbnail.png';
import PicsImage from '../Images/PicsThumbnail.png';

class Projects extends React.Component {

    render() {
        return (
            <div className="ui vertical segment">
                <h2 className="ui center aligned header">Here are some of my recent projects...</h2>
                <Project 
                    src={VideoImage}
                    url="https://ltastros.github.io/react-videos/"
                    header="React Youtube Clone">
                    This application uses the YouTube api and React to give a faster searching process as the page live updates to the users input. This was made using the steps from Stephen Grider React-Redux tutorial.
                </Project>
                <Project 
                    src={WidgetsImage}
                    url="https://ltastros.github.io/react-widgets/"
                    header="Common Widgets With React Hooks">
                    This application has some common widgets that appears on websites like dropdown menus and search bars. These were made with React Hooks for function-based components. This was made using the steps from Stephen Grider React-Redux tutorial.
                </Project>
                <Project 
                    src={PicsImage}
                    url="https://ltastros.github.io/react-pics/"
                    header="Image Search with React">
                    This app uses React's refs system to have dynamic style editing that ensures the photos do not overlap. This was made using the steps from Stephen Grider React-Redux tutorial.
                </Project>
            </div>
        );
    }
}

export default Projects;