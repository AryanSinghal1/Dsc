import React, { useState } from "react";

//import axios
import axios from "axios";

//bootstrap import
import { Modal } from "react-bootstrap";

//css import
import classes from "./Newsletter.module.css";
import classesDark from "./NewsletterDark.module.css";

//Png import
import NewsletterPng from "../../../assets/images/newsletter.png";

const NewsletterForm = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const validateEmail = (email) => {
    var result = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    setError("");
    if (result) {
      return true;
    } else return false;
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (validateEmail(email)) {
      axios
        .post(`https://dscakgec.herokuapp.com/newsletter`, {
          email,
        })
        .catch(function (error) {
          setError(error);
        });
      setShow(true);
    } else {
      if (email === "") {
        setError("Please enter your email");
      } else setError("Please enter a valid email");
    }
    setEmail("");
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <form className={styles.formArea}>
          <h2>Join Our Newsletter</h2>
          <p>latest information at your fingertips!.</p>
          <div className={styles.mainSection}>
            <input
              type="email"
              name="email"
              placeholder="abc@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Subscribe</button>
          </div>
        </form>
        {error && <p className={styles.errorEmail}>{error}</p>}
        <img src={NewsletterPng} alt="Newsletter" />
      </div>
      <Modal show={show} className={styles.modal}>
        <Modal.Body>
          Congratulations! You are subscribed to our newsletter.
        </Modal.Body>
        <Modal.Footer>
          <button className={styles.btn} onClick={() => setShow(false)}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewsletterForm;
