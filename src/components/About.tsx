import React from 'react'
import qr from '../images/qrcode.png'
import logoText from '../images/logo-text.png'
import { Button } from '@blueprintjs/core'
import { copy } from '../utils/utils'

export default function About() {
  return (
    <>
      <div className="px-12 py-4 text-center">
        <img src={qr} alt="logo" className="inline-block m-4 w-32 h-32" />
        <div className="mt-2">
          <img src={logoText} alt="logo" className="inline-block h-4" />
        </div>
        <p className="mt-2 mb-2 text-xs">https://duomo.ink</p>
        <Button text="复制链接" onClick={() => copy('https://duomo.ink')} />
        <div className="mt-16">
          <a
            href="https://jisuowei.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-xs"
          >
            jisuowei.com
          </a>
        </div>
      </div>
    </>
  )
}