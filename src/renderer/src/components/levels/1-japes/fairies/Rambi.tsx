import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useRambiFairy } from '@renderer/src/hooks/japes'
import JapesCheck from '../check'

const RambiFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <JapesCheck
        id={1080}
        name="Japes Fairy (Rambi Door Pool)"
        region="Stormy Tunnel Area"
        canGetLogic={useRambiFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default RambiFairy
