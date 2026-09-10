import ArenaPool from '@renderer/components/pools/Arenas'
import GalleonCheck from '../check'
import CavernArenas from '../arenas/Caverns'
import LighthouseArenas from '../arenas/Lighthouse'
import OutskirtArenas from '../arenas/Outskirts'
import TreasureArenas from '../arenas/Treasure'

const ShuffledArenas: React.FC = () => {
  return (
    <ArenaPool>
      <CavernArenas />
      <LighthouseArenas />
      <OutskirtArenas />
      <TreasureArenas />
    </ArenaPool>
  )
}

export default ShuffledArenas
