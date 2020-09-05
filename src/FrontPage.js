import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import FrontCarousel from './FrontCarousel'

function FrontPage(props) {
        return(
            <Container>
                <p>Welcome to the Front Page!</p>
                <FrontCarousel topStreams={props.topStreams}/>
            </Container>
        )
    }

export default FrontPage;
