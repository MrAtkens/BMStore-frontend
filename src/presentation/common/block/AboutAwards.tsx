import React, { Component } from 'react';

import Slider from 'react-slick';
import Link from 'next/link';

class AboutAwards extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const carouselSetting = {
			dots: false,
			arrows: false,
			infinite: true,
			speed: 100,
			slidesToShow: 5,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 1366,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 3,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
						infinite: true,
						dots: true,
						arrows: false
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
						dots: true,
						arrows: false
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						dots: true,
						arrows: false
					}
				}
			]
		};
		return (
			<div className="ps-about-awards">
				<div className="container">
					<div className="ps-section__header">
						<h4>О нас здесь</h4>
						<p>Мы на рынке давно, качество</p>
					</div>
					<div className="ps-section__content">
						<Slider {...carouselSetting} className="ps-carousel">
							<div className="item">
								<Link href="/">
									<a>
										<img
											src="/static/img/about/1.webp"
											alt="martfury"
										/>
									</a>
								</Link>
							</div>
							<div className="item">
								<Link href="/">
									<a>
										<img
											src="/static/img/about/2.webp"
											alt="martfury"
										/>
									</a>
								</Link>
							</div>
							<div className="item">
								<Link href="/">
									<a>
										<img
											src="/static/img/about/3.webp"
											alt="martfury"
										/>
									</a>
								</Link>
							</div>
							<div className="item">
								<Link href="/">
									<a>
										<img
											src="/static/img/about/4.webp"
											alt="martfury"
										/>
									</a>
								</Link>
							</div>
							<div className="item">
								<Link href="/">
									<a>
										<img
											src="/static/img/about/5.webp"
											alt="martfury"
										/>
									</a>
								</Link>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutAwards;
