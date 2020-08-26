import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Aos from 'aos'

import 'aos/dist/aos.css'
import './css/test.css';

// sass tests:


function Example() {

	useEffect(() => {
		Aos.init({ duration: 500 })
	}, []);

  return (
		<>
				{/*
					data-aos="fade-zoom-in"
					data-aos-easing="ease-in-back"
					data-aos-delay="300"
					data-aos-offset="0"
				*/}
			<h1>Animate on scroll tests!</h1>

			<div data-aos="fade-left" className="box">
				<p
					data-aos="fade-zoom-left"
					data-aos-delay="300"
				>
					300
				</p>
				<p
					data-aos="fade-zoom-left"
					data-aos-delay="600"
				>
					600
				</p>
				<p
					data-aos="fade-zoom-left"
					data-aos-delay="1000"
				>
					1000
				</p>
			</div>
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
