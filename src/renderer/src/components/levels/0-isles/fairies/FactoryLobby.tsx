import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useFactoryFairy } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const FactoryLobbyFairy: React.FC = () => {
const canDo = useFactoryFairy()
return (
  <FairyPool>
    <VanillaFairy>
      <IslesCheck
        id={81}
        name="Factory Lobby Fairy"
        region="Japes-Forest Lobbies"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaFairy>
  </FairyPool>
)
}

export default FactoryLobbyFairy
