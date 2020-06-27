import React, { useState } from 'react'
import { ZI } from './Template'
import Center from './Center'
import drip from '../images/drip.svg'
import { AUDIO } from '../utils/utils'

export default function Home() {

  const [isClicked, setIsClicked] = useState(false)

  const handleClicked = () => {
    if (isClicked) return
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 640)
    AUDIO.play('audio-drop')
  }

  return (
    <>
      <div
        className="duomo-body fixed inset-0 z-10 py-4 overflow-y-auto"
        style={{ top: 72 }}
      >
        <Center innerClassName="pb-24">
          <ZI
            data={{
              "word": "笋",
              "oldword": "箂",
              "strokes": "10",
              "pinyin": "sǔn",
              "radicals": "竹",
              "explanation": "笋 \n (形声。从竹,尹声。本义竹笋)\n 竹子初从土里长出的嫩芽,味鲜美,可以做菜,也叫竹笋” \n 箂,竹胎也。--《说文》。字亦作笋。\n 绚笋及蒲。--《诗·大雅·韩奕》\n 苞笋抽节。--左思《吴都赋》\n 如筴竹笋,有二月生者,有三四月生者,有五月方生者谓之晚筴。--宋·沈括《梦溪笔谈》\n 又如笋玉(喻指女人的手指);笋剥(像剥笋似地脱掉,剥光);笋枯(笋干);笋鞭(竹的地下茎);笋尖(笋的尖嫩部分);笋衣(笋壳)\n 竹的青皮 \n 敷重笋席。--《书·顾命》。郑注析竹青皮也。”\n 如竹箭之有筠也。--《礼记·\n 笋（箂）sǔn竹的嫩茎、芽，可作菜吃冬～。毛～子。\n 笋xùn 1.竹舆。\n 笋yún 1.嫩竹的青皮;蔑青。柔韧性好，可制席。参见\"笋席\"。",
            }}
          />
        </Center>
        <div
          className={`fixed z-20 -ml-8 w-16 h-16 rounded-full flex justify-center items-center cursor-pointer
          transition duration-100 transform shadow-md hover:shadow-lg select-none overflow-hidden`}
          style={{
            bottom: '2rem',
            left: '50%',
            background: 'linear-gradient(180deg, rgba(230, 230, 230, .9), rgba(255, 255, 255, .9))',
            backdropFilter: 'blur(2px)',
          }}
          onClick={handleClicked}
        >
          <img src={drip} alt="dice" className={`w-8 transition duration-300 ${isClicked ? 'animation-drop' : ''}`} />
        </div>
      </div>
    </>
  )
}