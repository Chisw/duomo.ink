import React from 'react'

interface CenterProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  style?: React.CSSProperties
  bgNode?: React.ReactNode
}

export default function Center(props: CenterProps) {

  const {
    children,
    className = '',
    innerClassName = '',
    style = {},
    bgNode,
  } = props

  return (
    <div className={`${className} relative w-full`} style={style}>
      {bgNode && (
        <div className="absolute z-0 inset-0 w-full h-full">
          {bgNode}
        </div>
      )}
      <div className={`${innerClassName} relative z-10 max-w-xl px-4 md:px-8 mx-auto`}>
        {children}
      </div>
    </div>
  )
}