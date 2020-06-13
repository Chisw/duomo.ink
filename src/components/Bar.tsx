import React from 'react'
import logo from '../images/logo-text.png'
import { IconButton, Icon } from 'evergreen-ui'
import { NavLink } from 'react-router-dom'

export default function Bar() {
  return (
    <>
      <div className="fixed z-30 top-0 right-0 left-0 h-12 flex justify-center">
        <div
          className="px-6 w-full flex justify-center items-center border-b"
          style={{
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(255, 255, 255, .8)',
            maxWidth: 640,
          }}
        >
          <div className="flex items-center flex-grow">
            <div
              className="w-20 h-8 bg-center bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${logo})`,
              }}
            />
          </div>
          {/* <div className="flex justify-center">
            <NavLink to="/search">
              <IconButton appearance="minimal" icon="search" />
            </NavLink>
          </div>
          <div className="flex justify-center">
            <NavLink to="/user">
              <IconButton appearance="minimal" icon="user" />
            </NavLink>
          </div> */}
        </div>
      </div>
    </>
  )
}