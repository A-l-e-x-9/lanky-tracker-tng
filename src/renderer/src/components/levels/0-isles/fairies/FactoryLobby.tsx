import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useFactoryFairy } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

const FactoryLobbyFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <IslesCheck
        id={81}
        name="Isles Fairy (Factory Lobby)"
        region="Japes-Forest Lobbies"
        canGetLogic={useFactoryFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default FactoryLobbyFairy
