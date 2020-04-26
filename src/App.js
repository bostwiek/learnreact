import React from 'react';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  render() {
			return(
				<div className="wrapper">
					<Main />
				</div>
			)
		}
	}

export default App;