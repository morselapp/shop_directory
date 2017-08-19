import React, {
  Component
} from 'react';
class Projects extends Component {
  render() {
    let projectItems;
    if(this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return( < ProjectItem key = {
            project.title
          }
          project = {
            project
          }
          />);
      });
    }
    return( < div className = "Project " > {
      projectItems
    } < /div>);
  }
}
export default Projects;
