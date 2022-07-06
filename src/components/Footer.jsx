import React from 'react'

const Footer = () => {
  return (
    <div className='border-t border-white bg-gray-900'>
        <div className='my-1 max-w-screen-xl mx-auto bg-gray-900'>
            <div className='grid grid-cols-2 lg:grid-cols-3 text-center gap-12 bg-gray-900'>
                <div>
                <h1 className='text-lg font-sans font-semi-bold text-blue-900'>
                    Office Address
                </h1>
                <ul className='mt-1 font-sans font-xs text-gray-600'>
                    <li>MAST Technologies</li>
                    <li>RIC Building, NUST</li>
                    <li>Islamabad, Pakistan</li>
                    <li>44000</li>
            
                </ul>
                
                
                
                </div>
                <div>
                <h1 className='text-lg font-sans font-semi-bold text-blue-900'>
                    UK Representative
                </h1>
                <ul className='mt-1 font-sans font-xs text-gray-600'>
                    
                    <li>uk@masttechnologies.com</li>
                    <li>+447541055014</li>
                  
            
                </ul>
                
                
                
                </div>
                <div>
                <h1 className='text-lg font-sans font-semi-bold text-blue-900'>
                    Company Contact
                </h1>
                <ul className='mt-1 font-sans font-xs text-gray-600'>
                    
                    <li>hello@masttechnologies.com</li>
                    <li>+923005603366</li>
                  
            
                </ul>
                
                
                
                </div>
                
            </div>
            <p className='my-1 mt-2 text-center text-sm  text-blue-300'>© Copyright 2022 MAST TECH LTD.</p>
        </div>
    </div>
  )
}

export default Footer