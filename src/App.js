import './Styles/App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }

        this.welcomeRef = React.createRef();
        this.aboutRef = React.createRef();
        this.projectsRef = React.createRef();
        this.contactRef = React.createRef();
    }

    // TASK: Refactor code to be cleaner
    setActiveSegment = (event, segment) => {
        event.preventDefault();
        if (segment === "welcome") {
            this.setState({ selected: "welcome"});
        } else if (segment === "about") {
            this.setState({ selected: "about"});
        } else if (segment === "projects") {
            this.setState({ selected: "projects"});
        } else if (segment === "contact") {
            this.setState({ selected: "contact"});
        }
    }

    scrollSegmentToView = (segment) => {
        console.log("RAN", segment)
        if (segment === "welcome") {
            this.welcomeRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else if (segment === "about") {
            this.aboutRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else if (segment === "projects") {
            this.projectsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else if (segment === "contact") {
            this.contactRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }

    componentDidUpdate() {
            this.scrollSegmentToView(this.state.selected)
    }

    // this.welcomeRef.current.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start',
    // });

    render () {
        return (
            <div>
                <NavBar onNavLinkClick={this.setActiveSegment} />
                <div ref={this.welcomeRef}>
                    <Welcome />
                </div>
                <div ref={this.aboutRef}>
                    <AboutMe />
                </div>
                <div ref={this.projectsRef}>
                    <Projects />
                </div>
                <div ref={this.contactRef}>
                    <ContactMe />
                </div>
            </div>
        )
    }
}

export default App;