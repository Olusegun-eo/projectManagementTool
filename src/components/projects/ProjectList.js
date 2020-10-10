import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
        { projects && projects.map(project => {
          return(
            <Link to={'/project/' + project.id} key={project.id} >
            <ProjectSummary project={project} />
            </Link>
          )
        })}
    </div>
  )
}
export default ProjectList




// const ProjectList = ({projects}) => {
//   return projects.map((project) => (
//       <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
//           <div className="card-body">
//               <h5 className="card-title">{`${project.title}`}</h5>
//               <h6 className="card-subtitle mb-2 text-muted">{`${project.description}`}</h6>
//               <p className="card-text">{`${project.content}`}</p>
//               <a href={`${project.url}/${project.id}`} className="card-link">Go to project ...</a>
//           </div>
//       </div>
//   ));
// }

// export default ProjectList


