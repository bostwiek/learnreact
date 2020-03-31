import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const API_KEY = '39b62e27e68f14e8459378c86e2950a2';

//https://api.openweathermap.org/data/2.5/weather?q=Denver,CO*&appid=39b62e27e68f14e8459378c86e2950a2

// class lets you setState, function components do not, would look like:
	// const App = () => { return(<div>whatup</div>)}
	// this restricts use of `this` keyword
		// can work around this if using props by passing props into the function:
			// const App = (props) => {}

class App extends React.Component {

	// constructor(props){super(props);state={}} is depricated, can just use:
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}
	
	// arrow functions allow for use of `this` keyword
	getWeather = async (e) => {
		
		// need to prevent default behavior of button when submitting (otherwise page will refresh)
		e.preventDefault();

		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;


		// async for async / await keywords
		const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}*&appid=${API_KEY}`);
		
		// need to convert response to json object
		const data = await api_call.json();

		if (city && country) {
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: ''
			})
		} else {
			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: 'Please enter a City and Country'
			})
		}

	}
	

  render() {
    return(
      <div>
				<div className="wrapper">
					<div className="main">
						<div className="container">
							<div className="row">
								<div className="col-4 title-container">
										<Titles />
									</div>
								<div className="col-8 form-container">
									<Form getWeather={this.getWeather} />
								</div>
							</div>
							<div className="row">	
								<Weather
										temperature={this.state.temperature}
										city={this.state.city}
										country={this.state.country}
										humidity={this.state.humidity}
										description={this.state.description}
										error={this.state.error}
									/>
							</div>
						</div>
					</div>
				</div>
      </div>
    );
  }
}

export default App;