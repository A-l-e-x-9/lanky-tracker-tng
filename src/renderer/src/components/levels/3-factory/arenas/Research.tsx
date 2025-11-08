import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useArena } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const RNDArena: React.FC = () => {
const canDo = useArena()
return (
  <ArenaPool>
    <VanillaArena>
      <FactoryCheck
        id={3090}
        name="Arena (Under Grate)"
        region="R&D Room"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaArena>
  </ArenaPool>
)
}

export default RNDArena
