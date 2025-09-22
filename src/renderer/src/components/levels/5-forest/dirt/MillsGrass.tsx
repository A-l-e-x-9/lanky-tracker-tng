import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/src/components/pools/VanillaDirt'
import { useGeneralDirt } from '@renderer/src/hooks/forest'
import ForestCheck from '../check'

const MillsGrassDirt: React.FC = () => (
  <RainbowCoinPool>
    <VanillaDirt>
      <ForestCheck
        id={5071}
        name="The infamous Mills Grass dirt patch!"
        region="Forest Mills"
        canGetLogic={useGeneralDirt()}
      />
    </VanillaDirt>
  </RainbowCoinPool>
)

export default MillsGrassDirt
