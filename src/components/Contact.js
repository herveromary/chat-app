import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <div className='Contact'>
      <img className='avatar' src={props.image} alt='photo de profil' />
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

Contact.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default Contact;
