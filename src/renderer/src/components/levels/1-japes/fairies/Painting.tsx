import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { usePaintingFairy } from '@renderer/src/hooks/japes'
import JapesCheck from '../check'

const PaintingFairy: React.FC = () => {
  const painting = usePaintingFairy()
  return (
    <FairyPool>
      <VanillaFairy>
        <JapesCheck
          id={1081}
          name="Japes Fairy (Painting Room)"
          region="Japes Caves And Mines"
          canGetLogic={painting.in}
          canGetBreak={painting.out}
        />
      </VanillaFairy>
    </FairyPool>
  )
}

export default PaintingFairy
