import React from 'react';
import classes from './CloseButton.module.scss';

const CloseButton = ({ onClose }) => {
  return (
    <button className={classes.close} onClick={onClose} value=""/>
  )
};

export default CloseButton;