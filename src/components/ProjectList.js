import React from 'react';
import Project from './Project';

const allProjects = [
  {
    Name: 'Star Racks 2',
    Description: 'Star Racks 2 is a reduxing of a react program developed at Epicodus',
    SiteLink: 'https://mmanchee.github.io/StarRacks2/',
    GitLink: 'https://github.com/mmanchee/StarRacks2.1',
    Img: ''
  },
  {
    Name: 'Our Totally Complete RPG',
    Description: 'JavaScript team week project at Epicodus. Built a small RPG',
    SiteLink: 'https://mmanchee.github.io/jsDnD/',
    GitLink: 'https://github.com/mmanchee/jsDnD',
    Img: ''
  },
  {
    Name: 'Bug Lister',
    Description: 'Bug and solution tracker built in C#',
    SiteLink: '',
    GitLink: 'https://github.com/mmanchee/BugLister',
    Img: ''
  },
  {
    Name: '',
    Description: '',
    SiteLink: '',
    GitLink: '',
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