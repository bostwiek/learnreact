import React from 'react'
import { CSSTransition } from 'react-transition-group'
import '../Animations.css'

class AnimationTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			appearHome: true
		}
	}

	/* these are called methods */
	toggleAppear = () => {
		
	}
	nextProperty = () => {
		
	}
	prevProperty = () => {
		
	}


	render() {

		const {appearHome} = this.state;
		return(
			<>
				<div className="animation-container">
					
					<button onClick={() => this.toggleAppear()}>Appear:</button>
					<button>Next</button>
					<button>Prev</button>
					
					<CSSTransition
						in={appearHome}
						appear={true}
						timeout={1000}
						classNames="fade"
					>
						<div>
							ASDFASDFASDF
							ASDFASDFASDF
							ASDFASDFASDF
						</div>
					</CSSTransition>


				</div>
			</>
		)
	}
}

export default AnimationTest;