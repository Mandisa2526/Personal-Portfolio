import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Profile</h1>
      <p>This is my personal profile page.</p>
      <Link to="/about">Go to About Section</Link>
    </div>
  );
};

export default Home;
