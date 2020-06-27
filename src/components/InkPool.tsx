import React from 'react'
import { Button } from '@blueprintjs/core'

export default function InkPool() {

  const inkList = [
    { title: '字', size: 7.5, count: 16142, status: 1 },
    { title: '词', size: 26.1, count: 264434, status: 0 },
    { title: '成语', size: 10.3, count: 31648, status: 0 },
    { title: '歇后语', size: 1.3, count: 14032, status: 0 },
  ]

  return (
    <>
      <div className="w-full">
        {inkList.map(({ title, size, count, status }, index) => (
          <div
            key={index}
            className={`mt-4 p-2 flex items-center border rounded`}
          >
            <p className="text-2xl flex-grow">
              {title}
              <span className="ml-2 text-xs text-gray-700">{count}滴({size}MB)</span>
            </p>
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
        <div className="mt-6 text-xs text-center text-gray-500">
          数据来源于网络
        </div>
      </div>
    </>
  )
}