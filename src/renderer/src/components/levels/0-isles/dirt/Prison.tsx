import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useGeneralDirt } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const PrisonDirt: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <IslesCheck
          id={72}
          name="Dirt in K. Lumsy's Prison"
          region="K. Rool's Island"
          canGetLogic={dirt}
        />
      </VanillaDirt>{' '}
    </RainbowCoinPool>
  )
}

export default PrisonDirt
