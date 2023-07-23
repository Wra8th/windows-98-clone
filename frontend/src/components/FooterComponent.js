import React from "react";
import styles from "./FooterComponent.module.css"
import "98.css"
import start from "../assets/icons/start.png"
const Footer = () => {
    return(
    <div >
        <div class="window" role="tabpanel" id={styles.toolbar}>
            <div class="window-body">
                <button> 
                    <img src={start}></img>
                </button>
            </div>
            <div class="window-body">
                <button>I am being pressed</button>
            </div>
        </div>
    </div>
    )
}

export default Footer