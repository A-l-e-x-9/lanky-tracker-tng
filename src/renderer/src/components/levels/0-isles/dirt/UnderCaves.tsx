import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/src/components/pools/VanillaDirt'
import { useGeneralDirt } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

const UnderCaves: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <IslesCheck
          id={73}
          name="Isles Dirt: Under Caves Lobby"
          region="Main Isle"
          canGetLogic={dirt}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default UnderCaves
