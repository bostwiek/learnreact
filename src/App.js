import React from 'react';
import Game from './components/Game';
import Clock from './components/Clock';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const API_KEY = '39b62e27e68f14e8459378c86e2950a2';

// left off here: https://reactjs.org/docs/handling-events.html

class App extends React.Component {

  render() {

	return(
		<div className="wrapper">
			<Game />
		</div>
	)
  }
}

export default App;