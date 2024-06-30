import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { faEye, faEyeSlash, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImg from "./../../images/profile.svg";

const Profile = ({ userData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [doctorData, setDoctorData] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (userData?.name) {
      const [first, last] = userData.name.split(" ");
      setFirstName(first);
      setLastName(last);
    }
  }, [userData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://icare48.000webhostapp.com/api/clinic"
        );
        const data = await response.json();
        console.log(data);
        setDoctorData(data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchData();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className="star"
      style={{ color: "#ffd700" }}
    />
  ));

  return (
    <>
      <>
        <h2 className={styles.profileTitle}>Profile Info</h2>
        {/* userData={doctorData}
        userData={doctorData ? doctorData : {}} */}
        <div className={styles.profileWrapper}>
          <div className={styles.profileInfoWrapper}>
            <div className={styles.infoLeft}>
              <div className={styles.imgWrapper}>
                <img src={userData?.picture || ""} alt="Profile" />
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
                    value={firstName || ""}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label htmlFor="last-name">Last Name</label> <br />
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    value={lastName || ""}
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
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={userData?.email || ""}
                disabled={!isEditing}
              />
              <label htmlFor="password">Password</label>
              <div className={styles.passwordContainer}>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  disabled={!isEditing}
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={togglePasswordVisibility}
                  className={styles.passwordToggle}
                />
              </div>
              <label htmlFor="certificate">
                Professional Practice Certificate
              </label>
              <div className="certificateWrapper">
                <img
                  src={profileImg}
                  className="certificateImg"
                  alt="certificate"
                />
                <input type="file" id="certificate" disabled={!isEditing} />
              </div>
            </div>
            <div className={styles.infoRight}>
              <label htmlFor="address">Address</label>
              <input type="text" id="address" disabled={!isEditing} />
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="text"
                disabled={!isEditing}
              />
              <label htmlFor="experience">Experience</label>
              <input type="text" id="experience" disabled={!isEditing} />
              <label htmlFor="work-time">Work Time</label>
              <input type="text" id="work-time" disabled={!isEditing} />
              <label htmlFor="description">Description</label>
              <input type="text" id="description" disabled={!isEditing} />
              <label htmlFor="rating">Rating</label>
              <div className="rating">{stars}</div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            {!isEditing ? (
              <button onClick={handleEditClick}>Edit Profile</button>
            ) : (
              <button onClick={handleSaveClick}>Save Changes</button>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default Profile;
