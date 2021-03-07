import React from "react";
import { LessonComponent, ComponentStructure } from "./LessonComponent";
import TodoComponent from "./TodoComponent";
//styles
import styled from "styled-components";
import LeaderBoard from "./LeaderBoard";
import Courses from "./Courses";
import GraphComponent from "./GraphComponent";
const GridWrapper = styled.div`
  display: grid;
  // grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  // grid-template-columns: repeat(12, 1fr);
  // grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
  <GridWrapper>
    <>
      {/* First row with LESSONS TODOs & LEADERBOARD */}
      <div style={{ marginBottom: "1rem" }} className="row">
        <div className="col">
          {/* column 1 for Lessons */}
          <div className="card">
            <div className="card-header">UPCOMMING LESSONS</div>
            <div className="card-body">
              {/* Each lesson row */}
              <ComponentStructure />
            </div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
        <div className="col">
          {/* cloumn 2 ToDos */}
          <div className="card">
            <div className="card-header">TODOs</div>
            <div className="card-body">
              <TodoComponent />
            </div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
        <div className="col">
          {/* Column 3 Leaderboard */}
          <div className="card">
            <div className="card-header">LEADERBOARD</div>
            <div className="card-body">
              <LeaderBoard />
            </div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
      </div>
      {/* Second Row with My-Courses and graphs occupying 2/3 and homework occupying 1/3*/}
      <div className="row">
        {/* 2/3 would be reserved for My-courses row and Graph row */}
        <div className="col-sm-9">
          <div style={{ border: "none" }} className="card">
            <div className="card-body">
              {/* Row 1 will use for My-Course */}
              <div className="row">
                <div
                  style={{
                    width: "100%",
                    marginBottom: "1rem",
                  }}
                  className="card"
                >
                  <div className="card-header">
                    <p style={{ textAlign: "left" }}>
                      MY COURSES
                      <span style={{ float: "right" }}>See All</span>
                    </p>
                  </div>
                  <div className="card-body">
                    <>
                      <Courses />
                    </>
                  </div>
                </div>
              </div>
              {/* Row 2 will use for Graph */}
              <div className="row">
                <div
                  style={{ width: "100%", marginBottom: "1rem" }}
                  className="card"
                >
                  <div className="card-header">GRAPHS</div>
                  <div className="card-body">
                    <GraphComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1/3 would be reserved for Homework progess */}
        <div className="col-sm-3">
          <div style={{ border: "none" }} className="card">
            <div className="card-body">
              <div className="row">
                <div
                  style={{
                    width: "100%",
                    marginBottom: "1rem",
                  }}
                  className="card"
                >
                  <div className="card-header">HOMEWORK</div>
                  <div className="card-body">
                    <h5 className="card-title">HOMEWORK</h5>
                    HomeWork progress
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  </GridWrapper>
);
