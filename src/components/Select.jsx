import React from 'react'

const Select = ({ id, label, options, error, register }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className={`w-full p-4 transition-colors bg-gray-200 border rounded-xl focus:bg-gray-100 focus:outline-none ${
          error && 'border-red-500'
        }`}
        {...register}
      >
        {options.map(({ name, value }) => (
          <option value={value} key={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
