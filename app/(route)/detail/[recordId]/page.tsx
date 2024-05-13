"use client";
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import DoctorDetail from '../_components/DoctorDetail';

const Detail = ({params} : any) => {
  const [doctor , setDoctor] = useState([]);
  useEffect(() =>{
    getDoctorById();
  },[])
  const getDoctorById =() =>{
    GlobalApi.getDocotorById(params.recordId).then(res =>{
       console.log("Hello ",res.data);
       setDoctor(res.data.data);
    
    })
  }
  return (
    <div className='p-5 md:px-20'>
    <h2 className='font-bold text-[22px]'>Details</h2>

    <div className='grid grid-cols-1 lg:grid-cols-4'>
      {/* Doctor Detail */}
      <div className='col-span-3'>
       {doctor&&<DoctorDetail doctor= {doctor}/>}
      </div>
      {/* Doctor Suggestion */}
      <div>
        {/* <DoctorSuggestionList/> */}
      </div>
    </div>
  </div>
  )
}

export default Detail;