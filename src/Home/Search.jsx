import React from "react";
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'



const Search = ({menu}) =>{

    const [searchMenu, setSearchMenu] = useState('')


    const { register, getValues, setValue } = useForm();

    const showmenu = (e) =>{
        setSearchMenu(e.target.value)
        // console.log(searchMenu)
        menu(searchMenu)
    }


    const resetSearch = () => {
        setValue('search','')
        setSearchMenu('')
      }

    return(
        <div className='relative mr-4'>
            <input type="text"  id="search" className='bg-white border-gray-200 border-2 rounded-full px-4 h-10' placeholder='Search...' {...register('search')} onChange={(e) => showmenu(e)}/>
            <label className={`${searchMenu == '' ? 'invisible' : ''}  absolute top-2 z-50 right-3`} onClick={() => resetSearch()}>X</label>
        </div>
    )
}

export default Search