import React from "react";

function CardComponent(props) {
  console.log("PROPS", props);
  return (
    <div>
      <div style={props.card_style} className="card">
        <div className="card-body">{props.custom_comp()}</div>
      </div>
    </div>
  );
}

export default CardComponent;
