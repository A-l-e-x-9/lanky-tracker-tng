import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useRambiFairy } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const RambiFairy: React.FC = () => {
const canDo = useRambiFairy()
return (
  <FairyPool>
    <VanillaFairy>
      <JapesCheck
        id={1080}
        name="Fairy at Pool in Rambi's Area"
        region="Stormy Area"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaFairy>
  </FairyPool>
)
}

export default RambiFairy
