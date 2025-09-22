import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useCabinFairy } from '@renderer/src/hooks/caves'
import CavesCheck from '../check'

const CabinFairy: React.FC = () => {
  const cabin = useCabinFairy()
  return (
    <FairyPool>
      <VanillaFairy>
        <CavesCheck
          id={6081}
          name="Caves Fairy (Diddy Candles Cabin)"
          region="Cabins Area"
          canGetLogic={cabin}
        />
      </VanillaFairy>
    </FairyPool>
  )
}

export default CabinFairy
