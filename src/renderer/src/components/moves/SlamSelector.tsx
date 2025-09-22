import useDonkStore from '@renderer/src/store'
import { useShallow } from 'zustand/react/shallow'
import { useChunkySlamLevel } from '@renderer/src/hooks/settings'
import slamIcon from '../../assets/images/slam1.png'
import superIcon from '../../assets/images/slam2.png'
import duperIcon from '../../assets/images/slam3.png'

import { MouseEvent, WheelEvent } from 'react'

const slamToIcon = (num: number): string => {
  switch (num) {
    case 2:
      return superIcon
    case 3:
      return duperIcon
    default:
      return slamIcon
  }
}

const slamName = (num: number): string => {
  switch (num) {
    case 2:
      return "Super Simian Slam"
    case 3:
      return "Super Duper Simian Slam"
    default:
      return "Simian Slam"
  }
}

const clamp = (num: number): number => Math.min(Math.max(num, 0), 3)

const nextSlam = (num: number): number => clamp(num + 1)

const prevSlam = (num: number): number => clamp(num - 1)

export const SlamSelector: React.FC = () => {
  const [slam, setSlam] = useDonkStore(useShallow((state) => [state.moves.slam, state.setSlam]))

  const handleNextLevel = (): void => {
    setSlam(nextSlam(slam))
  }

  const handlePrevLevel = (e: MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setSlam(prevSlam(slam))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setSlam(nextSlam(slam))
    } else {
      setSlam(prevSlam(slam))
    }
  }

  return (
    <div className="slam-icon moves-slam">
      <img
        height={24}
        alt={slamName(slam)}
        title={slamName(slam)}
        src={slamToIcon(slam)}
        onClick={handleNextLevel}
        onContextMenu={handlePrevLevel}
        onWheel={handleWheel}
        style={{ filter: `grayscale(${slam != 0 ? '0' : '1'})` }}
      />
    </div>
  )
}

export const KRoolSlamSelector: React.FC = () => {
  const chunkySlamLevel = useChunkySlamLevel()
  const [setSetting] = useDonkStore(useShallow((state) => [state.setSetting]))

  const handleNextLevel = (): void => {
    setSetting('chunkySlamLevel', nextSlam(chunkySlamLevel))
  }

  const handlePrevLevel = (e: MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setSetting('chunkySlamLevel', prevSlam(chunkySlamLevel))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setSetting('chunkySlamLevel', nextSlam(chunkySlamLevel))
    } else {
      setSetting('chunkySlamLevel', prevSlam(chunkySlamLevel))
    }
  }

  return (
    <div>
      <img
        className="simple-icon"
        height={24}
        alt={slamName(chunkySlamLevel)}
        title={slamName(chunkySlamLevel)}
        src={slamToIcon(chunkySlamLevel)}
        onClick={handleNextLevel}
        onContextMenu={handlePrevLevel}
        onWheel={handleWheel}
        style={{ filter: `grayscale(${chunkySlamLevel != 0 ? '0' : '1'})` }}
      />
    </div>
  )
}
