import React from 'react'

import Logo from './Logo'
import LoginForm from './LoginForm'

class LoginPage extends React.Component {

	// our form logic will look like this
		// check if the form has been filled out
			// if missing fields, gray out / append class disabled to btn-login
		// if form has been filled out
			// if email field does not qualify as email
				// show submit-bad class
				// append disabled to btn-login
			// if password too short
				// same as above
			// if form is correct
				// show submit-good class on button
					// load "login" popup (eventually new page)


	render() {

		return(
			
      <div className="container-fluid">
				<div className="row">

					<div className="col-12 col-sm-7 col-md-6 col-lg-5 col-left">
						<div className="login-container">
							
							<Logo />
							<LoginForm pageChange={this.props.pageChange} showPage={this.props.showPage} />

						</div>
					</div>

					<div className="col-sm-5 col-md-6 col-lg-7 col-right">
						<div className="illustration" alt="Illustration" style={this.props.backgroundImg}>
						</div>
					</div>

				</div>
      </div>

		)
	}
}

export default LoginPage;