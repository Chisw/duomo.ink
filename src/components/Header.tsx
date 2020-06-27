import React, { useState, Suspense } from 'react'
import logo from '../images/logo-text.png'
import { Button, Drawer, IconName, Spinner } from '@blueprintjs/core'
import Center from './Center'
const InkPool = React.lazy(() => import('./InkPool'))

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
        <Center>
          <div className="py-4 flex justify-between select-none">
            {['墨库', '我的', '设置', '关于'].map((name, index) => (
              <Button
                key={index}
                minimal
                active={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                icon={['tint', 'user', 'settings', 'info-sign'][index] as IconName}
                text={name}
              />
            ))}
          </div>
          <div>
            <Suspense fallback={<div className="flex justify-center items-center"><Spinner /></div>}>
              {[
                <InkPool />,
              ][activeIndex]}
            </Suspense>
          </div>
        </Center>
      </Drawer>
    </>
  )
}