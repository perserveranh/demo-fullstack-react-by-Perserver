import React, { Component } from 'react';

const Minute = ({ minutes }) => (
    <span>{minutes < 10 && '0'}{minutes}</span>)


export default Minute;
