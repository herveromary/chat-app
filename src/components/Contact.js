import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <figure className='Contact'>
      <img
        className='avatar'
        src='https://randomuser.me/api/portraits/women/91.jpg'
        alt='Nelson Muntz'
      />
      <figcaption className='status'>
        <blockquote className='name'>Jennifer Lopez</blockquote>
        <cite className='status-name'>Online</cite>
        <cite className='status-online'></cite>
      </figcaption>
    </figure>
  );
}

export default Contact;
