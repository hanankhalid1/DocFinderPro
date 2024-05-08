"use client"
import { useEffect, useState } from "react";
import CategorySearch from "./_components/CategorySearch";
import Hero from "./_components/Hero";
import GlobalApi from "./_utils/GlobalApi";
import DoctorList from "./_components/DoctorList";

export default function Home() {
  const [doctorList , setDoctorList] = useState([]);
  useEffect(()=>{
    getDoctorList();
  },[])
  const getDoctorList=()=>{
    GlobalApi.getDoctorList().then(res =>{
      console.log(res.data.data);
      setDoctorList(res.data.data);
    
    })
  }
  return <div>
    {/* Hero Section */}
    <Hero/>
    {/* Search Bar + Category */}
    <CategorySearch/>
    
    {/* Popular Doctors List */}
    <DoctorList doctorList={doctorList}/>
  </div>;
}
