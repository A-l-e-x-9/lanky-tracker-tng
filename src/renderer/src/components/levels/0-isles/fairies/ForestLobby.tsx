import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useForestFairy } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const ForestLobbyFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <IslesCheck
        id={82}
        name="The Dreaded Forest Lobby Fairy"
        region="Japes-Forest Lobbies"
        canGetLogic={useForestFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default ForestLobbyFairy
