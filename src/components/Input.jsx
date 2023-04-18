import React from 'react'

const Input = ({
  id,
  label,
  type = 'text',
  error,
  placeholder,
  register,
  readOnly = false,
  value,
}) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <label htmlFor={id} className="text-black">
        {label}
      </label>
      <input
        id={id}
        className={`w-full p-4 transition-colors shadow-xl focus:shadow-none focus:border-slate-900  text-black bg-gray-200 border-2 rounded-xl focus:bg-gray-100 focus:outline-none ${
          error && 'border-red-500'
        }`}
        defaultValue={value}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        readOnly={readOnly}
        {...register}
      />
    </div>
  )
}

export default Input
