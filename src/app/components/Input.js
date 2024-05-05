import React from 'react'

const Input = ({ htmlFor, label, type }) => {
  return (
    <div>
      <label className="text-black" htmlFor={htmlFor}>{label}</label>
      <input className="input w-full placeholder:text-white placeholder:opacity-70 text-white" id="name" placeholder={`Enter your ${htmlFor}`} type={type} />
    </div>
  )
}

export default Input