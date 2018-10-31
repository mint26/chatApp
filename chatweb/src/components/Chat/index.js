import React,{ Component } from 'react'; 
import ChatInput from './ChatInput'; 
import ChatScreen from './ChatScreen'; 
import './chat.css'; 

class Chat extends Component{

    render() {
        return (
            <div className="container chat-panel">
                <div className="row chat-screen-panel">
                    <ChatScreen></ChatScreen>
                </div>
                <div className="row">
                    <ChatInput></ChatInput>
                </div>
            </div>
        );
    }

}

export default Chat; 