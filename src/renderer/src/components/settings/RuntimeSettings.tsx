import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import { BananaportRange } from '@renderer/store/common'
import GeneratorSettings from './GeneratorSettings'
import { useForestTime, useGalleonTideStartHigh } from '@renderer/hooks/settings'
import ShuffledShops from './ShuffledShops'
import SlamShuffler from './ProgressiveSlams'
import ShuffledDKPortals from './ShuffledDKPortals'
import LoadingZoneRandomizer from './LZR'
import LockedWrinklyDoors from './locked-wrinkly-doors'

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
  const wrinklyDoorShuffler = useDonkStore(useShallow((state) => state.settings.lockedWrinklyDoors)) ? '' : 'locked-wrinkly'

  return (
    <section className="runtime-settings">
      <div>
        <h4>Settings</h4>
        <GeneratorSettings />
        <p>Current Galleon Tide:</p>
        <span onClick={() => setSetting('galleonHighTide', !galleonHighTide)} title={galleonHighTide ? "High: The Cannon Game, Lighthouse, Seal Race, and Gold Towers are available, as is Snide's" : "Low: Diddy's, Lanky's, and Chunky's 5DS rooms can be reached, as can Kevin"}>
          {galleonHighTide ? '🠱' : '🠳'}
        </span>
        <p>Current Forest Time:</p>
        <span onClick={handleClick} onContextMenu={handleContextClick} onWheel={handleWheel} title={forestTime === 0 ? "Day: The Main Mill of Area 1 is available, as are Snide's and the Rabbit" : forestTime === 1 ? "Night: Area 1's smaller mill rooms and Thornvine Barn are open, as are Chunky's Kasplat and the Owl Race" : "Dusk: No time-specific barriers even exist"}>
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
        <p className={`${wrinklyDoorShuffler}`}>Wrinkly Doors:</p>
        <LockedWrinklyDoors />
      </div>
    </section>
  )
}

export default RuntimeSettings
