import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useArena } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

const VultureArena: React.FC = () => {
  const vulture = useArena()
  return (
    <ArenaPool>
      <VanillaArena>
        <AztecCheck
          id={2090}
          name="The Vulture's Battle Arena"
          region="Tiny Temple"
          canGetLogic={vulture.in}
          canGetBreak={vulture.out}
        />
      </VanillaArena>
    </ArenaPool>
  )
}

export default VultureArena
