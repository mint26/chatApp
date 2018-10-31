import React, { Component } from 'react'; 
import './chatinput.css'; 

class ChatInput extends Component{

    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
          dropdownOpen: false,
          splitButtonOpen: false
        };
      }
    
    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit() {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    render(){
        return (
            <div className="container chat-input-panel">
                <div>
                    <input type="text" className="col-10"></input>
                    <button className="col-2 btn-default">Send</button>
                </div>
            </div>
        );
    }
    
}

export default ChatInput; 