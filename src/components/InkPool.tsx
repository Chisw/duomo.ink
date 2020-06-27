import React from 'react'
import { Button } from '@blueprintjs/core'
import { INK_LIST } from '../utils/utils'

export default function InkPool() {



  return (
    <>
      <div className="w-full">
        {INK_LIST.map(({ title, size, count, status }, index) => (
          <div
            key={index}
            className={`mb-4 p-2 flex items-center border rounded`}
          >
            <div className="flex-grow flex items-center">
              <span className="text-3xl">
                {title}
              </span>
              <span className="ml-2 text-xs text-gray-700">
                {count} 滴<br/>
                {size} MB
              </span>
            </div>
            <div>
              <Button
                small
                disabled={!status}
              >
                {status ? '装载' : '整理中'}
              </Button>
            </div>
          </div>
        ))}
        <div className="text-xs text-center text-gray-500">
          数据来源于网络
        </div>
      </div>
    </>
  )
}