import React from 'react';

class GameBoxes extends React.Component {

	render() {

		const boxArray = [];

		const changeColor = (e) => {
			if (e.target.style.backgroundColor !== 'white') {
				e.target.style.backgroundColor = 'white';
			} else {
				e.target.style.backgroundColor = 'black';
			}
		}

		for (let x = 0; x < this.props.boxes; x++) {
			// pop, push, shift, unshift
			boxArray.push(<div className="game-box" onMouseOver={changeColor}></div>)
		}

		return(
			<div className="GameBoxes-container">
				{boxArray}
			</div>
		)
	}
}

export default GameBoxes;