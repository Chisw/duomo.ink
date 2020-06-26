import React from 'react'
import logo from '../images/logo-text.png'
import { IconButton, Popover, Menu, Icon } from 'evergreen-ui'
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
          <Popover
            position="bottom-right"
            content={({ close }) => (
              <div className="w-56">
                <Menu>
                  <Menu.Group>
                    <Menu.Item onClick={close} icon="user">我的墨量</Menu.Item>
                    <Menu.Item onClick={close} icon="tint">墨水管理</Menu.Item>
                    <Menu.Item onClick={close} icon="cog">偏好设置</Menu.Item>
                  </Menu.Group>
                  <Menu.Divider />
                  <Menu.Group>
                    <Menu.Item secondaryText={<Icon icon="share" />}>关于「多墨」</Menu.Item>
                  </Menu.Group>
                </Menu>
              </div>
            )}
          >
            <IconButton appearance="minimal" icon="more" className="transform rotate-90" />
          </Popover>
        </Center>
      </div>
    </>
  )
}