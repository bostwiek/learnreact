import React from 'react';

class Form extends React.Component {
	render() {
		return(
			<form onSubmit={this.props.getWeather}>
				<div className="input-group mb-3">
					<div className="input-group-prepend location-label">
						<span className="input-group-text" id="basic-addon1">City:</span>
					</div>
					<input type="text" name="city" className="form-control" aria-label="Username" aria-describedby="basic-addon1" autoComplete="false" />
				</div>
				<div className="input-group mb-3">
					<div className="input-group-prepend location-label">
						<span className="input-group-text" id="basic-addon1">Country:</span>
					</div>
					<input type="text" name="country" className="form-control" placeholder="US" aria-label="Username" aria-describedby="basic-addon1" autoComplete="false" />
				</div>
				<br />
				<button type="submit" className="btn btn-lg btn-dark">Submit</button>
			</form>
		)
	}
}

export default Form;