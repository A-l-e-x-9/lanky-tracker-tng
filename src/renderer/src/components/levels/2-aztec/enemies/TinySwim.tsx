import DropPool from '@renderer/src/components/pools/Drops'
import { useAztecTinyTemple, useTinyTempleIce } from '@renderer/src/hooks/aztec'
import { useDive, useCamera } from '@renderer/src/hooks/kongs'
import { logicBreak } from '@renderer/src/hooks/world'
import AztecCheck from '../check'

const TinySwimEnemies: React.FC = () => {
  const tiny = useAztecTinyTemple()
  const dive = useDive()
  const iceMelted = useTinyTempleIce()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <AztecCheck
        id={2384}
        name="Aztec Enemy: TT Kong 0"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive}
        canGetBreak={logicBreak(tiny) && iceMelted && dive}
      />
      <AztecCheck
        id={2385}
        name="Aztec Enemy: TT Kong 1"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive}
        canGetBreak={logicBreak(tiny) && iceMelted && dive}
      />
      <AztecCheck
        id={2386}
        name="Aztec Enemy: TT Kong 2"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive}
        canGetBreak={logicBreak(tiny) && iceMelted && dive}
      />
      <AztecCheck
        id={2387}
        name="Aztec Enemy: TT Kong 3"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive}
        canGetBreak={logicBreak(tiny) && iceMelted && dive}
      />
      <AztecCheck
        id={2388}
        name="Aztec Enemy: TT Kong 4"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive}
        canGetBreak={logicBreak(tiny) && iceMelted && dive}
      />
      <AztecCheck
        id={2484}
        name="Aztec Enemy Photo: TT Kong 0"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive && hasFairyCam}
        canGetBreak={logicBreak(tiny) && iceMelted && dive && hasFairyCam}
      />
      <AztecCheck
        id={2485}
        name="Aztec Enemy Photo: TT Kong 1"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive && hasFairyCam}
        canGetBreak={logicBreak(tiny) && iceMelted && dive && hasFairyCam}
      />
      <AztecCheck
        id={2486}
        name="Aztec Enemy Photo: TT Kong 2"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive && hasFairyCam}
        canGetBreak={logicBreak(tiny) && iceMelted && dive && hasFairyCam}
      />
      <AztecCheck
        id={2487}
        name="Aztec Enemy Photo: TT Kong 3"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive && hasFairyCam}
        canGetBreak={logicBreak(tiny) && iceMelted && dive && hasFairyCam}
      />
      <AztecCheck
        id={2488}
        name="Aztec Enemy Photo: TT Kong 4"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive && hasFairyCam}
        canGetBreak={logicBreak(tiny) && iceMelted && dive && hasFairyCam}
      />
      <AztecCheck
        id={2489}
        name="Aztec Enemy Photo: Underwater enemy near vulture GB"
        region="Tiny Temple"
        canGetLogic={tiny.in && iceMelted && dive && hasFairyCam}
        canGetBreak={logicBreak(tiny) && iceMelted && dive && hasFairyCam}
      />
    </DropPool>
  )
}

export default TinySwimEnemies
