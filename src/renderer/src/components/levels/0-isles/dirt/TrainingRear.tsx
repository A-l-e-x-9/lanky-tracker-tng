import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/src/components/pools/VanillaDirt'
import { useGeneralDirt } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

const TrainingRear: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <IslesCheck
          id={70}
          name="Isles Dirt: Training Grounds Rear Tunnel"
          region="Main Isle"
          canGetLogic={dirt}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default TrainingRear
