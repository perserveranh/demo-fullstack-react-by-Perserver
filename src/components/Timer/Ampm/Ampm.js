import React, { Component } from 'react';

const Ampm = ({ hours }) => (
    <span>{hours >= 12 ? 'pm' : 'am'}</span>)
export default Ampm;
