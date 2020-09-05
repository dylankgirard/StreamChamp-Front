import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap'
import FrontCarousel from './FrontCarousel'

function FrontPage(props) {
        return (
					<Container>
						<h2>Welcome to StreamChamp</h2>
						<FrontCarousel topStreams={props.topStreams} />
						<Link to='/browse'>
							<h3>Browse Top Streams</h3>
						</Link>
					</Container>
				);
    }

export default FrontPage;
