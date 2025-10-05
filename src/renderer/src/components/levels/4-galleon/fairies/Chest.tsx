import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useChestFairy } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const ChestFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <GalleonCheck
        id={4080}
        name="Fairy in Chunky's Left Chest"
        region="Galleon Caverns"
        canGetLogic={useChestFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default ChestFairy
