import React from 'react'
import { Icon } from 'evergreen-ui'

export default function Bar() {
  return (
    <>
      <div className="py-4 fixed z-30 bottom-0 right-0 left-0 flex justify-center items-center">
        <Icon icon="eye-off" />
        <div className="w-16 h-16 rounded-full shadow-lg bg-blue-600 text-white flex justify-center items-center">
          <Icon icon="repeat" />
        </div>
        <Icon icon="star-empty" />
      </div>
    </>
  )
}