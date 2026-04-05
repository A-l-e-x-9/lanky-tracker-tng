import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useForestFairy } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const ForestLobbyFairy: React.FC = () => {
const canDo = useForestFairy()
return (
  <FairyPool>
    <VanillaFairy>
      <IslesCheck
        id={82}
        name="The Dreaded Forest Lobby Fairy"
        region="Japes-Forest Lobbies"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaFairy>
  </FairyPool>
)
}

const Shuffled: React.FC = () => {
const canDo = useFactoryFairy()
return (
  <FairyPool>
    <IslesCheck
      id={40003}
      name="Shuffled Fairy: Vanilla Location #4 (my condolences...)"
      region="Japes-Forest Lobbies"
      canGetLogic={canDo.in}
      canGetBreak={canDo.out}
    />
  </FairyPool>
)
}

export const ForestLobbyFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ForestLobbyFairy
