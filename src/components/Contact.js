import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }

  render() {
    return (
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar} alt={this.props.name} />
        <div className='status'>
          <h4 className='name'>{this.props.name}</h4>
          <div
            className={this.state.online ? 'status-online' : 'status-offline'}
          ></div>
          <p
            className='status-text'
            onClick={(event) => {
              const newConnexion = !this.state.online;
              this.setState({ online: newConnexion });
            }}
          >
            {this.state.online ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
    );
  }
}
// const onlineStatus = document.querySelector('.statusCircle');
// onlineStatus.classList.add('.status-online')
//   ? customer.online
//   : onlineStatus.classList.add('.status-offline');

Contact.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

export default Contact;
