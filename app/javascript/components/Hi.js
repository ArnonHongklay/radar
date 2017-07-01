import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Hi = props =>
  <div>
    Hi {props.name}!
  </div>;

Hi.defaultProps = {
  name: "David"
};

Hi.propTypes = {
  name: PropTypes.string
};
//
// document.addEventListener("DOMContentLoaded", () => {
//   ReactDOM.render(
//     <Hi name="React" />,
//     document.body.appendChild(document.createElement("div"))
//   );
// });

export default Hi;
