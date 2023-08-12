import React from 'react'
import './Props.css'
const Props2 = (props) => {
  return (
    <div className='mainContainer'>
      <div className='one'>
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
        <img src={props.img1} alt="" />
      </div>
      <div className='two'>
        <h1>{props.h2}</h1>
        <p>{props.p1}</p>
        <img src={props.img2}  />
      </div>
      <br />
      <br />
      <div className='three'>
        <h1>{props.h3}</h1>
        <p>{props.p2}</p>
        <img src={props.img3} alt="" />
      </div>

    </div>
  )
}

export default Props2