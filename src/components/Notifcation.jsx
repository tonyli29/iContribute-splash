import React from "react";
import placeholder from "../img/Group 872.png"
import Check from "../img/check-mark.png"


const Notification = ({ closeToast }) => {
  return (
    <div className="notification-container">
        <img id="check" src={Check}/>
        <div>
            <h1>Thank you!</h1>
            <p>We've added your email to our list.</p>
        </div>
    </div>
  );
};

export default Notification;