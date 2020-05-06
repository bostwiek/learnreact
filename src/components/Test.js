import React from 'react'

import { CSSTransition } from 'react-transition-group'

class Test extends React.Component {

	constructor() {
		super();
		this.state = {
			btn: true,
			email: null,
			password: null,
			error: false,
			errorDesc: ''
		}
	}
	render() {
		class Test2 extends Test {
			abc() {alert('test')}
		}

		return (
			<></>
		)
	}

}

export default Test;