import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useArena } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const CavernArena: React.FC = () => {
const canDo = useArena()
return (
  <ArenaPool>
    <VanillaArena>
      <GalleonCheck
        id={4090}
        name="Battle Arena (under Cranky's)"
        region="Galleon Caves"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaArena>
  </ArenaPool>
)
}

export default CavernArena
