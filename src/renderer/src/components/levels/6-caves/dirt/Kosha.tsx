import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/src/components/pools/VanillaDirt'
import { useKoshaDirt } from '@renderer/src/hooks/caves'
import CavesCheck from '../check'

const KoshaDirt: React.FC = () => {
  const dirt = useKoshaDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <CavesCheck
          id={6070}
          name="Caves Dirt: Giant Kosha"
          region="Igloo Area"
          canGetLogic={dirt.in}
          canGetBreak={dirt.out}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default KoshaDirt
