import React from 'react';
import Logo from './components/Logo';
import LoginForm from './components/LoginForm';
import Illustration from './images/a.jpg';

import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
  

  render() {

    const backgroundStyle = {
      backgroundImage: `url(${Illustration})`,
      backgroundPosition: 'center right',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '70% auto'
    }

 
    return(
      <div className="container-fluid">
        <div className="row">

          <div className="col-12 col-sm-7 col-md-6 col-lg-5 col-left">
            <div className="login-container">

              <Logo />
              <LoginForm />

            </div>
          </div>

          <div className="col-sm-5 col-md-6 col-lg-7 col-right">
            <div className="illustration" alt="Illustration" style={backgroundStyle}>
            </div>
          </div>

        </div>
      </div>
    )

  }

}

export default Main;