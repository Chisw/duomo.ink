import React from 'react'
import { INK_LIST } from '../utils/utils'
import { Button } from '@blueprintjs/core'
import { Line } from 'react-chartjs-2'
import { Interval, DateTime } from 'luxon'

export default function User() {

  const counts = [
    { date: '2020/05/27', count: 9 },
    { date: '2020/05/29', count: 4 },
    { date: '2020/06/02', count: 2 },
    { date: '2020/06/05', count: 9 },
    { date: '2020/06/06', count: 2 },
    { date: '2020/06/07', count: 6 },
    { date: '2020/06/08', count: 9 },
    { date: '2020/06/09', count: 1 },
    { date: '2020/06/11', count: 1 },
    { date: '2020/06/12', count: 5 },
    { date: '2020/06/14', count: 9 },
    { date: '2020/06/15', count: 4 },
    { date: '2020/06/16', count: 5 },
    { date: '2020/06/18', count: 6 },
    { date: '2020/06/21', count: 6 },
    { date: '2020/06/22', count: 1 },
    { date: '2020/06/23', count: 6 },
    { date: '2020/06/25', count: 4 },
    { date: '2020/06/26', count: 1 },
  ]


  const allCounts = Interval
    .fromDateTimes(
      DateTime.fromFormat('2020/05/27', 'yyyy/MM/dd'),
      DateTime.local()
    )
    .splitBy({ days: 1 })
    .map(d => {
      const date = d.start.toFormat('yyyy/MM/dd')
      const exist = counts.find(i => i.date === date)
      const count = exist ? exist.count : 0
      return {
        date,
        count,
      }
    })

  const data = {
    labels: allCounts.map(d => d.date),
    datasets: [
      {
        label: '每日滴落数',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(5, 158, 249, 0.4)',
        borderColor: 'rgba(5, 158, 249, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(5, 158, 249, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(5, 158, 249, 1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        scaleSteps: 10,
        data: allCounts.map(d => d.count)
      }
    ]
  }


  return (
    <>
      <div className="mb-4 border rounded h-32 md:h-40">
        <Line
          data={data}
          width={3}
          height={1}
          options={{
            tooltips: {
              intersect: false,
            },
            scales: {
              xAxes: [{
                ticks: {
                  maxTicksLimit: 5,
                  maxRotation: 0,
                  callback: (label: any) => label ? label.substring(0, 7) : label
                }
              }],
            },
          }}
        />
      </div>
      <div className="-mx-2 flex flex-wrap">
        {INK_LIST.map(({ title, count }, index) => (
          <div
            key={index}
            className="mb-4 px-2 w-1/2"
          >
            <div className={`p-2 border rounded`}>
              <span className="text-xl">
                {title}
              </span>
              <p className="text-xs text-gray-700">
                已吸纳 {Math.floor(Math.random()*10000)}/{count} 滴<br />
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <Button fill large icon="export" intent="primary" text="导出数据" />
      </div>
    </>
  )
}