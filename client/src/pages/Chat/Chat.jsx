import React from "react";
import styles from "./Chat.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ChatCard from "../../components/chatCard/ChatCard";

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
        <div className={styles.chatBoxWrapper}>Box</div>
      </div>
      <div className={styles.chatDetails}>
        <div className={styles.chatDetailsWrapper}>Details</div>
      </div>
    </div>
  );
};

export default Chat;
