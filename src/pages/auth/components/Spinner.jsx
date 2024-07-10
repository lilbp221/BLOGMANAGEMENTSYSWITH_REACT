import React from 'react'
import { BallTriangle, TailSpin } from 'react-loader-spinner'

const Spinner = () => {
  return (
      <div  className="flex items-center justify-center min-h-screen">
      
      

        <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    <div>
   
    </div> 
      </div>
  )
}

export default Spinner

  {/* <TailSpin
          height="80"
          width="80"
          color="blue"
          ariaLabel="loading"
        /> */}