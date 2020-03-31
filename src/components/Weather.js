import React from 'react';

class Weather extends React.Component {
	render() {

		let f = (this.props.temperature * 9 / 5) - 459.67;

		// No IF statements allowed in React, use && instead:

		return(
			<div className='weather-container'>
				<div className="weather-results" id="weather-results">
					{ this.props.city && <p>City: {this.props.city}</p> }
					{ this.props.country && <p>Country: {this.props.country}</p> }
					{ this.props.temperature && <p>Temp: {f}&deg;F</p> }
					{ this.props.humidity && <p>Humidity: {this.props.humidity}%</p> }
					{ this.props.description && <p>Description: {this.props.description}</p> }
					{ this.props.error && <p>Error: {this.props.error}</p> }
				</div>

			</div>
		);
	}
}

export default Weather;