import React from 'react';
import Players from './Players';

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            poop: '',

        }
    }

    render() {
        return (
            <div className='board'>
                <p>THIS IS THE GAMEBOARD</p>
            </div>
        )
    }
}

export default Board;