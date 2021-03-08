import React from "react";
import "./homework.css";
function Homework() {
  return (
    <>
      {/* <div className="container"> */}
      <div id="homework_card" className="card-homework">
        <div className="progress" style={{ width: "70%" }}></div>
        <div className="content">
          <h3>Math</h3>
          <p className="percentage">70%</p>
        </div>
      </div>

      {/* <div className="card-homework">
        <div className="progress" style={{ width: "30%" }}></div>
        <div className="content">
          <h3>Progress Card</h3>
          <p>Card which uses the background colour to show progress.</p>
          <p className="percentage">70%</p>
        </div>
      </div>
      <div className="card-homework">
        <div className="progress" style={{ width: "50%" }}></div>
        <div className="content">
          <h3>Progress Card</h3>
          <p>Card which uses the background colour to show progress.</p>
          <p className="percentage">70%</p>
        </div>
      </div> */}

      {/* </div> */}
    </>
  );
}
export default Homework;

const SampleComp = () => {
  return (
    <div>
      <div className="card">
        <ul className="list-container">
          <li style={{ "--color": " #A22AF1" }}>
            <div className="card-content">
              <h2>Operating System</h2>
              <span>10 Chapters</span>
              <div className="card-progress-container">
                <div className="card-progress-bar">
                  <div
                    className="card-progress-current"
                    style={{ "--current": " 73%" }}
                  >
                    <div></div>
                  </div>
                </div>
                <span className="card-progress-count">73%</span>
              </div>
            </div>
            <div className="card-icon"></div>
          </li>
          <li style={{ "--color": " #FFA500" }}>
            <div className="card-content">
              <h2>Object Oriented Programming</h2>
              <span>12 Chapters</span>
              <div className="card-progress-container">
                <div className="card-progress-bar">
                  <div
                    className="card-progress-current"
                    style={{ "--current": " 67%" }}
                  >
                    <div></div>
                  </div>
                </div>
                <span className="card-progress-count">67%</span>
              </div>
            </div>
            <div className="card-icon"></div>
          </li>
          <li style={{ "--color": " #FF69B4" }}>
            <div className="card-content">
              <h2>Computer Organization & Architecture</h2>
              <span>10 Chapters</span>
              <div className="card-progress-container">
                <div className="card-progress-bar">
                  <div
                    className="card-progress-current"
                    style={{ "--current": " 85%" }}
                  >
                    <div></div>
                  </div>
                </div>
                <span className="card-progress-count">85%</span>
              </div>
            </div>
            <div className="card-icon"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};
