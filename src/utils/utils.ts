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