import React from 'react'

const Button = ({text, click}) => {
  return (
    <button onClick={click} className='btn'>{text}</button>
  )
}

export default Button