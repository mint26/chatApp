import React, { Component } from 'react'; 
import './chatContainer.css'; 
import List from './../../components/List'; 
import Chat from './../../components/Chat'; 
class ChatContainer extends Component {

    render(){
        return (
            <div className="container chatContainer">
                <div className="row navbar bg-light">
                    Header
                </div>
                <div className="row chat-content">
                    <div className="col-4">
                        <List/>
                    </div>
                    <div className="col-8">
                        <Chat/>
                    </div>
                </div>
            </div>
        )
    }

}

export default ChatContainer;