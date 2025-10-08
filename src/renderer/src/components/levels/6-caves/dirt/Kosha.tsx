import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useKoshaDirt } from '@renderer/hooks/caves'
import CavesCheck from '../check'

const KoshaDirt: React.FC = () => {
  const dirt = useKoshaDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <CavesCheck
          id={6070}
          name="The Giant Kosha's Dirt"
          region="Caves Igloo"
          canGetLogic={dirt.in}
          canGetBreak={dirt.out}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default KoshaDirt
