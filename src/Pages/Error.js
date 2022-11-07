import React from 'react'
import {Link} from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper className='full-page'>
        <div>
        <img  src={img} alt='not found'/>
        <h3>Sorry This Page is Not Availble</h3>
        <p>One day you will realize that not all things in life work out. Sometimes you get a 404</p>
        <Link to="/">Take me back to reality I can understand</Link>
        </div>
    </Wrapper>
  )
}

export default Error
