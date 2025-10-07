import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useArena } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const MushroomArena: React.FC = () => (
  <ArenaPool>
    <VanillaArena>
      <ForestCheck
        id={5090}
        name="Battle Arena at Mushroom Top"
        region="Forest Area 3"
        canGetLogic={useArena()}
      />
    </VanillaArena>
  </ArenaPool>
)

export default MushroomArena
