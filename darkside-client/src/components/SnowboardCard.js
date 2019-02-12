import React from 'react';

const SnowboardCard = ({ snowboard }) => (
  <div key={snowboard.id} className="SnowboardCard">
    <h3>{snowboard.name}</h3>
    <p>Price: ${snowboard.price}</p>
    <img className="SnowboardImage" src={snowboard.img_url} alt={snowboard.name} />
    <p>Length: {snowboard.length} cm</p>
  </div>
)

export default SnowboardCard;