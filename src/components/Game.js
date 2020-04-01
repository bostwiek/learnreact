import React from 'react';
import { render } from '@testing-library/react';

class Game extends React.Component {

    state = {
        players: 0
    }

    render() {

        function test() { alert("test"); }

        const lightbox = () => {
            // exploring the deepness of the "this" keyword
            console.log(this);
        }

        return(
            <div className="Game" id="Game">
                <div className="game-top" onClick={lightbox}>
                    
                </div>
                <div className="game-mid">
                    
                </div>
                <div className="game-btm">
                    
                </div>
            </div>
        )
    }

}

export default Game;