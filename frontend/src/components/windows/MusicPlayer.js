import React from "react";
import "98.css";
import PropTypes from 'prop-types';
import mine from "./mine.jpg";
import styles from "./AboutMe.module.css"

const Music = () => {
  const [window, setWindow] = React.useState(true);
  return (
    <>
    { window &&
    <div 
    style={{ height:300, width: 500 }} className="window" >
      <div className="title-bar">
        <div className="title-bar-text">Music Player</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button onClick={() =>setWindow(false)} aria-label="Close"/>
          
        </div>
      </div>

      <div className="window-body">
        <p style={{ textAlign: "center" }}>Yash Lodhiya {window}</p>
      </div>
    </div>
}
    </>
  );
};


export default Music