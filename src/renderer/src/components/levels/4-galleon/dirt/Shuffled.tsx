import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import CavernDirt from './Caverns'
import LighthouseDirt from './Lighthouse'
import OutskirtDirt from './Outskirts'
import TreasureDirt from './Treasure'

const ShuffledDirt: React.FC = () => {
const canReachLankyGold = useLankyGoldGb()
const canReachDiddyGold = useDiddyGoldGb()
  return (
    <RainbowCoinPool>
      <CavernDirt />
      <LighthouseDirt />
      <OutskirtDirt />
      <TreasureDirt />
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

export default ShuffledDirt
