import React from 'react';
import styles from './ContactStyles.module.css';
function Contact() {
  // console.log('Access Key:', process.env.REACT_APP_ACCESS_KEY);
  // console.log('Your key',AK);
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action='https://api.web3forms.com/submit' method='post'>
      <input type="hidden" name="access_key" value="911bc718-661c-472e-ab09-857001daae97"/>
        <div className="formGroup">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <input
            type="text"
            name="email"
            id="email"
            // placeholder="Email"
            value="sauravuyadav003@gmail.com"
            disabled
            required
          />
        </div>
        <div className="formGroup">
          <input
            type="text"
            name="email"
            id="youremail"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="formGroup">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
