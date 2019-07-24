import "./UserFavoriteDest.css";

import React from "react";

const UserFavoriteDest = ({ destinations, handleDelete }) => {
  return (
    <div className="destination-result-container">
      {destinations &&
        destinations.map((one, index) => {
          return (
            <div className="destination-result" key={index}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt="img"
                />
              </div>
              <div>{one}</div>
              <button onClick={() => handleDelete(index)}>x</button>
            </div>
          );
        })}
    </div>
  );
};

export default UserFavoriteDest;
