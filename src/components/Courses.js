import React from "react";
import { courses_data } from "./data/courses_data";

const CardComponent = (props) => {
  return (
    <>
      <div className="card card-custom bg-white border-white border-0">
        <div
          className="card-custom-img"
          style={{
            backgroundImage:
              "url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)",
          }}
        ></div>
        <div className="card-custom-avatar">
          <img
            className="img-fluid"
            src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
            alt="Avatar"
          />
        </div>
        <div className="card-body" style={{ overflowY: "auto" }}>
          <h4 className="card-title">{props.title}</h4>
          {/*<p className="card-text">
            Card has minimum height set but will expand if more space is needed
            for card body content. You can use Bootstrap{" "}
             <a
              href="https://getbootstrap.com/docs/4.0/components/card/#card-decks"
              target={"_blank"}
            >
              card-decks
            </a>{" "}
            to align multiple cards nicely in a row.
          </p> */}
        </div>
        <div
          className="card-footer"
          style={{ background: " inherit", borderColor: "inherit" }}
        >
          <a href={"/#"} className="btn btn-primary">
            Option
          </a>
          <a href="/#" className="btn btn-outline-primary">
            Other option
          </a>
        </div>
      </div>
    </>
  );
};

function Courses() {
  console.log("course", courses_data);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <CardComponent title={"Math"} />
          </div>
          <div className="col-sm-6">
            <CardComponent title={"Computer-Science"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Courses;
