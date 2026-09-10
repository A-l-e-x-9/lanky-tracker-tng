import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useLankyGoldGb, useDiddyGoldGb } from '@renderer/hooks/galleon'
import { useShockwave } from '@renderer/hooks/kongs'
import { useShuffleDirt } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const canReachLankyGold = useLankyGoldGb()
const canReachDiddyGold = useDiddyGoldGb()
const hasShockwave = useShockwave()
  return (
    <RainbowCoinPool>
      <GalleonCheck
        id={34030}
        name="Shuffled Dirt Patch: Top of Lanky's gold tower"
        region="Treasure Room"
        canGetLogic={canReachLankyGold.in && hasShockwave}
        canGetBreak={canReachLankyGold.out && hasShockwave}
      />
      <GalleonCheck
        id={34039}
        name="Shuffled Dirt Patch: Vanilla Warp 4, on Diddy's gold tower"
        region="Treasure Room"
        canGetLogic={canReachDiddyGold.in && hasShockwave}
        canGetBreak={canReachDiddyGold.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const TreasureDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default TreasureDirt
