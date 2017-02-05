import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state= {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Angular', 'React', 'Meteor', 'NodeJs']
  }

  handleSubmit(event){
    event.preventDefault();
    if (this.refs.title.value === '') {
      alert('Title is required');
      return;
    }
    this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value,
      }
    }, function(){
      // send value to the app component
      this.props.addProject(this.state.newProject);
    });
  }

  render(){
    let categoryOptions = this.props.categories.map( ( cat )=> {
      return <option key={cat} value={cat}>{cat}</option>
    });
    return (
      <form  role="form" onSubmit={this.handleSubmit.bind(this)}>
        <legend>Add your project</legend>
        <div className="form-group">
          <label htmlFor="project-title">Title</label>
          <input ref="title" type="text" className="form-control" id="project-title" name="project-title" placeholder="Insert porject name"/>
        </div>
        <div className="form-group">
          <label htmlFor="select-category">Category</label>
          <select ref="category"  name="select-category" id="select-category" className="form-control" required="required">
            {categoryOptions}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}
AddProject.propTypes = {
  categories: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProject;
