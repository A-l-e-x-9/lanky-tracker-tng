import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useKremFairy } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const UpperKremFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <IslesCheck
        id={83}
        name="Fairy Behind Helm Lobby"
        region="K. Rool's Island"
        canGetLogic={useKremFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default UpperKremFairy
