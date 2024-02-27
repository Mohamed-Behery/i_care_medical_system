import React from "react";
import styles from "./Chat.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ChatCard from "../../components/chatCard/ChatCard";
import Message from "../../components/chatMessage/Message";

const Chat = () => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatMenu}>
        <div className={styles.chatMenuWrapper}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search ..." />
            <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
          </div>
          <div className={styles.chatList}>
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
        </div>
      </div>
      <div className={styles.chatBox}>
        <div className={styles.chatBoxWrapper}>
          <div className={styles.messagesWrapper}>
            <Message />
            <Message doctor={true} />
            <Message />
            <Message doctor={true} />
            <Message doctor={true} />
            <Message />
            <Message doctor={true} />
            <Message />
            <Message doctor={true} />
            <Message />
            <Message doctor={true} />
            <Message />
            <Message />
            <Message doctor={true} />
            <Message doctor={true} />
            <Message />
            <Message doctor={true} />
            <Message />
            <Message />
            <Message doctor={true} />
            <Message doctor={true} />
            <Message />
            <Message doctor={true} />
          </div>
          <div className={styles.sendMessage}>
            <input type="text" placeholder="Type something ..." />
            <button>Send</button>
          </div>
        </div>
      </div>
      <div className={styles.chatDetails}>
        <div className={styles.chatDetailsWrapper}>Details</div>
      </div>
    </div>
  );
};

export default Chat;
