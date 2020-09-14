import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import FrontCarousel from './FrontCarousel';

function FrontPage(props) {
	return (
		<Container className='mt-2'>
			<h1 className='mb-3'>Welcome To Stream-Champ</h1>
			<FrontCarousel topStreams={props.topStreams} />
			<Link to='/browse'>
				<Button variant='outline-primary' className='mt-3 mb-3'>
					Browse Top Twitch Streams
				</Button>
			</Link>
		</Container>
	);
}

export default FrontPage;
