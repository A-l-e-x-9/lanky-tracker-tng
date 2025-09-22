import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useShipFairy } from '@renderer/src/hooks/galleon'
import GalleonCheck from '../check'

const ShipFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <GalleonCheck
        id={4081}
        name="Galleon Fairy (In Tiny's 5 Door Ship)"
        region="5 Door Ship"
        canGetLogic={useShipFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default ShipFairy
