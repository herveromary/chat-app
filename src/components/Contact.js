import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className='Contact'>
      <img className='avatar' src={props.avatar} alt='photo de profil' />
      <div className='name'>
        <p>{props.name}</p>
        <div className='status'>
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>
          <p className='status-text'>{props.online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
