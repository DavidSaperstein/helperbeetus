import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrow from './../assets/back-arrow.svg'
import './Arrow.scss'

export default function Arrow(props) {
  let navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)} className='arrow'>
        <img src={arrow} alt={'back'}  />
      </button>
    </>
  )
}