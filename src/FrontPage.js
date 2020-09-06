import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap'
import FrontCarousel from './FrontCarousel'

function FrontPage(props) {
        return (
					<Container>
						<h2>Welcome to StreamChamp</h2>
						<FrontCarousel topStreams={props.topStreams} />
						<Link to='/browse'>
							<Button variant='outline-warning' className='mt-3'>
								Browse Top Streams
							</Button>
						</Link>
					</Container>
				);
    }

export default FrontPage;
