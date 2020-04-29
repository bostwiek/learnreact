import React from 'react'
import Logo from './Logo'

class SignupForm extends React.Component {
	render() {

		return(
      <div className="form-container">

				<div className="header-container">
					<h3>Create a new account</h3>
				</div>

				<div className="input-height">
					
					<div className="form-group">
						<div className="input-wrapper">
							<label htmlFor="username">Username: </label>
							<input type="text" className="form-control username" id="username" placeholder="Username" autocomplete="off" />
						</div>
					</div>
					
					<div className="form-group">
						<div className="input-wrapper">
							<label htmlFor="email">Email: </label>
							<input type="email" className="form-control email" id="email" placeholder="example@mail.com" autocomplete="off" />
						</div>
					</div>
					
					<div className="form-group">
						<div className="input-wrapper">
							<label htmlFor="password">Choose a password: </label>
							<input type="password" className="form-control password" id="password" placeholder="••••••••" autocomplete="off" onChange={inputChange} />
						</div>
					</div>

					<div className="form-group">
						<div className="input-wrapper">
							<label htmlFor="password-retype">Retype password: </label>
							<input type="password" className="form-control password-retype" id="password-retype" placeholder="••••••••" autocomplete="off" onChange={inputChange} />
						</div>
					</div>
					
					<div className="form-group">
						<div className="input-wrapper">
							<input type="checkbox" className="checkbox terms" name="terms" id="terms" />
							<label htmlFor="terms">I agree to the <a href="#">Terms &amp; Conditions</a></label>
						</div>
					</div>


				</div>
				<div>
					<button className="btn btn-primary btn-register">Sign up</button>
				</div>

			</div>
		)
	}
}

export default SignupForm;

function inputChange() {
	document.getElementById('password').style.boxShadow = '';
}