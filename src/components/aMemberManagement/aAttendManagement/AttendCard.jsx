// src/components/AttendManagement/AttendCard.jsx
import React from 'react';

const AttendCard = ({ name, status }) => {
  return (
    <div className="attend-card">
      <h3>{name}</h3>
      <p>{status}</p>
    </div>
  );
};

export default AttendCard;
