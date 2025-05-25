import React from "react";
import "./../App.css";

const StudioCard = ({ studio }) => {
  const stars = "★".repeat(Math.floor(studio.rating)) + (studio.rating % 1 ? "½" : "");

  return (
    <div className="card">
      <h2>{studio.name}</h2>
      <div className="stars">{stars}</div>
      <p>Passionate team of 4 designers working out of Bangalore with an experience of {studio.experience} years.</p>

      <div className="info">
        <div className="infoWrapper">
          <p><strong>{studio.projects}</strong> Projects</p>
          <p><strong>{studio.experience}</strong> Years</p>
          <p><strong>{studio.price}</strong> Price</p>
        </div>
        <div>
          <p>{studio.phone1}</p>
          <p>{studio.phone2}</p>
        </div>
      </div>

      <div className="actions">
        <span>Details</span>
        <span>Hide</span>
        <span>Shortlist</span>
        <span>Call</span>
        <span>Report</span>
      </div>
    </div>
  );
};

export default StudioCard;
