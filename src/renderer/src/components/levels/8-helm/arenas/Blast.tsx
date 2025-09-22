import ArenaPool from '@renderer/src/components/pools/Arenas'
import VanillaArena from '@renderer/src/components/pools/VanillaArena'
import { useHelmMachine } from '@renderer/src/hooks/helm'
import { useRocket } from '@renderer/src/hooks/kongs'
import HelmCheck from '../check'

const BlastArena: React.FC = () => {
  const helmMachine = useHelmMachine()
  const rocket = useRocket()
  return (
    <ArenaPool>
      <VanillaArena>
        <HelmCheck
          id={8090}
          name="Helm Arena (Top of Blast-o-Matic)"
          canGetLogic={helmMachine.in && rocket}
          canGetBreak={helmMachine.out && rocket}
        />
      </VanillaArena>
    </ArenaPool>
  )
}

export default BlastArena
