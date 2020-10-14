import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
    };
  }

  render() {
    return (
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar} alt='photo de profil' />
        <div
          onClick={() => {
            const onlineStatus = !this.state.online;
            this.setState({ online: onlineStatus });
          }}
          className='name'
        >
          <p>{this.props.name}</p>
          <div className='status'>
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            ></div>
            <p className='status-text'>
              {this.state.online ? "online" : "offline"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
