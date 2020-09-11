import React from 'react';
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
	let streamerThree = topStreams.data[2].user_name;
	let streamerFour = topStreams.data[3].user_name;
	let streamerFive = topStreams.data[4].user_name;
	return (
		<Carousel interval={null} controls={false} touch={true}>
			<Carousel.Item>
				<TwitchEmbed
					id={`${streamerOne}`}
					channel={`${streamerOne}`}
					autoplay={false}
					theme='dark'
					width='100%'
					muted
					withChat={false}
				/>
			</Carousel.Item>
			<Carousel.Item>
				<TwitchEmbed
					id={`${streamerTwo}`}
					channel={`${streamerTwo}`}
					autoplay={false}
					theme='dark'
					width='100%'
					muted
					withChat={false}
				/>
			</Carousel.Item>
			<Carousel.Item>
				<TwitchEmbed
					id={`${streamerThree}`}
					channel={`${streamerThree}`}
					autoplay={false}
					theme='dark'
					width='100%'
					muted
					withChat={false}
				/>
			</Carousel.Item>
			<Carousel.Item>
				<TwitchEmbed
					id={`${streamerFour}`}
					channel={`${streamerFour}`}
					autoplay={false}
					theme='dark'
					width='100%'
					muted
					withChat={false}
				/>
			</Carousel.Item>
			<Carousel.Item>
				<TwitchEmbed
					id={`${streamerFive}`}
					channel={`${streamerFive}`}
					autoplay={false}
					theme='dark'
					width='100%'
					muted
					withChat={false}
				/>
			</Carousel.Item>
		</Carousel>
	);
}

export default FrontCarousel;
