import React, {Component} from 'react';
import uuid from 'uuid';
import styles from './MessageForm.css';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    const messageId = uuid();
    const message = {
      id : messageId,
      from : this.props.name,
      text : this.state.text,
      createAt : new Date().toTimeString().slice(0,8)
    };
    this.props.onMessageSubmit(message);
    this.setState({ text: '' });
  }

  changeHandler(e) {
    this.setState({ text : e.target.value });
  }

  render() {
    return(
      <form className={styles.MessageForm} onSubmit={e => this.handleSubmit(e)}>
        <input
          className={styles.MessageInput}
          onChange={e => this.changeHandler(e)}
          value={this.state.text}
          placeholder='Message'
        />
      </form>
    );
  }
}

export default MessageForm;