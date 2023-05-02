import React from "react";
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const Search = ({menu, page}) =>{

    const [searchMenu, setSearchMenu] = useState('')

    const { register, setValue } = useForm();

    const showmenu = (e) =>{
        menu(e.target.value)
        page()
        setSearchMenu(e.target.value)
    }

    const resetSearch = () =>{
        setSearchMenu('')
        menu('')
        setValue('search','')
    }

    return(
        <div className='relative mr-4'>
            <input type="text"  id="search" autoComplete="off" className='bg-gray-200 focus:bg-white border-gray-200 border-2 rounded-full pl-4 pr-7 h-10 transition-colors focus:outline-none w-5/6 md:w-full' placeholder='Search...' {...register('search')} onChange={(e) => showmenu(e)}/>
            <label className={`${searchMenu == '' ? 'invisible' : ''}  absolute top-2 z-50 right-3`} onClick={() => resetSearch()}>X</label>
        </div>
    )
}

export default Search