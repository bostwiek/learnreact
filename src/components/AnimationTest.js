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
			count: 0
		}
		this.countUp = this.countUp.bind(this);
	}

	countUp() {
		let currentCount = this.state.count;
		currentCount += 1;
		this.setState({ count: currentCount })
	}


	render() {

		const { appearHome } = this.state;

		return (
			<>

				<div className="animation-container">




					<Transition
						in={true}
						timeout={4000}
						appear
					>


						{(status) => (

							<div className={`box box-${status}`}>
								react-transition-group status: {status}
							</div>

						)}



					</Transition>




					<div className="count-container">
						{this.state.count}
					</div>

				</div>


			</>
		)
	}
}

export default AnimationTest;