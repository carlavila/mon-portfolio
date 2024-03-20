import React from "react";
import Navigation from "../../components/Navbar/Navigation";
import Presentation from "../../components/Presentation/Presentation";
import Propos from "../../components/Propos/Propos";
import Knowledges from "../../components/Knowledges/Knowledges";
import Copyright from "../../components/Copyright/Copyright";
import "../Home/home.css";

function Home() {
  return (
    <div className="Home">
      <Navigation />
      <Presentation />
      <Propos />
      <Knowledges />
    </div>
  );
}

export default Home;
