import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useArena } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const MushroomArena: React.FC = () => {
const canDo = useArena()
return (
  <ArenaPool>
    <VanillaArena>
      <ForestCheck
        id={5090}
        name="Battle Arena at Mushroom Top"
        region="Forest Area 3"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaArena>
  </ArenaPool>
)
}

export default MushroomArena
