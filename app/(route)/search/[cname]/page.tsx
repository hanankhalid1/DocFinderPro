"use client"
import React, { useEffect } from 'react'

const Search = ({params} : any) => {

  useEffect(()=>{
    console.log(params.cname)
  })
  return (
    <div>
    Search
    </div>
  )
}

export default Search;
