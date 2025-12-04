import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useForestArena } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const GoneArena: React.FC = () => {
const canDo = useForestArena()
return (
  <ArenaPool>
    <VanillaArena>
      <IslesCheck
        id={91}
        name="Battle Arena 2 (Check of Legends 2 in Forest Lobby)"
        region="Japes-Forest Lobbies"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaArena>
  </ArenaPool>
)
}

export default GoneArena
