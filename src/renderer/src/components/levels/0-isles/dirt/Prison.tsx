import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/src/components/pools/VanillaDirt'
import { useGeneralDirt } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

const PrisonDirt: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <IslesCheck
          id={72}
          name="Isles Dirt: Back of Prison"
          region="Krem Isle"
          canGetLogic={dirt}
        />
      </VanillaDirt>{' '}
    </RainbowCoinPool>
  )
}

export default PrisonDirt
