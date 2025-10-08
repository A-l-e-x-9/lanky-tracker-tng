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
          name="Diddy Upper Cabin Fairy"
          region="Caves Cabins"
          canGetLogic={cabin}
        />
      </VanillaFairy>
    </FairyPool>
  </Miniboss>
  )
}

export default CabinFairy
