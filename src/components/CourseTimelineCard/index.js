// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails

  return (
    <div className="course-card">
      <div className="title-container">
        <h1 className="course-heading">{courseTitle}</h1>
        <div>
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="course-list">
        {tagsList.map(eachCourse => (
          <li className="course-tag" key={eachCourse}>
            <p className="tag">{eachCourse.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
