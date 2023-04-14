import React from "react";
import nietimg from "../../images/Hostel.jpg";
import Header from "../../components/Header/Header";
import "./DashBoard.css";
// import Footer from "../../components/Footer/Footer";
import NewFooter from "../../components/NewFooter/NewFooter";
const DashBoard = () => {
  return (
    <div className="dash">
      <Header />
      <img className="college-image" src={nietimg} alt="NIET"></img>
      <div className="footerNew">
        <NewFooter />
      </div>
    </div>
  );
};
export default DashBoard;
