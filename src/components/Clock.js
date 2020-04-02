import React from 'react';

class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = {date: new Date()}
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		// setState re-renders the DOM - FYI
		this.setState({
			date: new Date()
		})
		// another FYI - DO NOT CHANGE THE STATE DIRECTLY - the only place to type this.state is in the constructor
	}

	render() {
		return(
			<div>
				{this.state.date.toLocaleTimeString()}
			</div>
		)
	}

}

export default Clock;