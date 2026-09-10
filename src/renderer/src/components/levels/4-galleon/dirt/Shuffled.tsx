import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import CavernDirt from './Caverns'
import LighthouseDirt from './Lighthouse'
import OutskirtDirt from './Outskirts'
import TreasureDirt from './Treasure'

const ShuffledDirt: React.FC = () => {
const canDoVanillaDirt = useLighthouseDirt()
const canReachLighthouse = useGalleonLighthouseInside()
const canReachLighthouseOuter = useGalleonLighthousePlatform()
const canReachKevin = useKevin()
const canReachLankyGold = useLankyGoldGb()
const canReachShipyard = useGalleonOutskirts()
const canReachDiddyGold = useDiddyGoldGb()
const canReachChunkyShip = useGalleonSeasickShip()
const hasPrimatePunch = usePunch()
const hasClimbing = useClimbing()
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
        id={34039}
        name="Shuffled Dirt Patch: Vanilla Warp 4, on Diddy's gold tower"
        region="Treasure Room"
        canGetLogic={canReachDiddyGold.in && hasShockwave}
        canGetBreak={canReachDiddyGold.out && hasShockwave}
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

export default ShuffledDirt
