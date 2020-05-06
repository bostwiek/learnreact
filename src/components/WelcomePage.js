import React from 'react'

import Logo from './Logo'
import LoginForm from './LoginForm'

class WelcomePage extends React.Component {


	render() {

		return(
			
      <div className="container-fluid">
				<div className="row">

					<div className="col-12 col-sm-7 col-md-6 col-lg-5 col-left">
						<div className="welcome-container">
							<h1>Welcome!</h1>
						</div>
					</div>

				</div>
      </div>

		)
	}
}

export default WelcomePage;