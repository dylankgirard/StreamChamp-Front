import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'

class FrontPage extends Component {
    render() {
        return(
            <Container>
                <p>Welcome to the Front Page!</p>
            </Container>
        )
    }
}

export default FrontPage;
