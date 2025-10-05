import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useIslandDirt } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const CabinIsleDirt: React.FC = () => (
  <RainbowCoinPool>
    <VanillaDirt>
      <IslesCheck
        id={75}
        name="Dirt Patch on Forest Lobby Island"
        region="Outer Isles"
        canGetLogic={useIslandDirt()}
      />
    </VanillaDirt>
  </RainbowCoinPool>
)

export default CabinIsleDirt
