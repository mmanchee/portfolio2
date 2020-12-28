import React from "react";
import PropTypes from 'prop-types';

const Future = (props) => {
  const { onChangePage } = props;
  
  return (
    <React.Fragment>
      <p>A to do list for the future</p>
      <p></p>
      <p></p>
      <p></p>
    </React.Fragment>
  );
}

Future.propTypes = {
  onChangePage: PropTypes.func
}

export default Future;