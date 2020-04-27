import React, {Component} from 'react';
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
		};
		this.poop = {
			prop1: 'prop1',
			prop2: 'prop2'
		}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.id == 'username') {
			this.setState({ username: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  }


  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <form onSubmit={this.handleSubmit}>
            
            <div class="formContainer">
              <label htmlFor="username">Username: </label>
              <input
                id="username"
                type="text"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            
            <div class="formContainer">
              <label htmlFor="password">Password: </label>
              <input
                id="password"
                type="password"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>

            <button type="submit">Submit</button>

          </form>

          <p>
            {this.state.username}
						<br />
            {this.state.password}
          </p>

					<p>
						{this.poop.prop1}
					</p>

        </header>
      </div>
    );
  }
}

export default Login;
