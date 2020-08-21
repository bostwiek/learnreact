import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Aos from 'aos'

import 'aos/dist/aos.css'
import './box.css';

function Example() {

	useEffect(() => {
		Aos.init({ duration: 500 })
	}, []);

  return (
		<>

			<h1>Animate on scroll tests!</h1>

			<div data-aos="fade-left" className="box"></div>
			<div data-aos="fade-right" className="box"></div>
			<div data-aos="fade-left" className="box"></div>
			<div data-aos="fade-right" className="box"></div>
			<div data-aos="fade-left" className="box"></div>


		</>
	);
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
