import React from "react";
import { leader_data } from "./data/leader_data";
import "./LeaderBoardcss.css";
function LeaderBoard() {
  console.log("THE LEADER", leader_data);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Leader</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {leader_data.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.rank}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
