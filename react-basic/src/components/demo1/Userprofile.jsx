import React from "react";
import PropTypes from "prop-types";

function Userprofile({ userName, mobile, email }) {
  return (
    <div>
      <h2>Name: {userName}</h2>
      <p>Age: {mobile}</p>
      <p>Location: {email}</p>
    </div>
  );
}

Userprofile.propTypes = {
  userName: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Userprofile;
