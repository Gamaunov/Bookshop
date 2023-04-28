import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const ShopBag = () => {
  return (
    <div>
       <Link to="/">
        <Button text="Home" />
      </Link>
    </div>
  )
}

export default ShopBag