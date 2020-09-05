import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { TwitchEmbed } from 'react-twitch-embed';
import { render } from '@testing-library/react';

function FrontCarousel(props) {
	
		let topStreams = props.topStreams;
		if (topStreams.length === 0) {
			return null;
		}
		let streamerOne = topStreams.data[0].user_name;
		let streamerTwo = topStreams.data[1].user_name;
		let streamerThree = topStreams.data[2].user_nameTwo;
		console.log(streamerTwo);
		return (
			<Carousel interval={null} controls={false}>
				<Carousel.Item>
					<TwitchEmbed
						channel={`${streamerOne}`}
						theme='dark'
						width='100%'
						muted
						withChat={false}
						autoplay={false}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<TwitchEmbed
						channel={`${streamerTwo}`}
						theme='dark'
						width='100%'
						muted
						withChat={false}
						autoplay={false}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<TwitchEmbed
						channel={`${streamerThree}`}
						theme='dark'
						width='100%'
						muted
						withChat={false}
						autoplay={false}
					/>
				</Carousel.Item>
			</Carousel>
		);
	
}

export default FrontCarousel;
