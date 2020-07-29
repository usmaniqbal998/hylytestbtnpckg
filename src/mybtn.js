import React from "react";
import PropTypes from "prop-types";
import "./buttons.css";

const MyButton = ({ handleClick, content }) => {
  return (
    /**
     * Use `Badge` to highlight key info with a predefined status.
     */
    <button onClick={() => handleClick()} className="primary">
      {content}
    </button>
  );
};

MyButton.propTypes = {
  _class: PropTypes.string,
  handleClick: PropTypes.func,
};

MyButton.defaultProps = {
  _class: "primary_btn",
  handleClick: "null",
};

export default MyButton;
