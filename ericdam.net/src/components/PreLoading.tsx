import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners';
import './PreLoading.css';

const PreLoading = (loading : boolean) => {
  return (
    <div className='container'>
        <div className='quote-container'>
        Refuse to be Content<br/>
        <span style={{ fontSize: '30px'}}>-Alfred V. Aho</span>
    </div>
    <div className="loader">
    <ClimbingBoxLoader size={30} color={'#36454F'} loading={loading}/>
    </div>
 </div>
  )
}

export default PreLoading;