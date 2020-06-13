import React from 'react'
import { Badge } from 'evergreen-ui'

function Grid({ zi }: { zi: string }) {
  return (
    <div className="tian-grid relative w-20 h-20 flex justify-center items-center">
      <span className="relative z-10 text-6xl">{zi}</span>
    </div>
  )
}

interface ZIProps {
  data: {
    word: string
    oldword?: string
    strokes?: string
    pinyin?: string
    radicals?: string
    explanation?: string
  }
}

export function ZI (props: ZIProps) {

  const {
    word,
    oldword = '',
    strokes = '',
    pinyin = '',
    radicals = '',
    explanation = '',
  } = props.data


  return (
    <>
      <div className="py-4 flex">
        <div className="flex justify-center">
          <Grid zi={word} />
        </div>
        <div className="ml-4 flex-grow">
          <div className="flex mb-2">
            <div className="w-1/2">
              <Badge color="neutral">拼音</Badge>
              <span className="ml-2 text-xs">{pinyin}</span>
            </div>
            <div className="w-1/2">
              <Badge color="neutral">繁体</Badge>
              <span className="ml-2 text-xs">{oldword}</span>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <Badge color="neutral">笔画</Badge>
              <span className="ml-2 text-xs">{strokes}</span>
            </div>
            <div className="w-1/2">
              <Badge color="neutral">部首</Badge>
              <span className="ml-2 text-xs">{radicals}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-4 leading-8 text-sm"
        dangerouslySetInnerHTML={{ __html: explanation.replace(/\n/g, '<br/>') }}
      />
    </>
  )
}