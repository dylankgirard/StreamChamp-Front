import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Carousel, Container } from 'react-bootstrap';
import { TwitchEmbed } from 'react-twitch-embed';

class FrontCarousel extends Component {
	render() {
		return (
			
				<Carousel interval={null} controls={false}>
					<Carousel.Item>
						<TwitchEmbed
							channel='lirik'
							id='lirik'
							theme='dark'
							width='100%'	
							muted
							withChat={false}
							autoplay={false}
							onVideoPause={() => console.log(':(')}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<TwitchEmbed
							channel='elajjaz'
							id='elajjaz'
							theme='dark'							
							width='100%'
							muted
							withChat={false}
							autoplay={false}
							onVideoPause={() => console.log(':(')}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<TwitchEmbed
							channel='shroud'
							id='shroud'
							theme='dark'
							width='100%'
							muted
							withChat={false}
							autoplay={false}
							onVideoPause={() => console.log(':(')}
						/>
					</Carousel.Item>
				</Carousel>
			
		);
	}
}

export default FrontCarousel;
