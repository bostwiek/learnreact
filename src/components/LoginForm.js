import React from 'react';
import MailIcon from '../images/mail1.png';
import LockIcon from '../images/lock1.png';

class LoginForm extends React.Component {
	render() {

		return(
			<div className="form-container">

				<div className="header-container">
					<h3>Log in to your account</h3>
				</div>

				<div className="input-height">
					<div className="form-group">
						<div className="input-wrapper">
							{/* <label forHtml="email">Email Address</label> */}
							<input type="email" className="form-control username" id="email" placeholder="Username or email" autocomplete="disabled" />
							<img className="login-icon mail-icon" src={MailIcon} />
						</div>
						
					</div>

					<div className="form-group">
						<div className="input-wrapper">
							{/* <label forHtml="password">Password</label> */}
							<input type="password" className="form-control password" placeholder="Password" />
							<img className="login-icon lock-icon" src={LockIcon} />
						</div>					
					</div>

					<div className="sub-text forgot-pw">
						<a href="#">Forgot Password?</a>
					</div>
				</div>

				<div>
					<button className="btn btn-primary btn-login">Log in</button>
				</div>

				<div className="sub-text create-account">
					<a href="#"	>Don't have an account?  Create an account</a>
				</div>

			</div>
		)
	}
}

export default LoginForm;