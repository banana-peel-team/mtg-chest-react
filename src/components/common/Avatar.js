import React from 'react';
import { string } from 'prop-types';

const defaultAvatar = require('../../assets/images/defaultAvatar.png');

const Avatar = ({ url = defaultAvatar }) => (
  <div className="avatar-container">
    <img src={url} alt="Avatar" className="avatar" />
  </div>
);

Avatar.propTypes = {
  url: string
};

export default Avatar;
