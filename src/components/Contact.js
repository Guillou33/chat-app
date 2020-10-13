import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <div className='Contact'>
      <img className='avatar' src={props.avatar} alt='customer-photo ' />
      <div className='status'>
        <h4 className='name'>{props.name}</h4>
        <div
          className={props.online ? 'status-online' : 'status-offline'}
        ></div>
        <p className='status-text'>{props.online ? 'Online' : 'Offline'}</p>
      </div>
    </div>
  );
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
