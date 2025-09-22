import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useTreeFairy } from '@renderer/src/hooks/castle'
import CastleCheck from '../check'

const TreeFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <CastleCheck
        id={7080}
        name="Castle Fairy (Tree Sniper Room)"
        region="Castle Surroundings"
        canGetLogic={useTreeFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default TreeFairy
