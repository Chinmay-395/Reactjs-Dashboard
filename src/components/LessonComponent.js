import React from "react";
import lessonData from "./data/lesson_data";
// import CardComponent from "./hocs/CardComponent";

export const ComponentStructure = () => {
  return (
    <table style={{ width: "100%" }} className="table">
      <thead>
        <tr>
          <th>Date & Time</th>
          <th>Subject</th>
          {/**Topic will be title and subject will be sub-title */}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {lessonData.map((lesson, index) => {
          return (
            <React.Fragment key={index}>
              <tr>
                <td>{lesson.date}</td>
                <td>
                  <p>
                    {lesson.subject}
                    <br />
                    {lesson.topic}
                  </p>
                </td>
                <td>{lesson.pic}</td>
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};
function LessonComponent() {
  const style = {
    width: "100%",
  };
  return (
    <>
      {/* <CardComponent card_style={style} custom_comp={ComponentStructure} /> */}
    </>
  );
}

export default LessonComponent;
