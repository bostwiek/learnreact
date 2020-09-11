import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import AOS from 'aos'

import 'aos/dist/aos.css'
import './css/test.css';

function Example() {

	useEffect(() => {
		AOS.init({ duration: 500 })
	}, []);

	// syntax for useState - functions can access application state
	const [count, setCount] = useState(0);

  return (
		<>

			<h1>Animate on scroll tests!</h1>

			<div data-aos="fade-left" className="box">
				<p
					data-aos="fade-zoom-left"
					data-aos-delay="300"
					data-aos-duration="1000"
					data-aos-offset="0"
					data-aos-anchor-placement="center-center"
					data-aos-easing="ease-in-back"
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
					data-aos-delay="900"
				>
					900
				</p>
				<p data-aos="fade-up" data-aos-delay="1200">You clicked the button {count} times</p>
				<button data-aos="fade-up" data-aos-delay="1500" onClick={()=>{setCount(count + 1)}}>Press me</button>
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
