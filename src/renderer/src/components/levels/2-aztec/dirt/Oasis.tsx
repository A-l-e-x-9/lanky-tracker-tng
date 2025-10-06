import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useGeneralDirt } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

const OasisDirt: React.FC = () => {
  const thing = useGeneralDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <AztecCheck
          id={2070}
          name="Oasis Dirt"
          region="Aztec Main Area"
          canGetLogic={thing.in}
          canGetBreak={thing.out}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default OasisDirt
