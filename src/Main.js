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

	pageChange(x) {
		this.setState({page: x});
	}
  

  render() {

		const backgroundImg = {
      backgroundImage: `url(${Illustration})`
		}

		const loadPage = () => {
			switch(this.state.page) {
				case 'login':
					return <LoginPage backgroundImg={backgroundImg} pageChange={this.pageChange} showPage={this.state.showPage} />
					break;
				case 'signup':
					return <SignupPage backgroundImg={backgroundImg} pageChange={this.pageChange} showPage={this.state.showPage} />
					break;
				case 'dashboard':
					alert('dashboard page goes here')	
					break;
			}
		}
 
    return(
			<>

				<CSSTransition
					in={true}
					appear={true} 
					timeout={1000}
					classNames="fade"
				>

					{loadPage}

				</CSSTransition>		
		
			</>
		)
  }
}

export default Main;