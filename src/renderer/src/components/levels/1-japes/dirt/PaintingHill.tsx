import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { usePaintingDirt } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const PaintingHillDirt: React.FC = () => {
  const dirt = usePaintingDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <JapesCheck
          id={1070}
          name="Dirt in front of Lanky's Painting Room"
          region="Japes Hillside"
          canGetLogic={dirt.in}
          canGetBreak={dirt.out}
        />
      </VanillaDirt>
    </RainbowCoinPool>
  )
}

export default PaintingHillDirt
