import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Spinner = () => {
  return (
      <div>
      
        <TailSpin
          height="80"
          width="80"
          color="blue"
          ariaLabel="loading"
        />
      
      </div>
  )
}

export default Spinner