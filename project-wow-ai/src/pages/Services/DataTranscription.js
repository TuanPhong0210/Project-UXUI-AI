import React from 'react'
import Dataset from '../../components/Services/Dataset'
import Download from '../../components/Services/Download'
import HignQuality from '../../components/Services/HignQuality'
import TransServices from '../../components/Services/TransServices'
import topicservices from '../../__mock__/topicservices'

console.log(topicservices[0]);

const DataTranscription = () => {
  return (
    <div>
      <HignQuality topic={topicservices[0]} />
      <div className='arrowdown'>
        <img src='/images/scrollarrow.png' alt='scroll' />
      </div>
      <TransServices />
      <Download />
      <Dataset />
    </div>
  )
}

export default DataTranscription