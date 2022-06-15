// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    duration,

    imageUrl,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" />
      <div className="project-title-container">
        <h1 className="project-name">{projectTitle}</h1>
        <div>
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
