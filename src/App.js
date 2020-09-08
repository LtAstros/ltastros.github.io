import './Styles/App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';
import AboutMe from './Components/AboutMe';

class App extends React.Component {
    state = { selected: null };

    render () {
        return (
            <div>
                <NavBar />
                <Welcome />
                <AboutMe />
            </div>
        )
    }
}

export default App;