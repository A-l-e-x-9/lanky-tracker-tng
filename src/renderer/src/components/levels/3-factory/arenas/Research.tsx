import ArenaPool from '@renderer/src/components/pools/Arenas'
import VanillaArena from '@renderer/src/components/pools/VanillaArena'
import { useArena } from '@renderer/src/hooks/factory'
import FactoryCheck from '../check'

const RNDArena: React.FC = () => (
  <ArenaPool>
    <VanillaArena>
      <FactoryCheck
        id={3090}
        name="Factory Arena (Under R and D Grate)"
        region="R&D Area"
        canGetLogic={useArena()}
      />
    </VanillaArena>
  </ArenaPool>
)

export default RNDArena
