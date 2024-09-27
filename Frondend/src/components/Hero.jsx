import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='her container'>
      <div className='banner'>
        <h1>{title}</h1>
        <p>
        At HospiCare, we are your trusted healthcare provider, committed to supporting every step of your journey toward better health. With a focus on delivering personalized care and fostering long-term well-being, we are here to ensure that you receive the attention and support you deserve. 
        Our dedicated team is always ready to assist, helping you navigate your health needs with compassion and expertise, so you can live healthier and happier.
        </p>
      </div>
      <div>
        <img src={imageUrl} alt='hero' className='animated-image'/>
        <span>
          <img src="/Vector.png" alt='vector' />
        </span>
      </div>
    </div>
  )
}

export default Hero