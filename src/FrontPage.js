import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import FrontCarousel from './FrontCarousel'

class FrontPage extends Component {
    render() {
        
        return(
            <Container>
                <p>Welcome to the Front Page!</p>
                <FrontCarousel/>
            </Container>
        )
    }
}

export default FrontPage;
