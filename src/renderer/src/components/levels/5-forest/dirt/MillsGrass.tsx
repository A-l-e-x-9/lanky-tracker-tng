import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useGeneralDirt } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const MillsGrassDirt: React.FC = () => {
const canDo = useGeneralDirt()
return (
  <RainbowCoinPool>
    <VanillaDirt>
      <ForestCheck
        id={5071}
        name="The infamous Mills Grass dirt patch!"
        region="Forest Area 1"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaDirt>
  </RainbowCoinPool>
)
}

export default MillsGrassDirt
