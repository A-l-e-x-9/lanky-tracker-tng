import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useNumberFairy } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const NumberFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <FactoryCheck
        id={3080}
        name="Fairy at tunnel to DK's number game"
        region="Testing Room"
        canGetLogic={useNumberFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default NumberFairy
