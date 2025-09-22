import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useNumberFairy } from '@renderer/src/hooks/factory'
import FactoryCheck from '../check'

const NumberFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <FactoryCheck
        id={3080}
        name="Factory Fairy (Number Game)"
        region="Testing Area"
        canGetLogic={useNumberFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default NumberFairy
