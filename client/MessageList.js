import React from 'react';
import styles from './MessageList.css';

const Message = props => (
  <div className={styles.Message}>
    <strong>{props.from} :</strong>
    <span>{props.text}</span>  
    <span className={styles.createAt}>{props.createAt}</span> 
 
  {props.from === props.userName ? <button className={styles.button} onClick={() => props.removeMessage(props.id)}>x</button>: null}
  </div> 
);

const MessageList = props => (
  <div className={styles.MessageList}>
    {
      props.messages.map((message, i) => {
        return (
          <Message
            key={i}
            id={message.id}
            userName={props.name}
            from={message.from}
            text={message.text}
            createAt={message.createAt}
            removeMessage={messageId => props.removeMessage(messageId)}
          />
        );
      })
    }
  </div>
);

export default MessageList;