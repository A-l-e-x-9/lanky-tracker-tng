import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useIglooFairy } from '@renderer/hooks/caves'
import CavesCheck from '../check'

const IglooFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <CavesCheck
        id={6080}
        name="Fairy in Tiny's 5-Door Igloo"
        region="Caves Igloo"
        canGetLogic={useIglooFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default IglooFairy
