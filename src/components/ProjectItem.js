import React, { Component } from 'react';
class ProjectItem extends Component {
  deleteProject(id){
    // send to projects component which will send it then to app component
    this.props.onDelete(id);
  }
  openModal(id){
    // send to projects component which will send it then to app component
    this.props.onOpenModal(id);
  }
  render(){
    return (
      <li className="project list-group-item">
        <div className="row">
          <span className='col-sm-9'>
            <strong>{this.props.project.title}</strong>: {this.props.project.category}
          </span>
          <span className='col-sm-3 text-right'>
            <button className='btn btn-sm btn-primary' data-toggle="modal" href='#modal-id' onClick={this.openModal.bind(this, this.props.project.id )}>Edit</button> <button onClick={this.deleteProject.bind(this, this.props.project.id )} className='btn btn-sm btn-danger'>Remove</button>
          </span>
        </div>
      </li>

    )
  }
}
ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func,
  onOpenModal: React.PropTypes.func,
}
export default ProjectItem;
