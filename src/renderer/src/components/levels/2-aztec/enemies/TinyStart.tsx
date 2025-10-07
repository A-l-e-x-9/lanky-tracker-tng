import DropPool from '@renderer/components/pools/Drops'
import { useAztecTinyTemple } from '@renderer/hooks/aztec'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'
import { useDefeatKlobber } from '@renderer/hooks/enemies'

const TinyStartEnemies: React.FC = () => {
  const tiny = useAztecTinyTemple()
  const hasFairyCam = useCamera()
  const klobber = useDefeatKlobber()
  return (
    <DropPool>
      <AztecCheck
        id={2362}
        name="Aztec Enemy: TT Main 0"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2363}
        name="Aztec Enemy: TT Main 1"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2364}
        name="Aztec Enemy: TT Main 2"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2365}
        name="Aztec Enemy: TT Guard 0"
        region="Tiny Temple"
        canGetLogic={tiny.in && klobber}
        canGetBreak={logicBreak(tiny) && klobber}
      />
      <AztecCheck
        id={2366}
        name="Aztec Enemy: TT Guard 1"
        region="Tiny Temple"
        canGetLogic={tiny.in && klobber}
        canGetBreak={logicBreak(tiny) && klobber}
      />
    </DropPool>
  )
}

export default TinyStartEnemies
