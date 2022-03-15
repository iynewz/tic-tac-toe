import React from "react";
import CookieConsent from "react-cookie-consent";
import styles from "./milvusCookieConsent.module.css";

const MilvusCookieConsent = () => {
  return (
    // <section> className={styles.milvusCookieConsent}>
    <CookieConsent
      buttonText="Accept"
      disableStyles
      containerClasses={styles.cookieContainer}
      buttonClasses={styles.button}
      buttonWrapperClasses={styles.buttonWrapper}
      expires={150}
    >
      <div className={styles.textContainer}>
        <p className={styles.headerContent}>How we use cookies</p>
        <p className={styles.textContent}>
          By continuing to browse or by clicking ‘Accept’, you agree to the
          storing of cookies on your device to enhance your site experience and
          for analytical purposes. To learn more about how we use the cookies,
          please see our <a>cookies policy</a>.
        </p>
      </div>
    </CookieConsent>
  );
};

export default MilvusCookieConsent;
