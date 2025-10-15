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
        name="Chunky Klaptrap Guard 0"
        region="Tiny Temple"
        canGetLogic={tiny.in && klobber}
        canGetBreak={logicBreak(tiny) && klobber}
      />
      <AztecCheck
        id={2363}
        name="Chunky Klaptrap Guard 1"
        region="Tiny Temple"
        canGetLogic={tiny.in && klobber}
        canGetBreak={logicBreak(tiny) && klobber}
      />
      <AztecCheck
        id={2364}
        name="Main Room Enemy 0"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2365}
        name="Main Room Enemy 1"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2366}
        name="Main Room Enemy 2"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
    </DropPool>
  )
}

export default TinyStartEnemies
