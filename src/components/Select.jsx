import React from 'react'

const Select = ({ id, label, options, error, register }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className={`w-full h-14 select bg-gray-200 transition-colors ${
          error && 'border-red-500'
        }`}
        {...register}
      >
        {options.map(({ name, id }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
