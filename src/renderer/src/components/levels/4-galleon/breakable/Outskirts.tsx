import ArenaPool from '@renderer/components/pools/Arenas'
import { useGalleonOutskirts } from '@renderer/hooks/galleon'
import { useShuffledArenas } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const canReachShipyard = useGalleonOutskirts()
  return (
    <ArenaPool>
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Vanilla Warp 2, near the 2DS"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Vanilla Warp 4, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Vanilla Warp 5, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in}
        canGetBreak={canReachShipyard.out}
      />
    </ArenaPool>
  )
}

const OutskirtArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default OutskirtArenas
