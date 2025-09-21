import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useForestFairy } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

const ForestLobbyFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <IslesCheck
        id={82}
        name="Isles Fairy (Fungi Lobby)"
        region="Japes-Forest Lobbies"
        canGetLogic={useForestFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default ForestLobbyFairy
