import React from 'react';
import "./description.css"

import { FaArrowDown } from "react-icons/fa";


const Description = () => {
  return <div className="section section_descriptions">
    <div className='card'>
        <div className='descriptions__car-icon'>
            <FaArrowDown />
            <small>min</small>

        </div>
        <h2>32 C</h2>
    </div>
    <div className='card'>
        <div className='descriptions__car-icon'>
            <FaArrowDown />
            <small>min</small>

        </div>
        <h2>32 C</h2>
    </div>
    <div className='card'>
        <div className='descriptions__car-icon'>
            <FaArrowDown />
            <small>min</small>

        </div>
        <h2>32 C</h2>
    </div>
    <div className='card'>
        <div className='descriptions__car-icon'>
            <FaArrowDown />
            <small>min</small>

        </div>
        <h2>32 C</h2>
    </div>
  </div>
};

export default Description
