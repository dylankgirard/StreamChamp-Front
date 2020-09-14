import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import FrontCarousel from './FrontCarousel';

function FrontPage(props) {
	return (
		<Container>
			<h1>Welcome To Stream-Champ</h1>
			<FrontCarousel topStreams={props.topStreams} />
			<Link to='/browse'>
				<Button variant='outline-primary' className='mt-3'>
					Browse Top Streams
				</Button>
			</Link>
		</Container>
	);
}

export default FrontPage;
