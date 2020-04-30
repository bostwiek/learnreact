import React from 'react'
import MailIcon from '../images/mail1.png'
import LockIcon from '../images/lock1.png'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

class LoginForm extends React.Component {

	constructor() {
		super();
		this.state = {
			btn: true,
			username: null,
			password: null
		}
	}

	render() {

		const flipBtn = () => {
			let x = !this.state.btn;
			this.setState({btn: x});
		}

		const checkUsername = e => {
			let typedText = e.target.value;
			let borderColor = '';
			if(typedText.includes('@')) {
				borderColor = 'green';
			} else {
				borderColor = 'red';
			}
			document.getElementById('email').style.borderBottomColor = borderColor;
		}
		const checkPassword = e => {
			let typedText = e.target.value;
			let borderColor = '';
			if(typedText.length > 7) {
				borderColor = 'green';
			} else {
				borderColor = 'red';
			}
			document.getElementById('password').style.borderBottomColor = borderColor;
		}

		return(
			<div className="form-container">

				<div className="header-container">
					<h3>Log in to your account</h3>
				</div>

				<div className="input-height">

					<div className="form-group">
						<div className="input-wrapper">
							<input type="email" className="form-control username" id="email" placeholder="Username or email" autoComplete="off" onBlur={checkUsername} />
							<img className="login-icon mail-icon" src={MailIcon} />
						</div>
					</div>

					<div className="form-group">
						<div className="input-wrapper">
							<input type="password" className="form-control password" id="password" placeholder="Password" onBlur={checkPassword} />
							<img className="login-icon lock-icon" src={LockIcon} />
						</div>					
					</div>

					<div className="form-group">
						<div className="input-wrapper sub-text">
							<input type="checkbox" className="checkbox" id="rememberLogin" name="rememberLogin" value="true" />
							<label htmlFor="rememberLogin">Remember Login?</label>
						</div>
					</div>

					<div className="sub-text forgot-pw">
						<a href="#">Forgot Password?</a>
					</div>

				</div>

				<div>
					<CSSTransition
						in={this.state.btn}
						classNames="btn-login"
						timeout={0}
					>
						<button className="btn btn-primary btn-login" onClick={flipBtn}>Sign In</button>

					</CSSTransition>
				</div>

				<div className="sub-text create-account">
					<a onClick={this.props.pageChange}>Don't have an account?  Create an account</a>
				</div>

			</div>
		)
	}
}

export default LoginForm;