import React from 'react';

const Template = (props) => {
  
  return(
    <div className='cpu'>
      <img className='cpu_pic' src={props.image_url} />
      <div>
        <p>Brand: {props.brand}</p>
        <p>Name: {props.name}</p>
        <p>TDP: {props.tdp} watts</p>
        <p>Cores: {props.cores}</p>
        <p>Threads: {props.threads}</p>
        <p>Base Frequency: {props.base} Ghz</p>
        <p>Boost Frequency: {props.boost} Ghz</p>
        <p>Cooler Included: {props.cooler_included}</p>
        <p>Price: ${props.price}</p>
      </div>
    </div>
  )
}
export default Template
