import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useNumberFairy } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const NumberFairy: React.FC = () => {
const canDo = useNumberFairy()
return (
  <FairyPool>
    <VanillaFairy>
      <FactoryCheck
        id={3080}
        name="That jumpy fairy at tunnel to DK's number game"
        region="Testing Room"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaFairy>
  </FairyPool>
)
}

export default NumberFairy
