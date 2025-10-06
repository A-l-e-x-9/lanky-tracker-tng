import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useArena } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const RNDArena: React.FC = () => (
  <ArenaPool>
    <VanillaArena>
      <FactoryCheck
        id={3090}
        name="Arena (Under Grate)"
        region="R&D Room"
        canGetLogic={useArena()}
      />
    </VanillaArena>
  </ArenaPool>
)

export default RNDArena
