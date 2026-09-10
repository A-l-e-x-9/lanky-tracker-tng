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
      <GalleonCheck
        id={14030}
        name="Shuffled Battle Arena: Top of Lanky's gold tower"
        region="Treasure Room"
        canGetLogic={canReachLankyGold.in}
        canGetBreak={canReachLankyGold.out}
      />
      <GalleonCheck
        id={14035}
        name="Shuffled Battle Arena: Vanilla Warp 2, near the 2DS"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
      <GalleonCheck
        id={14038}
        name="Shuffled Battle Arena: Vanilla Warp 4, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
      <GalleonCheck
        id={14039}
        name="Shuffled Battle Arena: Vanilla Warp 4, on Diddy's gold tower"
        region="Treasure Room"
        canGetLogic={canReachDiddyGold.in}
        canGetBreak={canReachDiddyGold.out}
      />
      <GalleonCheck
        id={14041}
        name="Shuffled Battle Arena: Vanilla Warp 5, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
    </ArenaPool>
  )
}

export default ShuffledArenas
