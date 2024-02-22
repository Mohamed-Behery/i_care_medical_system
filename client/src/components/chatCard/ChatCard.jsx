import React from "react";
import styles from "./ChatCard.module.css";
import chatImg from "./../../images/chat-img.jpg";

const ChatCard = () => {
  return (
    <div className={styles.chatCard}>
      <img src={chatImg} alt="Patient" />
      <div className={styles.cardContent}>
        <h4>Mohamed Ahmed</h4>
        <p>How are you?</p>
      </div>
      <span className={styles.time}>10:00 AM</span>
    </div>
  );
};

export default ChatCard;
