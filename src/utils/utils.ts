import Toast from '../components/EasyToast'

export const AUDIO = {
  play(audioId: string) {
    const audio = document.getElementById(audioId) as HTMLAudioElement | null
    if (audio) {
      audio.pause()
      audio.currentTime = 0
      audio.play()
    }
  },
}

export const INK_LIST = [
  { title: '字', size: 7.5, count: 16142, status: 1 },
  { title: '词', size: 26.1, count: 264434, status: 0 },
  { title: '成语', size: 10.3, count: 31648, status: 0 },
  { title: '歇后语', size: 1.3, count: 14032, status: 0 },
]

export const copy = (str: string) => {
  const input = document.createElement('input')
  document.body.appendChild(input)
  input.value = str
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
  Toast.success('复制成功', 1000)
}
