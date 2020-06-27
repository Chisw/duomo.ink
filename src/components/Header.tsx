import React, { useState } from 'react'
import logo from '../images/logo-text.png'
import { Button, Popover, Menu, Drawer, MenuDivider } from '@blueprintjs/core'
import Center from './Center'

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
          <Popover
            position="bottom-right"
          >
            <Button minimal icon="projects" />
            <div className="w-56">
              <Menu>
                <Menu.Item text="我的墨量" onClick={() => { setOpen(true); }} icon="user"></Menu.Item>
                <Menu.Item text="墨水管理" icon="tint"></Menu.Item>
                <Menu.Item text="偏好设置" icon="cog"></Menu.Item>
                <MenuDivider />
                <Menu.Item text="关于「多墨」"></Menu.Item>
              </Menu>
            </div>
          </Popover>
        </Center>
      </div>

      <Drawer
        position="left"
        className="min-w-4/5 md:min-w-3/4 lg:min-w-2/3"
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <Center>Basic Example</Center>
      </Drawer>
    </>
  )
}