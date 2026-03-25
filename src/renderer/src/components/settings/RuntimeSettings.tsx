import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import { BananaportRange } from '@renderer/store/common'
import GeneratorSettings from './GeneratorSettings'
import { useForestTime, useGalleonTideStartHigh } from '@renderer/hooks/settings'
import ShuffledShops from './ShuffledShops'
import SlamShuffler from './ProgressiveSlams'
import ShuffledDKPortals from './ShuffledDKPortals'
import LoadingZoneRandomizer from './LZR'

const timeToString = (time: BananaportRange): string => {
  switch (time) {
    case 0:
      return '☼'
    case 1:
      return '☽'
    default:
      return '☼☽'
  }
}

const nextTime = (time: BananaportRange): BananaportRange => {
  switch (time) {
    case 0:
      return 1
    case 1:
      return 2
    default:
      return 0
  }
}

const prevTime = (time: BananaportRange): BananaportRange => {
  switch (time) {
    case 0:
      return 2
    case 1:
      return 0
    default:
      return 1
  }
}

const RuntimeSettings: React.FC = () => {
  const forestTime = useForestTime()
  const galleonHighTide = useGalleonTideStartHigh()
  const [setSetting] = useDonkStore(useShallow((state) => [state.setSetting]))

  const handleClick = (): void => {
    setSetting('forestTime', nextTime(forestTime))
  }
  const handleContextClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
    e.preventDefault()
    setSetting('forestTime', prevTime(forestTime))
  }

  const handleWheel = (e: React.WheelEvent<HTMLImageElement>): void => {
    if (e.deltaY >= 0) {
      setSetting('forestTime', nextTime(forestTime))
    } else {
      setSetting('forestTime', prevTime(forestTime))
    }
  }

  const shopShuffler = useDonkStore(useShallow((state) => state.settings.shuffleShops)) ? '' : 'shop-shuffler'
  const portalShuffler = useDonkStore(useShallow((state) => state.settings.shuffleDKPortals)) ? '' : 'portal-shuffler'
  const lzrShuffler = useDonkStore(useShallow((state) => state.settings.shuffleLoadingZones)) ? '' : 'lzr-shuffler'
  const slamShuffler = useDonkStore(useShallow((state) => state.settings.progressiveSlams)) ? '' : 'slam-shuffler'

  return (
    <section className="runtime-settings">
      <div>
        <h4>Settings</h4>
        <GeneratorSettings />
        <p>Current Galleon Tide:</p>
        <span onClick={() => setSetting('galleonHighTide', !galleonHighTide)}>
          {galleonHighTide ? '🠱' : '🠳'}
        </span>
        <p>Current Forest Time:</p>
        <span onClick={handleClick} onContextMenu={handleContextClick} onWheel={handleWheel}>
          {timeToString(forestTime)}
        </span>
        <p className={`${shopShuffler}`}>Shuffled Shops:</p>
        <ShuffledShops />
        <p className={`${slamShuffler}`}>Progressive Slams:</p>
        <SlamShuffler />
        <p className={`${portalShuffler}`}>Shuffled DK Portals:</p>
        <ShuffledDKPortals />
        <p className={`${lzrShuffler}`}>Loading Zone Randomizer:</p>
        <LoadingZoneRandomizer />
      </div>
    </section>
  )
}

export default RuntimeSettings
