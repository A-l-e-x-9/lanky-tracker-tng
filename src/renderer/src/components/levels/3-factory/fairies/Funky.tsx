import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useDartFairy } from '@renderer/src/hooks/factory'
import FactoryCheck from '../check'

const FunkyFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <FactoryCheck
        id={3081}
        name="Factory Fairy (Near Funky's)"
        region="Testing Area"
        canGetLogic={useDartFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default FunkyFairy
