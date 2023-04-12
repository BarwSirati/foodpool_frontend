import React from 'react'

const Input = ({ id, label, type = 'text', error, placeholder, register }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-black">
        {label}
      </label>
      <input
        id={id}
        className={`w-full p-4 transition-colors bg-gray-200 border rounded-xl focus:bg-gray-100 focus:outline-none border-${
          error ? 'red-500' : 'none'
        }`}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        {...register}
      />
    </div>
  )
}

export default Input
