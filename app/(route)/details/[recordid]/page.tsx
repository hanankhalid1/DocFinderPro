"use client";
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

const Details = ({params} : any) => {
  const [doctor , setDoctor] = useState([]);
  useEffect(() =>{
    getDoctorById();
  },[])
  const getDoctorById =() =>{
    GlobalApi.getDocotorById(params.recordId).then(res =>{
       console.log(res.data);
       setDoctor(res.data.data);
    
    })
  }
  return (
    <div className='p-5'>
      <h2 className='font-bold text-[22px]'>Details</h2>
    </div>
  )
}

export default Details;
