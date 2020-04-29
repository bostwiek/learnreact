import React from 'react'
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group'
import '../Animations.css'
import uuid from 'uuid'

class AnimationTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: uuid(),
			name: 'XD',
			count: 0,
			bool: true
		}
		this.countUp = this.countUp.bind(this);
		this.flipBool = this.flipBool.bind(this);
	}

	countUp() {
		let currentCount = this.state.count;
		currentCount += 1;
		this.setState({ count: currentCount })
	}

	flipBool() {
		let currentBool = this.state.bool;
		currentBool = !currentBool;
		this.setState({bool: currentBool})
	}


	render() {

		const { appearHome } = this.state;


		return (
			<>
				<div className="animation-container">


					<Transition
						in={this.state.bool}
						timeout={1000}
						appear
					>
						{(status) => (

							<div className={`test test-${status}`}>
								react-transition-group status: {status}
							</div>

						)}
					</Transition>

					<div className="count-container">
						{this.state.count}
					</div>

					<button onClick={this.flipBool}>Boop</button>

				</div>


			</>
		)
	}
}

export default AnimationTest;