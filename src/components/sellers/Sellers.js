import React from "react";
import "./Sellers.css";
import Buttons from "../Buttons/Buttons";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";

function Sellers() {
  return (
    <div className="sellers flex">
      <div className="top-sellers">
        <div className="heading flex">
          <h1>Top Saller</h1>
          <Buttons />
        </div>
      
      <div className="card flex">
        <div className="users">
          <img src={user1} />
          <img src={user2} />
          <img src={user3} />
          </div>
          <div className="card-text">
            <span>574 HeadPhonsSold</span>
            <small>21 Saller<span className="data">7days</span></small>
          </div>
        
      </div>
      </div>

      <div className="featured-sellers">
        <div className="heading flex">
          <h1>featured sellers</h1>
          <Buttons />
        </div>
      
      <div className="card flex">
        <div className="users">
          <img src={user1} />
          <img src={user2} />
          <img src={user3} />
          </div>
          <div className="card-text">
            <span>574 HeadPhonsSold</span>
            <small>21 Saller<span className="data">7days</span></small>
          </div>
        
      </div>
      </div>
    </div>
  );
}

export default Sellers;
