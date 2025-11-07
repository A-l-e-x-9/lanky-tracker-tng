import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useDkRotateGb } from '@renderer/hooks/caves'
import CavesCheck from '../check'

const CabinArena: React.FC = () => {
const canDo = useDkRotateGb()
return (
  <ArenaPool>
    <VanillaArena>
      <CavesCheck
        id={6090}
        name="Battle Arena (in DK's rotating cabin)"
        region="Caves Cabins"
        canGetLogic={canDo.in}
        canGetBreak={canDo.out}
      />
    </VanillaArena>
  </ArenaPool>
)
}

export default CabinArena
