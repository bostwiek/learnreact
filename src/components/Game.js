import React from 'react';
import GameBoxes from './GameBoxes';

// note: states handle dynamic variables, props are static and passed to children (though there is workarounds for updating props, states should be used when its expected to change)

class Game extends React.Component {

	state = {
		num: 0
	}

	render() {

		const submit = () => {
			this.setState((num) => {
				return {num: document.getElementById('boxes').value}
			})
		}

		return(
			<div className="Game" id="Game">
				<div className="form-row align-items-center">
					<div className="col-2"></div>
					<div className="col-4">
						<input type="text" id="boxes" className="form-control form-control-lg" placeholder="How many boxes:" />
					</div>
					<div className="col-4">
						<button className="btn btn-primary btn-lg" onClick={submit}>Submit</button>
					</div>
					<div className="col-2"></div>
				</div>
				
				<GameBoxes boxes={this.state.num} />

			</div>
		)
	}
}

export default Game;