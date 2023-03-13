import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners';
import './PreLoading.css';

const PreLoading = (loading : boolean) => {
  return (
    <div className='container'>
        <div className='quote-container'>
        Refuse to be Content<br/>
        -Alfred V. Aho
    </div>
    <ClimbingBoxLoader size={30} color={'#36454F'} loading={loading}/>
 </div>
  )
}

export default PreLoading;