"use client";

import React from "react";
// import {BsFillArchiveFill} from react;
const Cards= () => {
  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Induction Target</h3>
            {/* <BsFillArchiveFill className='card_icon'/> */}
          </div>
          <h3>300</h3>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total Inducted</h3>
            {/* <BsFillGrid3X3GapFill className='card_icon'/> */}
          </div>
          <h3>300</h3>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>To Mobilize</h3>
            {/* <BsPeopleFill className='card_icon'/> */}
          </div>
          <h3>300</h3>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total Mobilized</h3>
            {/* <BsFillBellFill className='card_icon'/> */}
          </div>
          <h3>300</h3>
        </div>
      </div>
    </main>
  );
};

export default Cards;
