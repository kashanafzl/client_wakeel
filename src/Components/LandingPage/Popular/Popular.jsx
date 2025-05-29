import React from 'react'
import './Popular.css'

import p1 from '../../../Asserts/Img/p1.svg'
import p2 from '../../../Asserts/Img/p2.svg'
import arrowicon from '../../../Asserts/Img/arrow.svg'

export default function Popular() {
  return (
    <div className='mainp'>
        <div className="populardiv">

            <div className='popularh1andpdiv'>
                <h1>Popular Case Studies</h1>
                <p>These case studies involve a detailed exploration of specific legal issues, the facts surrounding them, the arguments presented by each party, and the ultimate resolution or court decision.</p>
            </div>


            <div className="mainpandtext">
            <div className='p1imddiv'>
                <img src={p1} alt="" />
            </div>

        <div>
        <div className='rightpdiv'>
                <span>20th January, 2024</span>
                <li>Family Law</li>
            </div>

            <div className='rightdivh3andp'>
                <h3>The Thompson Custody</h3>
                <p>Thompson family found themselves entangled in a familial discord that led to a high-stakes legal battle over custody. Mark Thompson, a successful architect, and Emily Thompson, a renowned pediatrician, decided to part ways after 15 years of marriage.
                </p>
            </div>
        </div>
            </div>

            <div className='arrowdiv'>
                <img src={arrowicon} alt="" />
            </div>

            <hr />
            


            <div className="mainpandtext">
            <div className='p1imddiv'>
                <img src={p2} alt="" />
            </div>

        <div>
        <div className='rightpdiv'>
                <span>20th January, 2024</span>
                <li>Family Law</li>
            </div>

            <div className='rightdivh3andp'>
                <h3>The Thompson Custody</h3>
                <p>Thompson family found themselves entangled in a familial discord that led to a high-stakes legal battle over custody. Mark Thompson, a successful architect, and Emily Thompson, a renowned pediatrician, decided to part ways after 15 years of marriage.
                </p>
            </div>
        </div>
            </div>

            <div className='arrowdiv'>
                <img src={arrowicon} alt="" />
            </div>

            <hr />

        </div>
    </div>
  )
}
