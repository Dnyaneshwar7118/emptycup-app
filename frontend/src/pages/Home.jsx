import React, { useEffect, useState } from "react";
import StudioCard from "../components/StudioCard";
import "./../App.css";

const Home = () => {
  const [studios, setStudios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/studios")
      .then((res) => res.json())
      .then((data) => setStudios(data))
      .catch((err) => console.error("Failed to load studios", err));
  }, []);

  return (
    <div className="container">
      <div className="header">EmptyCup</div>
      {studios.map((studio) => (
        <StudioCard key={studio.id} studio={studio} />
      ))}
    </div>
  );
};

export default Home;
