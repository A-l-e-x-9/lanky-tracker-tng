import DropPool from '@renderer/components/pools/Drops'
import { useAztecTinyTemple, useTinyTempleIce } from '@renderer/hooks/aztec'
import { useDive } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const TinySwimEnemies: React.FC = () => {
  const tiny = useAztecTinyTemple()
  const dive = useDive()
  const iceMelted = useTinyTempleIce()
  return (
    <DropPool>
      <AztecCheck
        id={2367}
        name="Aztec Enemy: TT Kong 0"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive}
        canGetBreak={logicBreak(tiny) && iceMelted && dive}
      />
      <AztecCheck
        id={2368}
        name="Aztec Enemy: TT Kong 1"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive}
        canGetBreak={logicBreak(tiny) && iceMelted && dive}
      />
      <AztecCheck
        id={2369}
        name="Aztec Enemy: TT Kong 2"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive}
        canGetBreak={logicBreak(tiny) && iceMelted && dive}
      />
      <AztecCheck
        id={2370}
        name="Aztec Enemy: TT Kong 3"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive}
        canGetBreak={logicBreak(tiny) && iceMelted && dive}
      />
      <AztecCheck
        id={2371}
        name="Aztec Enemy: TT Kong 4"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive}
        canGetBreak={logicBreak(tiny) && iceMelted && dive}
      />
    </DropPool>
  )
}

export default TinySwimEnemies
