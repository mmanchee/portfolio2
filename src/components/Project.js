import React from "react";
import PropTypes from 'prop-types';


function Project(props) {
  return (
    <React.Fragment>
      <a href={props.Link}>
        <div>
          <img src={props.Img} className='' alt='image of project'/>
        </div>
        <div>
          <p>{props.Name}</p>
          <p>{props.Description}</p>
        </div>
      </a>
    </React.Fragment>
  );
}

Project.propTypes = {
  Name: PropTypes.string,
  Description: PropTypes.string,
  Link: PropTypes.string
};

export default Project;