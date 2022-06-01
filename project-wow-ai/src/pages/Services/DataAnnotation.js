import React from 'react'
import Dataset from '../../components/public/Dataset'
import Download from '../../components/Services/Download'
import ImgVdSection from '../../components/Services/ImgVdSection'
import HignQuality from '../../components/Services/public-service/HignQuality'
import topicservices from '../../__mock__/topicservices'
import annotation from '../../__mock__/annotation'

const DataAnnotation = () => {
  return (
    <div>
      <HignQuality topic={topicservices[2]} />
      <div className='arrowdown'>
        <img src='/images/scrollarrow.png' alt='scroll' />
      </div>
      <ImgVdSection content={annotation}/>
      <Download/>
      <Dataset/>
    </div>
  )
}

export default DataAnnotation