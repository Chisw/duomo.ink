import React from 'react'
import logo from '../images/logo-text.png'
import { IconButton } from 'evergreen-ui'
import Center from './Center'

export default function Bar() {
  return (
    <>
      <div className="fixed top-0 z-30 w-full">
        <Center
          innerClassName="py-5 flex items-center"
        >
          <div className="flex items-center flex-grow">
            <img src={logo} className="h-6" alt="logo" />
          </div>
          <IconButton appearance="minimal" icon="more" className="transform rotate-90" />
        </Center>
      </div>
    </>
  )
}