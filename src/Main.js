import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css'
import './Animations.css'

import Illustration from './images/a.jpg'

class Main extends React.Component {

	constructor() {
		super();

		this.state = {
			page: 'login',
			showPage: true
		}

		this.pageChange = this.pageChange.bind(this);
	}

	pageChange() {
		(this.state.page == 'login') ? 
		this.setState({ page: 'signup' }) :
		this.setState({ page: 'login'})
	}
  

  render() {

		const backgroundImg = {
      backgroundImage: `url(${Illustration})`
		}
 
    return(
			<>

				<CSSTransition
					in={true}
					appear={true} 
					timeout={1000}
					classNames="fade"
				>

					{/* Checks if state.page is 'login', displays <LoginPage /> if so, otherwise <SignupPage /> */}
					{(this.state.page == 'login') ?
						<LoginPage backgroundImg={backgroundImg} pageChange={this.pageChange} showPage={this.state.showPage} />:
						<SignupPage backgroundImg={backgroundImg} pageChange={this.pageChange} showPage={this.state.showPage} />
					}

				</CSSTransition>		
		
			</>
		)
  }
}

export default Main;