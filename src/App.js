import './Styles/App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';

class App extends React.Component {
    state = { selected: null };

    render () {
        return (
            <div>
                <NavBar />
                <Welcome />
                <AboutMe />
                <Projects />
                <ContactMe />
            </div>
        )
    }
}

export default App;