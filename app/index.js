import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

class App extends React.Component {
    render () {
        return (
            <div>
                Zombies Fighters! Hyped!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)