import { WheelEvent } from 'react'
import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/src/store'
import { Level } from '@renderer/src/store/common'

import aztecIcon from '../../assets/images/aztec.png'
import castleIcon from '../../assets/images/castle.png'
import cavesIcon from '../../assets/images/caves.png'
import factoryIcon from '../../assets/images/factory.png'
import forestIcon from '../../assets/images/forest.png'
import galleonIcon from '../../assets/images/galleon.png'
import helmIcon from '../../assets/images/helm.png'
import japesIcon from '../../assets/images/japes.png'
import unknownIcon from '../../assets/images/unknown.png'

type LevelSelectorProps = {
  storeKey: string
}

const levelToIcon = (level: Level): string => {
  switch (level) {
    case 'Angry Aztec':
      return aztecIcon
    case 'Creepy Castle':
      return castleIcon
    case 'Crystal Caves':
      return cavesIcon
    case 'Frantic Factory':
      return factoryIcon
    case 'Fungi Forest':
      return forestIcon
    case 'Gloomy Galleon':
      return galleonIcon
    case 'Hideout Helm':
      return helmIcon
    case 'Jungle Japes':
      return japesIcon
    default:
      return unknownIcon
  }
}

const nextLevel = (level: Level): Level => {
  switch (level) {
    case 'Jungle Japes':
      return 'Angry Aztec'
    case 'Angry Aztec':
      return 'Frantic Factory'
    case 'Frantic Factory':
      return 'Gloomy Galleon'
    case 'Gloomy Galleon':
      return 'Fungi Forest'
    case 'Fungi Forest':
      return 'Crystal Caves'
    case 'Crystal Caves':
      return 'Creepy Castle'
    case 'Creepy Castle':
      return 'Hideout Helm'
    case 'Hideout Helm':
      return ''
    default:
      return 'Jungle Japes'
  }
}

const prevLevel = (level: Level): Level => {
  switch (level) {
    case 'Jungle Japes':
      return ''
    case 'Angry Aztec':
      return 'Jungle Japes'
    case 'Frantic Factory':
      return 'Angry Aztec'
    case 'Gloomy Galleon':
      return 'Frantic Factory'
    case 'Fungi Forest':
      return 'Gloomy Galleon'
    case 'Crystal Caves':
      return 'Fungi Forest'
    case 'Creepy Castle':
      return 'Crystal Caves'
    case 'Hideout Helm':
      return 'Creepy Castle'
    default:
      return 'Hideout Helm'
  }
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ storeKey }) => {
  const [level, setLevel] = useDonkStore(
    useShallow((state) => [state[storeKey] as Level, state.setLevel])
  )
  const lvlNum = Number.parseInt(storeKey.slice(5), 10)

  const handleNextLevel = (): void => {
    setLevel(lvlNum, nextLevel(level))
  }

  const handlePrevLevel = (): void => {
    setLevel(lvlNum, prevLevel(level))
  }

  const handleWheel = (e: WheelEvent<HTMLImageElement>): void => {
      if (e.deltaY >= 0) {
        setLevel(lvlNum, nextLevel(level))
      } else {
        setLevel(lvlNum, prevLevel(level))
      }
  }

  const levelTitle = level !== '' ? level : 'Unknown'

  return (
    <>
      <img
        alt={levelTitle}
        title={levelTitle}
        height={24}
        src={levelToIcon(level)}
        onClick={handleNextLevel}
        onContextMenu={handlePrevLevel}
        onWheel={handleWheel}
      />
    </>
  )
}

export default LevelSelector
