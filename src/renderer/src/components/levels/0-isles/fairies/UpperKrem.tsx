import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useKremFairy } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

const UpperKremFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <IslesCheck
        id={83}
        name="Isles Fairy (Upper Krem Isles)"
        region="Krem Isle"
        canGetLogic={useKremFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default UpperKremFairy
