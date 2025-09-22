import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/src/components/pools/VanillaDirt'
import { useGeneralDirt } from '@renderer/src/hooks/aztec'
import AztecCheck from '../check'

const OasisDirt: React.FC = () => {
  const thing = useGeneralDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <AztecCheck
          id={2070}
          name="Aztec Dirt: Oasis"
          region="Aztec Oasis And Totem Area"
          canGetLogic={thing.in}
          canGetBreak={thing.out}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default OasisDirt
