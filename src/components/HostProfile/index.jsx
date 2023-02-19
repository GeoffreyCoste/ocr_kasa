import React from 'react';
import './style.scss';

const HostProfile = ({ name, img }) => {
  return (
    <div className="host-profile">
      <p className="host-profile__name">{name}</p>
      <img className="host-profile__img" src={img} alt={name} />
    </div>
  );
};

export default HostProfile;
