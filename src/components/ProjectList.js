import React from 'react';
import Project from './Project';

const allProjects = [
  {
    Name: '',
    Description: '',
    Link: '',
    Img: ''
  },
  {
    Name: '',
    Description: '',
    Link: '',
    Img: ''
  },
  {
    Name: '',
    Description: '',
    Link: '',
    Img: ''
  },
  {
    Name: '',
    Description: '',
    Link: '',
    Img: ''
  },
]

function ProjectList(props) {
  return (
    <React.Fragment>
      <div>
        <div>
          {allProjects.map((project, index) => 
          <Project 
            Name={project.Name}
            Description={project.Description}
            Link={project.Link}
          />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectList;