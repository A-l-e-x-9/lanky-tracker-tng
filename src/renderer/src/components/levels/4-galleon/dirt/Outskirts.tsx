import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGalleonOutskirts } from '@renderer/hooks/galleon'
import { useShockwave } from '@renderer/hooks/kongs'
import { useShuffleDirt } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const canReachShipyard = useGalleonOutskirts()
const hasShockwave = useShockwave()
  return (
    <RainbowCoinPool>
      <GalleonCheck
        id={34035}
        name="Shuffled Dirt Patch: Vanilla Warp 2, near the 2DS"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasShockwave}
        canGetBreak={canReachShipyard.out && hasShockwave}
      />
      <GalleonCheck
        id={34038}
        name="Shuffled Dirt Patch: Vanilla Warp 4, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasShockwave}
        canGetBreak={canReachShipyard.out && hasShockwave}
      />
      <GalleonCheck
        id={34041}
        name="Shuffled Dirt Patch: Vanilla Warp 5, in the shipyard"
        region="Shipyard Outskirts"
        canGetLogic={canReachShipyard.in && hasShockwave}
        canGetBreak={canReachShipyard.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const OutskirtDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default OutskirtDirt
