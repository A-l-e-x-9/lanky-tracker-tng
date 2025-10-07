import { useAztecBack } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'
import DropPool from '@renderer/components/pools/Drops'

const ConnectorTunnelEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecBack()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <AztecCheck
        id={2307}
        name="Middle Tunnel Pad Enemy 0"
        region="Aztec Caves"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
      <AztecCheck
        id={2308}
        name="Middle Tunnel Pad Enemy 1"
        region="Aztec Caves"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
      <AztecCheck
        id={2309}
        name="Middle Tunnel Cage Enemy 0"
        region="Aztec Caves"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2310}
        name="Middle Tunnel Cage Enemy 1"
        region="Aztec Caves"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2311}
        name="Middle Tunnel Cage Enemy 2"
        region="Aztec Caves"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2312}
        name="Middle Tunnel Cage Enemy 3"
        region="Aztec Caves"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
    </DropPool>
  )
}

export default ConnectorTunnelEnemies
