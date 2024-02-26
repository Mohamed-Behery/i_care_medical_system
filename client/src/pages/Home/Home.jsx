import React, { useState } from "react";
import styles from "./Home.module.css";
import doctorImg from "./../../images/hero-section-img.png";
import doctorsImg from "./../../images/about-section-img.png";
import doctorCard from "./../../images/doctor-services.png";
import pharmacyCard from "./../../images/pharmacy-services.png";
import labCard from "./../../images/lab-services.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const faqData = [
    {
      question: "How secure is the platform for storing patient data?",
      answer:
        "Our system ensures high security standards for storing patient data. We use encryption and secure servers to protect sensitive information.",
      isOpen: false,
    },
    {
      question:
        "Can I easily access patient records and history through the platform?",
      answer:
        "Yes, the system provides a user-friendly interface where you can easily access patient records, medical history, and treatment plans.",
      isOpen: false,
    },
    {
      question:
        " Is there a feature for real-time communication with patients?",
      answer:
        " Yes, the platform includes a real-time chat feature that allows doctors to communicate with patients directly, enabling quick responses and efficient care.",
      isOpen: false,
    },
  ];

  const [faqList, setFaqList] = useState(faqData);

  const toggleAccordion = (index) => {
    const updatedFaqList = faqList.map((item, id) => {
      if (id === index) {
        return { ...item, isOpen: !item.isOpen };
      } else {
        return { ...item, isOpen: false };
      }
    });
    setFaqList(updatedFaqList);
  };
  return (
    <>
      {/*  HERO SECTION  */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>
              Efficient medical <br /> management system
            </h1>
            <p>Helps the doctor in the management of reservations</p>
            <div className={styles.heroBtns}>
              <Link className={styles.signup} to="/signup">
                Sign up
              </Link>
              <Link className={styles.login} to="/login">
                Login
                <FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <img src={doctorImg} alt="Doctor" />
          </div>
        </div>
      </section>
      {/*  ABOUT US SECTION  */}
      <section className={styles.about} id="about">
        <div className={styles.container}>
          <h2>About us</h2>
          <div className={styles.aboutContent}>
            <div className={styles.left}>
              <img src={doctorsImg} alt="Doctor" />
            </div>
            <div className={styles.right}>
              <p>
                We are dedicated to providing an efficient clinic management
                system, streamlining healthcare processes for enhanced patient
                care.
              </p>
              <hr />
              <p>
                Our focus is on innovation, precision, and excellence in
                delivering comprehensive solutions for clinics,
                labs, and pharmacies.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  SERVICES SECTION  */}
      <section className={styles.services} id="services">
        <div className={styles.container}>
          <h2>Our Services</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src={doctorCard} alt="Doctor Services" />
              <h3>Doctor</h3>
              <p>
                A medical facility providing healthcare services to patients.
                Clinics serve as spaces for disease diagnosis, treatment, and
                initial examinations. They encompass a variety of medical
                specialties to meet diverse patient needs.
              </p>
            </div>
            <div className={styles.card}>
              <img src={pharmacyCard} alt="Pharmacy Services" />
              <h3>Pharmacy</h3>
              <p>
                A facility that dispenses medications and medical supplies.
                Pharmacists offer guidance on medication usage, determine
                appropriate dosages, and ensure the safety of medications.
                Pharmacies play a vital role in patient care, facilitating
                access to essential treatments.
              </p>
            </div>
            <div className={styles.card}>
              <img src={labCard} alt="Lab Services" />
              <h3>Laboratory</h3>
              <p>
                A medical laboratory is a facility where blood tests, urine
                analyses, and other diagnostic procedures are conducted.
                Laboratories aim to provide accurate results for disease
                diagnosis and ongoing monitoring of patients' health. Labs are
                considered cornerstone in healthcare delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  FAQ SECTION  */}
      <section className={styles.faq} id="faq">
        <div className={styles.container}>
          <h2>FAQ</h2>
          <div className={styles.faqWrapper}>
            {faqList.map((item, index) => (
              <div className={styles.accordionItem} key={index}>
                <div
                  className={styles.questionWrapper}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className={styles.question}>{item.question}</div>
                  <div className={styles.questionIcon}>
                    {item.isOpen ? "-" : "+"}
                  </div>
                </div>
                {item.isOpen && (
                  <div className={styles.accordionContent}>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
