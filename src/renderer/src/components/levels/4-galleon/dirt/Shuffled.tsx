import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import CavernDirt from './Caverns'
import LighthouseDirt from './Lighthouse'
import OutskirtDirt from './Outskirts'
import TreasureDirt from './Treasure'

const ShuffledDirt: React.FC = () => {
  return (
    <RainbowCoinPool>
      <CavernDirt />
      <LighthouseDirt />
      <OutskirtDirt />
      <TreasureDirt />
    </RainbowCoinPool>
  )
}

export default ShuffledDirt
