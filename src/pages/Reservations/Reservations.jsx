import React from "react";
import styles from "./Reservations.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Reservations = () => {
  return (
    <div className={styles.tableWrapper}>
      <h2 className={styles.reservationsTitle}>Reservations</h2>
      <table className={styles.reservationsTable}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Appointment Date & Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.evenRow}>
            <td>Mohamed</td>
            <td>Ahmed</td>
            <td>9876543210</td>
            <td>2024-02-19 at 12:00 AM</td>
            <td>
              <span className={[styles.status, styles.open].join(" ")}>
                Open
              </span>
            </td>
            <td>
              <button className={styles.accept}>Accept</button>
              <button className={styles.refuse}>Refuse</button>
              <button className={styles.btnDelete}>
                <FontAwesomeIcon icon={faTrash} className={styles.deleteIcon} />
              </button>
            </td>
          </tr>
          <tr className={styles.oddRow}>
            <td>Ahmed</td>
            <td>Ali</td>
            <td>0123456789</td>
            <td>2024-02-19 at 10:00 AM</td>
            <td>
              <span className={[styles.status, styles.open].join(" ")}>
                Open
              </span>
            </td>
            <td>
              <button className={styles.accept}>Accept</button>
              <button className={styles.refuse}>Refuse</button>
              <button className={styles.btnDelete}>
                <FontAwesomeIcon icon={faTrash} className={styles.deleteIcon} />
              </button>
            </td>
          </tr>
          <tr className={styles.evenRow}>
            <td>Mohamed</td>
            <td>Mahmoud</td>
            <td>9876543210</td>
            <td>2024-02-19 at 9:00 AM</td>
            <td>
              <span className={[styles.status, styles.completed].join(" ")}>
                Completed
              </span>
            </td>
            <td>
              <button className={styles.accept}>Accept</button>
              <button className={styles.refuse}>Refuse</button>
              <button className={styles.btnDelete}>
                <FontAwesomeIcon icon={faTrash} className={styles.deleteIcon} />
              </button>
            </td>
          </tr>
          <tr className={styles.oddRow}>
            <td>Mohamed</td>
            <td>Adel</td>
            <td>0123456789</td>
            <td>2024-02-19 at 11:00 AM</td>
            <td>
              <span className={[styles.status, styles.booked].join(" ")}>
                Booked
              </span>
            </td>
            <td>
              <button className={styles.accept}>Accept</button>
              <button className={styles.refuse}>Refuse</button>
              <button className={styles.btnDelete}>
                <FontAwesomeIcon icon={faTrash} className={styles.deleteIcon} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reservations;
