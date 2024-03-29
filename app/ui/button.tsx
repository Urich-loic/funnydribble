import React from 'react'

export default function Button({buttonText}:{
  buttonText:string
}) {
  return (
    <div><button className='px-4 py-3 bg-black text-white rounded-3xl'>{buttonText}</button></div>
  )
}
