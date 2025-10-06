import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useDartFairy } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const FunkyFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <FactoryCheck
        id={3081}
        name="Fairy from the Dartboard GB, at Funky's"
        region="Testing Room"
        canGetLogic={useDartFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default FunkyFairy
