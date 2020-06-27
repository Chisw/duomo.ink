import React, { useState, Suspense } from 'react'
import logo from '../images/logo-text.png'
import { Button, Drawer, IconName, Spinner } from '@blueprintjs/core'
import Center from './Center'
const InkPool = React.lazy(() => import('./InkPool'))
const Settings = React.lazy(() => import('./Settings'))
const User = React.lazy(() => import('./User'))
const About = React.lazy(() => import('./About'))

export default function Bar() {

  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

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

      <Drawer
        position="bottom"
        className="rounded-t-lg max-w-lg mx-auto"
        backdropClassName="bg-hazy-25"
        style={{ minHeight: '80vh' }}
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <div className="absolute inset-0">
          <div className="relative z-10 px-4 flex justify-between items-center select-none" style={{ height: 64 }}>
            {['墨库', '设置', '我的', '关于'].map((name, index) => (
              <Button
                key={index}
                minimal
                active={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                icon={['tint', 'settings', 'user', 'info-sign'][index] as IconName}
                text={name}
              />
            ))}
          </div>
          <div className="absolute inset-0 p-4 pt-0 overflow-y-auto" style={{ top: 64 }}>
            <Suspense fallback={<div className="absolute inset-0 flex justify-center items-center"><Spinner /></div>}>
              {[
                <InkPool />,
                <Settings />,
                <User />,
                <About />,
              ][activeIndex]}
            </Suspense>
          </div>
        </div>
      </Drawer>
    </>
  )
}