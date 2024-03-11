import React, { useState } from "react";
import styles from "./Profile.module.css";
import profileImg from "./../../images/profile.svg";
import Login from "../../pages/Auth/Login";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleGoogleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <>
      <h2 className={styles.profileTitle}>Profile Info</h2>


      <div className={styles.profileWrapper}>
        <div className={styles.profileInfoWrapper}>
          {user ? (
            <div>
              <img src={user.imageUrl} alt="Profile" />
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
            </div>
          ) : (
            <div>
              <p>Please log in with Google to view your profile.</p>
              <Login onGoogleLogin={handleGoogleLogin} />
            </div>
          )}
          <div className={styles.infoLeft}>
            <div className={styles.imgWrapper}>
              <img src={profileImg} alt="Profile" />
              <input
                type="file"
                title="Upload New Profile Picture"
                name="profile-img"
                id="profile-img"
                disabled={!isEditing}
                />
            </div>
            <div className={styles.nameInput}>
              <div>
                <label htmlFor="first-name">First Name</label> <br />
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  value="Carter"
                  disabled={!isEditing}
                />
              </div>
              <div>
                <label htmlFor="last-name">Last Name</label> <br />
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  value="Smith"
                  disabled={!isEditing}
                />
              </div>
            </div>
            <label htmlFor="specialty">Specialty</label>
            <select name="specialty" id="specialty" disabled={!isEditing}>
              <option value="dermatology">Dermatology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="neurology">Neurology</option>
              <option value="internal-medicine">Internal Medicine</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="ophthalmology">Ophthalmology</option>
              <option value="gynecology">Obstetrics and Gynecology</option>
              <option value="cardiology">Cardiology</option>
              <option value="urology">Urology</option>
              <option value="radiology">Radiology</option>
            </select>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="Country"
              value="Egypt"
              disabled={!isEditing}
            />
            <label htmlFor="city">City</label>
            <input type="text" id="city" value="Cairo" disabled={!isEditing} />
          </div>
          <div className={styles.infoRight}>
            <label htmlFor="phone">Phone Number</label>
            <div className={styles.phoneInput}>
              <input
                id="countryCode"
                name="countryCode"
                className={styles.countryCode}
                type="text"
                value="+20"
                disabled={!isEditing}
              />
              <input
                id="phone"
                name="phone"
                type="text"
                value="01012345678"
                disabled={!isEditing}
              />
            </div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value="example@gmail.com"
              disabled={!isEditing}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value="******"
              disabled={!isEditing}
            />
            <div className={styles.buttonContainer}>
              {!isEditing ? (
                <button onClick={handleEditClick}>Edit Profile</button>
              ) : (
                <button onClick={handleSaveClick}>Save Changes</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
