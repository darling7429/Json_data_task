import React, {  useState } from 'react'
import axios from 'axios'

function Card() {
    const [data,setdata]=useState([])
    const [loading,setloading]=useState(false)
   
    
    const loadcard=async()=>{
        try {
            setloading(true)
            const resp=await  axios.get("https://www.reddit.com/r/reactjs.json")
       
       setdata(resp.data.data.children)
       setloading(false)

            
        } catch (error) {
            console.log(error)
            
        }
       
       
    }
  return (

    <div className='w-[100%] mt-4 flex flex-col place-items-center'>
        <div className='w-[full] sm:flex sm:justify-start  md:flex justify-center lg:flex lg:justify-center '>
        <button className='btn bg-green-500 p-2 text-white capitalize  rounded-lg shadow-lg border-none outline-none ' onClick={()=>{
            loadcard()
        }}>Load Data</button>
        </div>
        {loading?<p className='mt-60 '>Data Loading Please Wait</p>: <div className=' grid grid-cols-4 gap-4 mt-10  sm:grid-cols-1 p-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4'>
        {
            
  data.map((item,index)=>{
      return(

          <div className='w-[350px] h-[150px] shadow-lg rounded-lg  text-center  capitalize  ' key={index}>
             

              <div className='w-full'>
                  <p className='font-bold mt-4' key={item.data.author}>{item.data.author}</p>
                  <p  key={item.data.score}>score : {item.data.score}</p>
                 
                  <a className='text-blue-500' href={item.data.url} key={item.data.url}> Click here to know more  </a>
                  </div>

          </div>
      )
      

  })
}

        </div>}
       
    </div>        
   
   
  )
}

export default Card