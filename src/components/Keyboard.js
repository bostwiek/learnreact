import React from 'react';

class Keyboard extends React.Component {

	state = {
		value: '',
		lastKey: undefined
	}

	keyPressed (e) {
		
		console.log(e.key);
		
	}

	render() {
		
		return(
			<div>
				<input
					name="keyboardTest" id="keyboardTest"
					onKeyPress={this.keyPressed}
				/>
			</div>
		)
	}
}

export default Keyboard;