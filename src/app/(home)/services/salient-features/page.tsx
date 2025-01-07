import React from 'react'

const page = () => {
  let Features = [
    '400 Bed Hospital',
    'Most well Planned Hospital',
    'Ideal location',
    'Design according to US Hospital Code',
    'Panoramic view of Faisal Mosque and Margalla Hills',
    'State of the art technology',
    'All medical facilities under one roof',
    'Architectural land mark',
    'On site hotel and housing facilities for staff and Patient families',
    'Earth Quake resistance according to New Building Code',
    'All Partners US and UK trained doctors',
    'Off site out patient clinics in sector F-11 and F-8 Islamabad and Rawalpindi',
    'Promising future plans for quality medical college, post graduate training and nursing school',
    'A unique financial model with public-private partnership to keep the hospital interest free',
    'Operating rooms and intensive care unit on the same floor',
    'Intensive care unit on almost each floor',
    'Imaging center, Operating rooms and ICU close to Emergency department',
    'Ample parking',
    'Easy access to outpatient department, pharmacy, laboratory and dialysis center',
    'Large waiting areas',
    'Spacious rooms',
    'Labour and Delivery rooms close to Nursery and Neonatal ICU',
    'Mosque',
  ]

  return (
    <div className='container'>
         <h3>Salient Features</h3>
      <div className="widget widget-services">
        {Features.map((item,index) => {
          return (
            <div key={index} className="widget-content">
              <ul className="list-unstyled">
                <li>
                  <a  href="#">
                    {' '}
                    <span className="line">
                      {' '}
                      <span></span>
                    </span>
                    <span className='mt-10'>{item}</span>
                  </a>
                </li>
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default page
