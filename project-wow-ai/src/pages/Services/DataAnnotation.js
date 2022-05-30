import React from 'react'
import Dataset from '../../components/Services/Dataset'
import Download from '../../components/Services/Download'
import HignQuality from '../../components/Services/HignQuality'
import topicservices from '../../__mock__/topicservices'

const DataAnnotation = () => {
  return (
    <div>
      <HignQuality topic={topicservices[2]} />
      <div className='arrowdown'>
        <img src='/images/scrollarrow.png' alt='scroll' />
      </div>
      
      <Download/>
      <Dataset/>
    </div>
  )
}

export default DataAnnotation