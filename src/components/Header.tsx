import React, { useState } from 'react'
import logo from '../images/logo-text.png'
import { Button } from '@blueprintjs/core'
import Center from './Center'
import Panel from './Panel'


export default function Bar() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 z-20 w-full">
        <Center
          innerClassName="py-5 flex items-center"
        >
          <div className="flex items-center flex-grow">
            <img src={logo} className="h-6" alt="logo" />
          </div>
          <Button minimal icon="more" onClick={() => setOpen(true)} />
        </Center>
      </div>

      <Panel isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}