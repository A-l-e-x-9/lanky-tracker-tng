import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useChestFairy } from '@renderer/src/hooks/galleon'
import GalleonCheck from '../check'

const ChestFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <GalleonCheck
        id={4080}
        name="Galleon Fairy (In Punch Chest)"
        region="Galleon Caverns"
        canGetLogic={useChestFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default ChestFairy
