import React from 'react'
import {
  AiOutlineGithub,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai'

const Footer = () => {
  const linkFc = (link) => {
    window.open(link)
  }
  return (
    <div className="bg-gray-900 p-10">
      <div className="text-white md:w-1/2 mx-auto space-y-2 flex justify-center flex-col">
        <h1 className="text-2xl mb-5 text-center">Foolpool Developer</h1>
        <p className="indent-14">
          Foodpool comes from a combination of the words food and pool, as the
          app is based on the idea of pooling resources to make food delivery
          more convenient and cost-effective.
        </p>
        <div className="pt-6 flex justify-center items-center space-x-2">
          <AiOutlineGithub
            onClick={() => linkFc('https://github.com/DevBatProduction')}
            className="text-5xl cursor-pointer"
          />
          <AiFillFacebook
            onClick={() => linkFc('https://www.facebook.com/devbatstudio')}
            className="text-5xl cursor-pointer"
          />
          <AiFillInstagram
            onClick={() => linkFc('https://www.instagram.com/clevbat/')}
            className="text-5xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
