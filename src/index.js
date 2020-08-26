import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import AOS from 'aos'

import 'aos/dist/aos.css'
import './css/test.css';

// sass tests:


function Example() {

	useEffect(() => {
		AOS.init({ duration: 500 })
	}, []);

  return (
		<>

				{/*

					data-aos="fade-up"
						fade-up-right
						fade-zoom-in
						flip-left
						zoom-in
						zoom-in-left
						zoom-out-left
						
					data-aos-easing="ease-in-back"
						linear
						ease-in-sine
						ease-in-back
						ease-out-cubic
					
					data-aos-anchor-placement="center-center"
						top-center
						bottom-left
						top-bottom (???)

					data-aos-duration="1500"

					data-aos-offset="300"

					data-aos-delay="300"


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
