import React, { useState, Suspense } from 'react'
import { Drawer, Button, IconName, Spinner } from '@blueprintjs/core'
const InkPool = React.lazy(() => import('./InkPool'))
const Settings = React.lazy(() => import('./Settings'))
const User = React.lazy(() => import('./User'))
const About = React.lazy(() => import('./About'))

const moreList = [
  { title: '墨库', icon: 'tint', component: <InkPool /> },
  { title: '我的', icon: 'user', component: <User /> },
  { title: '设置', icon: 'settings', component: <Settings /> },
  { title: '关于', icon: 'info-sign', component: <About /> },
]

interface PanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function Panel(props: PanelProps) {

  const {
    isOpen,
    onClose,
  } = props
  
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Drawer
        position="bottom"
        className="rounded-t-lg max-w-md mx-auto"
        backdropClassName="bg-hazy-25"
        style={{ minHeight: '72vh' }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="absolute inset-0">
          <div className="relative z-10 px-4 flex justify-between items-center select-none" style={{ height: 64 }}>
            {moreList.map(({ title, icon }, index) => (
              <Button
                key={index}
                minimal
                active={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                icon={icon as IconName}
                text={title}
              />
            ))}
          </div>
          <div className="absolute inset-0 p-4 pt-0 overflow-y-auto" style={{ top: 64 }}>
            <Suspense fallback={<div className="absolute inset-0 flex justify-center items-center"><Spinner /></div>}>
              {moreList[activeIndex].component}
            </Suspense>
          </div>
        </div>
      </Drawer>
    </>
  )
}