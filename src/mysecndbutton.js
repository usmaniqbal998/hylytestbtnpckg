import React from "react";
import PropTypes from "prop-types";
import "./buttons.css";

const MyButtonSecoand = ({ handleClick, _class, content }) => {
  return (
    /**
     * Use `Badge` to highlight key info with a predefined status.
     */
    <button onClick={() => handleClick()} className="secondary">
      {content}
    </button>
  );
};

MyButtonSecoand.propTypes = {
  _class: PropTypes.string,
  handleClick: PropTypes.func,
};

MyButtonSecoand.defaultProps = {
  _class: "primary_btn",
  handleClick: "null",
};

export default MyButtonSecoand;
