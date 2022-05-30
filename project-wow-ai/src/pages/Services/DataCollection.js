import React from 'react'
import Dataset from '../../components/Services/Dataset'
import Download from '../../components/Services/Download'
import HignQuality from '../../components/Services/HignQuality'
import ProjectAI from '../../components/Services/ProjectAI'
import topicservices from '../../__mock__/topicservices'

const DataCollection = () => {
  return (
    <div>
      <HignQuality topic={topicservices[1]} />
      <div className='arrowdown'>
        <img src='/images/scrollarrow.png' alt='scroll' />
      </div>
      <ProjectAI/>
      <div className='arrowdown'>
        <img src='/images/scrollarrow.png' alt='scroll' />
      </div>
      <Download/>
      <Dataset/>
    </div>
  )
}

export default DataCollection