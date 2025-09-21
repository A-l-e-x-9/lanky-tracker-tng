import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/src/components/pools/VanillaDirt'
import { useIslandDirt } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

const CabinIsleDirt: React.FC = () => (
  <RainbowCoinPool>
    <VanillaDirt>
      <IslesCheck
        id={75}
        name="Isles Dirt: Cabin Isle"
        region="Outer Isles"
        canGetLogic={useIslandDirt()}
      />
    </VanillaDirt>
  </RainbowCoinPool>
)

export default CabinIsleDirt
