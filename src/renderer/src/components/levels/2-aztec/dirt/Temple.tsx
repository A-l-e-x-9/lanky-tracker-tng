import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/src/components/pools/VanillaDirt'
import { useTempleDirt } from '@renderer/src/hooks/aztec'
import AztecCheck from '../check'

const TempleDirt: React.FC = () => {
  const door = useTempleDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <AztecCheck
          id={2071}
          name="Aztec Dirt: Chunky Temple"
          region="5 Door Temple"
          canGetLogic={door.in}
          canGetBreak={door.out}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default TempleDirt
