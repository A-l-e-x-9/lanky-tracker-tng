import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useTreeFairy } from '@renderer/hooks/castle'
import CastleCheck from '../check'

const TreeFairy: React.FC = () => {
const canDo = useTreeFairy()
return (
  <FairyPool>
    <VanillaFairy>
      <CastleCheck
        id={7080}
        name="Fairy in the Tree"
        region="Creepy Castle Main"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaFairy>
  </FairyPool>
)
}

export default TreeFairy
