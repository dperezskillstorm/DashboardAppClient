import React from 'react'
import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import {Link} from 'react-router-dom'
const Landing = () => {
  return (
   <Wrapper>
        <nav>
          <Logo/>
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>
                    Job<span>tracking</span> app
                </h1>
                <p>
                I'm baby flannel narwhal thundercats sartorial activated charcoal try-hard. Hammock copper mug pitchfork art party before they sold out wayfarers pop-up. Sartorial disrupt authentic keffiyeh organic ugh.

                </p>
                <Link to={'/register'} className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src = {main} alt="job hunt" className='img main-img'/>
                    </div>
    </Wrapper>
  )
}

export default Landing
