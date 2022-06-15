// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timeLineItemsList} = props

  const renderTimelineCard = item => {
    if (item.id === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="timeline-view">
      <div className="responsive-container">
        <h1 className="journey">
          MY JOURNEY OF
          <br />
          <span className="ccbp"> CCBP 4.0</span>
        </h1>
        <Chrono
          mode="VERTICAL"
          theme={{
            secondary: 'white',
          }}
          items={timeLineItemsList}
        >
          {timeLineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
