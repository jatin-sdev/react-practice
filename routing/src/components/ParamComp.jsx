import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {
  const { id } = useParams();
  return (
    <div className='navbar-item S'>
        params : {id}
    </div>
  )
}

export default ParamComp