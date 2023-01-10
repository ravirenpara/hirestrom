import React from 'react'
import Banner from '../../Images/HomeBanner.png'
import './Home.css'
import Typical from 'react-typical'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FaceBook from '../../Images/Facebook.png'
import Instagram from '../../Images/Instagram.png'
import LinkedIn from '../../Images/LinkedIn.png'
import Twitter from '../../Images/Twitter.png'

function HomePage() {
  return (
    <div className='Home_Page '>
      <section className='Banner_Section container'>
        <div className='HS-Bnr-Title'>
          <h1>
            Infinite Possibilities <br />For {''}
            <Typical
              steps={['Freelancer', 1500, 'Recruiter', 1000]}
              loop={Infinity}
              wrapper="b"
            />
          </h1>
          <p>
            Get access to the highly experienced dedicated Freelancer for project solutions as per your business needs
          </p>
        </div>
        <div className='Sticy-HS-Btn'>
          <div className='btn-text'>
            <ArrowDownwardIcon />
            Scroll Down
          </div>
          <div className='icon-btn-text'>
          <i class="fa-duotone fa-hashtag"></i>
            <a href="#" target="_blank"><img src={FaceBook} alt="HireStrome FaceBook" /></a>
            <a href="https://www.instagram.com/" target="_blank"><img src={Instagram} alt="HireStrome Instagram" /></a>
            <a href="#" target="_blank"><img src={LinkedIn} alt="HireStrome LinkedIn" /></a>
            <a href="#" target="_blank"><img src={Twitter} alt="HireStrome Twitter" /></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage