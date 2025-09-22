import ArenaPool from '@renderer/src/components/pools/Arenas'
import VanillaArena from '@renderer/src/components/pools/VanillaArena'
import { useArena } from '@renderer/src/hooks/aztec'
import AztecCheck from '../check'

const VultureArena: React.FC = () => {
  const vulture = useArena()
  return (
    <ArenaPool>
      <VanillaArena>
        <AztecCheck
          id={2090}
          name="Aztec Arena (Tiny Temple: Vulture Room)"
          region="Tiny Temple"
          canGetLogic={vulture.in}
          canGetBreak={vulture.out}
        />
      </VanillaArena>
    </ArenaPool>
  )
}

export default VultureArena
