import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import profileImg from "./../../images/profile.svg";

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
          "http://icare44.infinityfreeapp.com/api/clinic"
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

  return (
    <>
      <>
        <h2 className={styles.profileTitle}>Profile Info</h2>
        {/* userData={doctorData} */}
        {/* userData={doctorData ? doctorData : {}} */}
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
              <label htmlFor="country">Country</label>
              <input type="text" id="Country" disabled={!isEditing} />
              <label htmlFor="city">City</label>
              <input type="text" id="city" disabled={!isEditing} />
            </div>
            <div className={styles.infoRight}>
              <label htmlFor="phone">Phone Number</label>
              <div className={styles.phoneInput}>
                <input
                  id="countryCode"
                  name="countryCode"
                  className={styles.countryCode}
                  type="text"
                  disabled={!isEditing}
                />
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  disabled={!isEditing}
                />
              </div>
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
    </>
  );
};

export default Profile;
