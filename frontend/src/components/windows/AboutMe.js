import React from "react";
import "98.css";
import PropTypes from 'prop-types';
import mine from "./mine.jpg";
import styles from "./AboutMe.module.css"

const About = () => {
  const [window, setWindow] = React.useState(true);
  return (
    <>
    { window &&
    <div 
    style={{ height:300, width: 500 }} className="window" >
      <div className="title-bar">
        <div className="title-bar-text">About Me</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button onClick={() =>setWindow(false)} aria-label="Close"/>
          
        </div>
      </div>

      <div className="window-body">
        <p style={{ textAlign: "center" }}>Yash Lodhiya {window}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
        <div className={styles.Details}>
              <div className="Details-data">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim nunc. Consequat nisl vel pretium lectus. Augue lacus viverra vitae congue eu consequat ac felis. Amet massa vitae tortor condimentum lacinia quis vel eros. Fusce id velit ut tortor pretium viverra suspendisse potenti.  </p>
              </div>
              <div className={styles.Detailsimg}>
                  <img src={mine}></img>
              </div>
        </div>
        </div>
      </div>
    </div>
}
    </>
  );
};


export default About