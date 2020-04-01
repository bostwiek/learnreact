import React from 'react';

class Weather extends React.Component {
	render() {

		let f = (this.props.temperature * 9 / 5) - 459.67;

		// No IF statements allowed in React, use && instead:

		return(
			<div className='weather-container'>

				<table className="table table-dark table-bordered">
					<thead>
						<tr>
							{ this.props.city && <th scope="col">City: </th> }
							{ this.props.country && <th scope="col">Country: </th> }
							{ this.props.temperature && <th scope="col">Temp: </th> }
							{ this.props.humidity && <th scope="col">Humidity: </th> }
							{ this.props.description && <th scope="col">Description: </th> }
							{ this.props.error && <th scope="col">Error: </th> }
						</tr>
					</thead>
					<tbody>
						<tr>
							{ this.props.city && <td>{this.props.city}</td> }
							{ this.props.country && <td>{this.props.country}</td> }
							{ this.props.temperature && <td>{Math.trunc(f)}&deg;F</td> }
							{ this.props.humidity && <td>{this.props.humidity}%</td> }
							{ this.props.description && <td>{this.props.description}</td> }
							{ this.props.error && <td>{this.props.error}</td> }
						</tr>
					</tbody>
				</table>

			</div>
		);
	}
}

export default Weather;