import React from 'react'
import { Switch, Button, ButtonGroup } from '@blueprintjs/core'

export default function Settings() {
  return (
    <>
      <div>

        <div className="py-4 border-t flex justify-between items-center">
          <div>
            <span>深色模式</span>
          </div>
          <Switch large alignIndicator="right" className="m-0 inline-block" />
        </div>

        <div className="py-4 border-t flex justify-between items-center">
          <div>
            <span>滴落音效</span>
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
            <p className="mt-1 text-gray-500 text-xs">厉害，大约 4 年 3 个月可以滴完</p>
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

        <div className="py-4 border-t flex justify-between items-center">
          <div>
            <span>安装字体包</span>
            <p className="mt-1 text-gray-500 text-xs">楷体、仿宋(17.5 MB)</p>
          </div>
          <Button icon="download" />
        </div>

        <div className="py-4 border-t flex justify-between items-center">
          <div>
            <span>清空所有数据</span>
            <p className="mt-1 text-gray-500 text-xs">清除墨库、字体以及用户数据</p>
          </div>
          <Button intent="danger" icon="trash" />
        </div>

      </div>
    </>
  )
}