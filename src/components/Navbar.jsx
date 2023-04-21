import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from '/profile.svg'
import { useAuth } from '../contexts/AuthContext'
import { GoThreeBars } from 'react-icons/go'
import { HiXMark } from 'react-icons/hi2'

const Navbar = () => {
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [click, setClick] = useState(false)
  const paths = [
    { key: 1, name: 'Home', to: '/' },
    { key: 2, name: 'Order', to: '/order' },
  ]

  const pathsMobile = [
    ...paths,
    { key: 3, name: 'Post', to: '/post' },
    { key: 4, name: 'Profile', to: '/profile' },
  ]
  return (
    <header className="navbar-wrapper">
      <div className="navbar max-lg:fixed max-lg:z-50">
        <h1 className="navbar-header">Foolpool</h1>
        <div className="navbar-menu">
          <ul className="navbar-menu-wrapper">
            {paths.map((path) => {
              return (
                <Link to={path.to} key={path.key}>
                  <li className={`navbar-menu-item`}>{path.name}</li>
                </Link>
              )
            })}
            <li
              onClick={() => {
                setClick(!click)
              }}
              className="cursor-pointer"
            >
              <img src={Profile} className="w-[29.5px] h-[29.5px]" />
            </li>
          </ul>
        </div>
        <div className="navbar-menu-mobile-button ml-auto ">
          <label className="btn-white btn bg-background border-background hover:bg-red-500 hover:border-red-500">
            <input
              type="checkbox"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            />
            <GoThreeBars className="swap-off icon" />
            <HiXMark className="swap-on icon" />
          </label>
        </div>
      </div>
      <div className={`navbar-menu-mobile z-50 ${isOpen ? 'active' : ''}`}>
        <ul className="p-2">
          {pathsMobile.map((path) => {
            return (
              <Link key={path.key} to={path.to}>
                <li className="navbar-menu-mobile-item">{path.name}</li>
              </Link>
            )
          })}
          <li
            className="navbar-menu-mobile-item"
            onClick={() => {
              logout()
            }}
          >
            Sign out
          </li>
        </ul>
      </div>
      <div
        id="dropdown"
        className={`z-10 ${
          click ? '' : 'hidden'
        } bg-white mr-2 mt-2 right-0 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="multiLevelDropdownButton"
        >
          <li>
            <Link
              to={'/profile'}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                setClick(!click)
              }}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to={'/post'}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                setClick(!click)
              }}
            >
              Post
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                logout()
              }}
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
