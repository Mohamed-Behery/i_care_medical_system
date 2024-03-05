import React from "react";
import styles from "./Message.module.css";
import chatImg from "./../../images/chat-img.jpg";
import doctorImg from "./../../images/profile.svg";

const Message = ({ doctor }) => {
  return (
    <div className={`${styles.message} ${doctor ? styles.doctor : ""}`}>
      <div className={styles.messageContent}>
        <img src={doctor ? doctorImg : chatImg} alt="Sender" />
        <div>
          <p>This is a message !!</p>
          <div className={styles.messageTime}>1 hour ago</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
