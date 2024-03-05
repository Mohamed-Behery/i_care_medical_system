import React, { useState } from "react";
import styles from "./Chat.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ChatCard from "../../components/chatCard/ChatCard";
import Message from "../../components/chatMessage/Message";
import chatImg from "./../../images/chat-img.jpg";

const Chat = () => {
  const [showChats, setShowChats] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleMenu = () => {
    setShowChats(!showChats);
    setShowDetails(false);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    setShowChats(false);
  };
  return (
    <div className={styles.chatContainer}>
      <div className={styles.toggleBtns}>
        <button onClick={toggleMenu}>Chats</button>
        <button onClick={toggleDetails}>Patient Details</button>
      </div>
      <div className={`${styles.chatMenu} ${showChats && styles.show}`}>
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
      <div className={`${styles.chatDetails} ${showDetails && styles.show}`}>
        <div className={styles.chatDetailsWrapper}>
          <img src={chatImg} alt="Patient" />
          <div className={styles.chatDetailsText}>
            <h3>Mohamed Ahmed</h3>
            <p>online</p>
            <p>Reservation: Open</p>
            <p>example@gmail.com</p>
            <p>01012345678</p>
            <p>Cairo, Egypt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
