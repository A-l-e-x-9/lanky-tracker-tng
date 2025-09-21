import ArenaPool from '@renderer/src/components/pools/Arenas'
import VanillaArena from '@renderer/src/components/pools/VanillaArena'
import { useSnideArena } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

const SnideArena: React.FC = () => (
  <ArenaPool>
    <VanillaArena>
      <IslesCheck
        id={90}
        name="Isles Arena 1 (Snide's Room: Under Rock)"
        region="Krem Isle"
        canGetLogic={useSnideArena()}
      />
    </VanillaArena>
  </ArenaPool>
)

export default SnideArena
