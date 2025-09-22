import DropPool from '@renderer/components/pools/Drops'
import { useAztecTinyTemple } from '@renderer/hooks/aztec'
import { logicBreak } from '@renderer/hooks/world'
import { useCamera } from '@renderer/hooks/kongs'
import AztecCheck from '../check'
import { useDefeatKlobber } from '@renderer/hooks/enemies'

const TinyStartEnemies: React.FC = () => {
  const tiny = useAztecTinyTemple()
  const hasFairyCam = useCamera()
  const klobber = useDefeatKlobber()
  return (
    <DropPool>
      <AztecCheck
        id={2379}
        name="Aztec Enemy: TT Guard 0"
        region="Tiny Temple"
        canGetLogic={tiny.in && klobber}
        canGetBreak={logicBreak(tiny) && klobber}
      />
      <AztecCheck
        id={2380}
        name="Aztec Enemy: TT Guard 1"
        region="Tiny Temple"
        canGetLogic={tiny.in && klobber}
        canGetBreak={logicBreak(tiny) && klobber}
      />
      <AztecCheck
        id={2381}
        name="Aztec Enemy: TT Main 0"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2382}
        name="Aztec Enemy: TT Main 1"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2383}
        name="Aztec Enemy: TT Main 2"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2479}
        name="Aztec Enemy Photo: TT Guard 0"
        region="Tiny Temple"
        canGetLogic={tiny.in && hasFairyCam}
        canGetBreak={logicBreak(tiny) && hasFairyCam}
      />
      <AztecCheck
        id={2480}
        name="Aztec Enemy Photo: TT Guard 1"
        region="Tiny Temple"
        canGetLogic={tiny.in && hasFairyCam}
        canGetBreak={logicBreak(tiny) && hasFairyCam}
      />
      <AztecCheck
        id={2481}
        name="Aztec Enemy Photo: TT Main 0"
        region="Tiny Temple"
        canGetLogic={tiny.in && hasFairyCam}
        canGetBreak={logicBreak(tiny) && hasFairyCam}
      />
      <AztecCheck
        id={2482}
        name="Aztec Enemy Photo: TT Main 1"
        region="Tiny Temple"
        canGetLogic={tiny.in && hasFairyCam}
        canGetBreak={logicBreak(tiny) && hasFairyCam}
      />
      <AztecCheck
        id={2483}
        name="Aztec Enemy Photo: TT Main 2"
        region="Tiny Temple"
        canGetLogic={tiny.in && hasFairyCam}
        canGetBreak={logicBreak(tiny) && hasFairyCam}
      />
    </DropPool>
  )
}

export default TinyStartEnemies
