import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { TwitchEmbed, TwitchChat } from 'react-twitch-embed';
import './ViewPage.css'

function ViewPage(props) {
	// console.log(props.streamName);
	return (
		<Container className='mt-2 pb-4'>
			<h1 className='mb-3'>
				Now Watching: <span className='streamer'>{props.streamName}</span>
			</h1>
			<TwitchEmbed
				id={props.streamName}
				channel={`${props.streamName}`}
				autoplay={false}
				theme='dark'
				width='100%'
				muted
				withChat={false}
			/>
			<TwitchChat channel={`${props.streamName}`} theme='dark' width='100%' />
			<Link to='/browse'>
				<Button variant='outline-primary' className='mt-3'>
					Back To Browse
				</Button>
			</Link>
		</Container>
	);
}

export default ViewPage;
