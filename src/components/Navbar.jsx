import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from '/profile.svg'
import { useAuth } from '../contexts/AuthContext'
import { GoThreeBars } from 'react-icons/go'
import { HiXMark } from 'react-icons/hi2'
import { GiTwoCoins } from 'react-icons/gi'
import { MdFastfood } from 'react-icons/md'

const Navbar = ({ point }) => {
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [click, setClick] = useState(false)
  const paths = [
    { key: 1, name: 'Home', to: '/' },
    { key: 2, name: 'Post', to: '/post' },
    { key: 3, name: 'Order', to: '/order' },
  ]

  const pathsMobile = [...paths, { key: 4, name: 'Profile', to: '/profile' }]
  return (
    <header className="navbar-wrapper sticky top-0">
      <div className="navbar">
        <h1 className="navbar-header">
          <MdFastfood className="mr-3" />
          Foolpool
        </h1>
        <div className="navbar-menu">
          <ul className="navbar-menu-wrapper">
            <li className="navbar-menu-item p-2 px-3">|</li>
            {paths.map((path) => {
              return (
                <Link to={path.to} key={path.key}>
                  <li
                    className={`navbar-menu-item hover:bg-red-500 p-2 px-5 hover:rounded-lg`}
                  >
                    {path.name}
                  </li>
                </Link>
              )
            })}
            <li
              className={`navbar-menu-item bg-red-500 p-2 px-3 flex items-center rounded-xl order-first`}
            >
              <GiTwoCoins className="mr-2" /> {point}
            </li>
            <li
              onClick={() => {
                setClick(!click)
              }}
              className="cursor-pointer flex items-center"
            >
              <img src={Profile} className="w-9 h-9" />
            </li>
          </ul>
        </div>
        <div className="navbar-menu-mobile-button ml-auto">
          <label
            className={`btn-white btn bg-red-500 border-red-500 hover:bg-red-400 hover:border-red-400 swap swap-rotate ${
              isOpen ? 'swap-active' : ''
            }`}
          >
            <GoThreeBars
              className="swap-off icon"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            />
            <HiXMark
              className="swap-on icon"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            />
          </label>
        </div>
      </div>
      <div className={`navbar-menu-mobile z-50 ${isOpen ? 'active' : ''}`}>
        <ul className="p-2">
          {pathsMobile.map((path) => {
            return (
              <Link key={path.key} to={path.to}>
                <li
                  className="navbar-menu-mobile-item"
                  onClick={() => {
                    setIsOpen(!isOpen)
                  }}
                >
                  {path.name}
                </li>
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
        } bg-white mr-2 mt-2 right-20 divide-y divide-gray-100 rounded-lg shadow w-44 absolute`}
      >
        <ul
          className="py-2 text-sm text-gray-700 "
          aria-labelledby="multiLevelDropdownButton"
        >
          <li>
            <Link
              to={'/profile'}
              className="block px-4 py-2 hover:bg-gray-100 "
              onClick={() => {
                setClick(!click)
              }}
            >
              Profile
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 "
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
