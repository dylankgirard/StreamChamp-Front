import React from 'react';
import Container from 'react-bootstrap/Container';
import { TwitchEmbed, TwitchChat } from 'react-twitch-embed';

function ViewPage(props) {
	// console.log(props.streamName);
	return (
		<Container className='pb-4'>
			<h1>Now Watching: {props.streamName}</h1>
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
		</Container>
	);
}

export default ViewPage;
