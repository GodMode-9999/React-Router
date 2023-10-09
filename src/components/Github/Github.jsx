import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/GodMode-9999')
    //     .then(respnose => respnose.json())
    //     .then(data => setData(data))
    // } , [])
  return (
    <div className='text-center bg-gray-600 text-white-3xl py-4'>
       <h3> Name :{data.name}</h3>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='Git profile pic' width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoder = async () => {
    const respnose = await fetch('https://api.github.com/users/GodMode-9999') 
    return respnose.json()
}
