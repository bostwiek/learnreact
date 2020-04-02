import React from 'react';

class GameBoxes extends React.Component {

	render() {

		const changeColor = (e) => {
			if (e.target.style.backgroundColor !== 'black') {
				e.target.style.backgroundColor = 'black';
			} else {
				e.target.style.backgroundColor = 'white';
			}
		}

		return(
			<div className="GameBoxes-container">
				<div className="game-box" onClick={changeColor}></div>
				<div className="game-box" onClick={changeColor}></div>
				<div className="game-box" onClick={changeColor}></div>
			</div>
		)
	}
}

export default GameBoxes;