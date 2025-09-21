import ArenaPool from '@renderer/src/components/pools/Arenas'
import VanillaArena from '@renderer/src/components/pools/VanillaArena'
import { useForestArena } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

const GoneArena: React.FC = () => (
  <ArenaPool>
    <VanillaArena>
      <IslesCheck
        id={91}
        name="Isles Arena 2 (Fungi Lobby: Gone Box)"
        region="Japes-Forest Lobbies"
        canGetLogic={useForestArena()}
      />
    </VanillaArena>
  </ArenaPool>
)

export default GoneArena
