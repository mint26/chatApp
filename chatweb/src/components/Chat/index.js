import React,{ Component } from 'react'; 
import { Container, Row } from 'reactstrap'; 
import ChatInput from './ChatInput'; 
import ChatScreen from './ChatScreen'; 

class Chat extends Component{

    render() {
        return (
            <Container>
                <Row>
                    <ChatScreen></ChatScreen>
                </Row>
                <Row>
                    <ChatInput></ChatInput>
                </Row>
            </Container>
        );
    }

}

export default Chat; 