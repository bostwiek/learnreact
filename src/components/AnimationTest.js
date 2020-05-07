import React, {useState} from 'react'
import { Transition } from 'react-transition-group'
import '../Animations.css'

function AnimationTest() {

	const [entered, setEntered] = useState(false);

	return (
		<div>
			<AComponent in={entered} />
			<button onClick={()=>{setEntered(!entered)}}>Toggle Entered</button>
		</div>
	)

}

const AComponent = ({in: inProp}) => (
	<Transition in={inProp} timeout={500} unmountOnExit>
		{state => (
			<div>
				I am {state}
			</div>
		)}
	</Transition>
)

export default AnimationTest;