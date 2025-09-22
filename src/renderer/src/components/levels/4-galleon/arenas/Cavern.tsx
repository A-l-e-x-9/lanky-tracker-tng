import ArenaPool from '@renderer/src/components/pools/Arenas'
import VanillaArena from '@renderer/src/components/pools/VanillaArena'
import { useArena } from '@renderer/src/hooks/galleon'
import GalleonCheck from '../check'

const CavernArena: React.FC = () => (
  <ArenaPool>
    <VanillaArena>
      <GalleonCheck
        id={4090}
        name="Galleon Arena (Under Cranky)"
        region="Galleon Caverns"
        canGetLogic={useArena()}
      />
    </VanillaArena>
  </ArenaPool>
)

export default CavernArena
