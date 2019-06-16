import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import io from 'socket.io-client';
import styles from './App.css';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import UsersList from './UsersList';
import UserForm from './UserForm';

const socket = io('/');

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {users: [], messages: [], text: '', name: ''};
    }

    componentDidMount() {
        socket.on('message', message => this.messageReceive(message));
        socket.on('update', ({users}) => this.chatUpdate(users));
        socket.on('deleteMsg', messageId => this.removeMessage(messageId));
    }

    messageReceive(message) {
        const messages = [message, ...this.state.messages];
        this.setState({messages});
    }

    chatUpdate(users) {
        this.setState({users});
    }

    removeMessage(messageId) {
      const messages = this.state.messages.filter(message => message.id !== messageId);
      this.setState({messages});
    }

    removeMessageHandler(messageId) {
      socket.emit('deleteMsg',messageId);
      this.removeMessage(messageId);
    }

    handleMessageSubmit(message) {
        const messages = [message, ...this.state.messages];
        this.setState({messages});
        socket.emit('message', message);
    }

    handleUserSubmit(name) {
        this.setState({name});
        socket.emit('join', name);
    }

    render() {
        return this.state.name !== '' ? this.renderLayout() : this.renderUserForm();
    }
    renderUserForm() {
        return (<UserForm onUserSubmit={name => this.handleUserSubmit(name)} />)
    }

    renderLayout() {
        return (
           <div className={styles.App}>
             <div className={styles.AppHeader}>
               <div className={styles.AppTitle}>
                 ChatApp
               </div>
               <div className={styles.AppRoom}>
                 App room
               </div>
             </div>
             <div className={styles.AppBody}>
               <UsersList
                 users={this.state.users}
               />
               <div className={styles.MessageWrapper}>
                 <MessageList
                   messages={this.state.messages}
                   name={this.state.name} 
                   removeMessage={messageId => this.removeMessageHandler(messageId)}
                 />
                 <MessageForm
                   onMessageSubmit={message => this.handleMessageSubmit(message)}
                   name={this.state.name}
                 />
               </div>
             </div>
           </div>
        );
    }
};



export default hot(module)(App);