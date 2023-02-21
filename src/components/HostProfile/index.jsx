import React from 'react';
import './style.scss';

const HostProfile = ({ name, img }) => {
  const fullName = name.split(' ');
  const firstName = fullName[0];
  const lastName = fullName[1];
  return (
    <div className="host-profile">
      <div className="host-profile__name">
        <p className="host-profile__firstName">{firstName}</p>
        <p className="host-profile__lastName">{lastName}</p>
      </div>
      <img className="host-profile__img" src={img} alt={name} />
    </div>
  );
};

export default HostProfile;
