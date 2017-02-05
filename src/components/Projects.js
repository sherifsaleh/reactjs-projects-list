import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
class Projects extends Component {
  deleteProject(id){
    // send to app component
    this.props.onDelete(id);
  }
  openModal(id){
    // send to app component
    this.props.onOpenModal(id);
  }
  render(){
    let projectList;
    if (this.props.projects) {
      projectList = this.props.projects.map( (project, index) => {
        return (
          <ProjectItem
          onOpenModal={this.openModal.bind(this, project.id)}
          onDelete={this.deleteProject.bind(this, project.id)}
          key={project.id} project={project}/>
        );
      });
    }

    return (

      <ul className="projects list-group">
        {projectList}
      </ul>
    )
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func,
  onEdit: React.PropTypes.func,
}

export default Projects;
