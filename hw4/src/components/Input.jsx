import React from 'react'

const Input = ({type, ...props}) => {
  return (
    <input className="input" type={type} {...props}/>
  )
}

export default Input
