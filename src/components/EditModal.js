import React, { Component } from 'react';

class EditModal extends Component {
  constructor(props){
    super();
    this.state = {project: ''};
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentWillReceiveProps(props){

    this.setState({project: props.projectToEdit });
    //this.setState({value:props});
    //console.log(this.state);
    //this.setState({project: this.props.projectToEdit});

    //console.log(this.state);
  }

  handleTitleChange(event) {
      let project = this.state.project;
      project.title= event.target.value;

      this.setState({project: project });
      //this.setState({value: event.target.value});
  }

  handleCategoryChange(event) {
      let project = this.state.project;
      project.category= event.target.value;
      this.setState({project: project });
      //this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.state.project);
  }

  render(){
    return(
      <div className="modal fade" id="modal-id">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      <h4 className="modal-title">Edit your Project</h4>
                  </div>
                  <div className="modal-body">
                      <form  role="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="project-title">Title : {this.state.project.title}</label>
                          <input ref="title" type="text" className="form-control" id="project-title" name="project-title" value={this.state.project.title}  onChange={this.handleTitleChange} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="select-category">Category</label>
                          <select ref="category"  name="select-category" id="select-category" className="form-control" required="required"  value={this.state.project.category} onChange={this.handleCategoryChange} >

                            <option key="Angular" value="Angular">Angular</option>
                            <option key="React" value="React">React</option>
                            <option key="Meteor" value="Meteor">Meteor</option>
                            <option key="NodeJs" value="NodeJs">NodeJs</option>

                          </select>
                        </div>
                        <button type="submit" className="btn btn-success">Save</button> <button type="submit" className="btn btn-default" data-dismiss="modal">close</button>

                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
export default EditModal;
