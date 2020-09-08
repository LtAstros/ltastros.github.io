import './Styles/App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';

class App extends React.Component {
    state = { selected: null };

    render () {
        return (
            <div>
                <NavBar />
                <Welcome />
            </div>
        )
    }
}

export default App;