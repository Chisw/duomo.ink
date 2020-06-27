import React from 'react'
import { Switch, Button, ButtonGroup } from '@blueprintjs/core'

export default function Settings() {
  return (
    <>
      <div>
        <div className="py-4 border-t flex justify-between items-center">
          <div>
            <span>墨滴音效</span>
          </div>
          <Switch large alignIndicator="right" className="m-0 inline-block" />
        </div>

        <div className="py-4 border-t flex justify-between items-center">
          <div>
            <span>随机滴落</span>
          </div>
          <Switch large alignIndicator="right" className="m-0 inline-block" />
        </div>

        <div className="py-4 border-t flex justify-between items-center">
          <div>
            <span>过滤重复</span>
            <p className="mt-1 text-gray-500 text-xs">已吸纳的墨水不再滴落</p>
          </div>
          <Switch large alignIndicator="right" className="m-0 inline-block" />
        </div>

        <div className="py-4 border-t flex justify-between items-center">
          <div>
            <span>每日目标滴数</span>
            <p className="mt-1 text-gray-500 text-xs">大约 4 年 3 个月可以滴完</p>
          </div>
          <ButtonGroup>
            <Button
              icon="minus"
            />
            <Button
              text="10"
              className="bg-white"
            />
            <Button
              icon="plus"
            />
          </ButtonGroup>
        </div>

      </div>
    </>
  )
}