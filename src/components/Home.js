import React from "react";
import styled from "styled-components";
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
      <div className="container">
        {/* First row with LESSONS TODOs & LEADERBOARD */}
        <div style={{ marginBottom: "1rem" }} className="row">
          <div className="col">
            {/* column 1 for Lessons */}
            <div className="card">
              <div className="card-header">UPCOMMING LESSONS</div>
              <div className="card-body">
                {/* <h5 className="card-title"></h5> */}
                <div className="row">row 1</div>
                <div className="row">row 2</div>
                <div className="row">row 3</div>
              </div>
              <div className="card-footer">Footer</div>
            </div>
          </div>
          <div className="col">
            {/* cloumn 2 ToDos */}
            <div className="card">
              <div className="card-header">TODOs</div>
              <div className="card-body">
                {/* <h5 className="card-title">TODOs</h5> */}
                <div className="row">row 1</div>
                <div className="row">row 2</div>
                <div className="row">row 3</div>
              </div>
              <div className="card-footer">Footer</div>
            </div>
          </div>
          <div className="col">
            {/* Column 3 Leaderboard */}
            <div className="card">
              <div className="card-header">LEADERBOARD</div>
              <div className="card-body">
                {/* <h5 className="card-title">LEADERBOARD</h5> */}
                <div className="row">row 1</div>
                <div className="row">row 2</div>
                <div className="row">row 3</div>
              </div>
              <div className="card-footer">Footer</div>
            </div>
          </div>
        </div>
        {/* Second Row with My-Courses and graphs occupying 2/3 and homework occupying 1/3*/}
        <div className="row">
          {/* 2/3 would be reserved for My-courses row and Graph row */}
          <div className="col-9">
            <div className="card">
              <div className="card-body">
                {/* Row 1 will use for My-Course */}
                <div className="row">
                  <div className="card">
                    <div className="card-header">MY COURSES</div>
                    <div className="card-body">
                      {/* <h5 className="card-title">MY COURSES</h5> */}
                      This card body is for <strong>My courses</strong>
                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
                    </div>
                  </div>
                </div>
                {/* Row 2 will use for Graph */}
                <div className="row">
                  <div className="card">
                    <div className="card-header">GRAPHS</div>
                    <div className="card-body">
                      {/* <h5 className="card-title">GRAPHS</h5> */}
                      This card body is for <strong>Graphs</strong>
                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 1/3 would be reserved for Homework progess */}
          <div className="col-3">
            <div className="card">
              <div className="card-header">HOMEWORK</div>
              <div className="card-body">
                <h5 className="card-title">HOMEWORK</h5>
                HomeWork progress
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  </GridWrapper>
);
