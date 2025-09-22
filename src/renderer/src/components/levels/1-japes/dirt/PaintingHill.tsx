import RainbowCoinPool from '@renderer/src/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/src/components/pools/VanillaDirt'
import { usePaintingDirt } from '@renderer/src/hooks/japes'
import JapesCheck from '../check'

const PaintingHillDirt: React.FC = () => {
  const dirt = usePaintingDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <JapesCheck
          id={1070}
          name="Japes Dirt: Painting Hill"
          region="Japes Hillside"
          canGetLogic={dirt.in}
          canGetBreak={dirt.out}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default PaintingHillDirt
