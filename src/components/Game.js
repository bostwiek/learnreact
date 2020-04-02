import React from 'react';
import GameBoxes from './GameBoxes';

// note: states handle dynamic variables, props are static and passed to children (though there is workarounds for updating props, states should be used when its expected to change)

class Game extends React.Component {

	render() {

		return(
			<div className="Game" id="Game">
				<GameBoxes />
			</div>
		)
	}
}

export default Game;