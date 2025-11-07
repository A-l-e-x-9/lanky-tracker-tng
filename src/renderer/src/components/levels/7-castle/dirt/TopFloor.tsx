import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useGeneralDirt } from '@renderer/hooks/castle'
import CastleCheck from '../check'

const TopFloorDirt: React.FC = () => {
const canDo = useGeneralDirt()
return (
  <RainbowCoinPool>
    <VanillaDirt>
      <CastleCheck
        id={7070}
        name="Dirt Behind Snide's"
        region="Creepy Castle Main"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaDirt>
  </RainbowCoinPool>
)
}

export default TopFloorDirt
