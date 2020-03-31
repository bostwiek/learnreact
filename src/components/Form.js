import React from 'react';

class Form extends React.Component {
	render() {
		return(
			<form onSubmit={this.props.getWeather}>
				<input type="text" name="city" placeholder="City..." />
				<input type="text" name="country" placeholder="Country..." />
				<br />
				<button type="submit">Get Weather</button>
			</form>
		)
	}
}

export default Form;