import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import EditModal from './components/EditModal';
import uuid from 'uuid';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: [],
      editItem: {}
    }

    //this.getTodos = this.getTodos.bind(this);
  }
  // getTodos(){
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then( (response) => {
  //       return response.json() })
  //           .then( (json) => {
  //               this.setState({todos: json}, console.log(this.state));
  //     });
  // }
  getProjects(){
    this.setState({ projects: [
        {
          id: uuid.v4(),
          title: 'LTM',
          category: 'Angular'
        },
        {
          id: uuid.v4(),
          title: 'Cofreco',
          category: 'React'
        },
        {
          id: uuid.v4(),
          title: 'Micro',
          category: 'Meteor'
        }
    ] });
  }
  // lifecycle when rendered
  componentWillMount(){
    this.getProjects();
    //this.getTodos();
  }
  // lifecycle clear
  // https://facebook.github.io/react/docs/state-and-lifecycle.html
  componentDidMount(){
    //this.getTodos();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;

    // removing with index
    // let index = projects.findIndex(x => x.id === id );
    // projects.splice(index, 1);

    // removing es6
    // filter which team has players
    projects = projects.filter( (project) => {
        return project.id !== id;
    });

    this.setState({projects:projects});
  }

  handleModal(id){
    let projects = this.state.projects;
    // edit with index
    let index = projects.findIndex(x => x.id === id );
    //this.setState({projects:projects});
    this.setState({editItem:projects[index]});
  }

  handleEdit(project){
    let id = project.id;
    let projects = this.state.projects;
    // edit with index
    let index = projects.findIndex(x => x.id === id );
    projects[index] = project;
    this.setState({projects:projects});
  }
  render(){
    return (
      <div className="App container">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <hr/>
        <EditModal projectToEdit={this.state.editItem} onEditSubmit={this.handleEdit.bind(this)}/>
        <Projects projects={this.state.projects}
        onOpenModal={this.handleModal.bind(this)}
        onDelete={this.handleDeleteProject.bind(this)}
        />
      </div>
    )
  }
}
export default App;
