import ArenaPool from '@renderer/src/components/pools/Arenas'
import VanillaArena from '@renderer/src/components/pools/VanillaArena'
import { useDkRotateGb } from '@renderer/src/hooks/caves'
import CavesCheck from '../check'

const CabinArena: React.FC = () => (
  <ArenaPool>
    <VanillaArena>
      <CavesCheck
        id={6090}
        name="Caves Arena (Rotating Room: Left Portion)"
        region="Cabins Area"
        canGetLogic={useDkRotateGb()}
      />
    </VanillaArena>
  </ArenaPool>
)

export default CabinArena
