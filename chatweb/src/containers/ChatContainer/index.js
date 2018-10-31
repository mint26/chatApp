import React, { Component } from 'react'; 
import './chatContainer.css'; 
import { Container, Row, Col } from 'reactstrap';
import List from './../../components/List'; 
import Chat from './../../components/Chat'; 
class ChatContainer extends Component {

    render(){
        return (
            <Container>
                <Row>
                    Header
                </Row>
                <Row>
                <Col><List/></Col>
                <Col><Chat/></Col>
                </Row>
            </Container>
        )
    }

}

export default ChatContainer;