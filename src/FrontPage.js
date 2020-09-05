import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import FrontCarousel from './FrontCarousel'

function FrontPage(props) {
    console.log(props.topStreams);
        return(
            <Container>
                <p>Welcome to the Front Page!</p>
                <FrontCarousel topStreams={props.topStreams}/>
            </Container>
        )
    }

export default FrontPage;
