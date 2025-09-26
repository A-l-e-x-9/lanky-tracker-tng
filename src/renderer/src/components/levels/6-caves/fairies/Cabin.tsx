import Miniboss from '@renderer/components/pools/Miniboss'
import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useCabinFairy } from '@renderer/hooks/caves'
import CavesCheck from '../check'

const CabinFairy: React.FC = () => {
  const cabin = useCabinFairy()
  return (
  <Miniboss>
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
  </Miniboss>
  )
}

export default CabinFairy
