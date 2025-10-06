import { useAztecBack } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'
import DropPool from '@renderer/components/pools/Drops'

const ConnectorTunnelEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecBack()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
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
      <AztecCheck
        id={2407}
        name="Photo of Middle Tunnel Pad Enemy 0"
        region="Aztec Caves"
        canGetLogic={inStage.in && hasFairyCam}
        canGetBreak={logicBreak(inStage) && hasFairyCam}
      />
      <AztecCheck
        id={2408}
        name="Photo of Middle Tunnel Pad Enemy 1"
        region="Aztec Caves"
        canGetLogic={inStage.in && hasFairyCam}
        canGetBreak={logicBreak(inStage) && hasFairyCam}
      />
      <AztecCheck
        id={2409}
        name="Photo of Middle Tunnel Cage Enemy 0"
        region="Aztec Caves"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2410}
        name="Photo of Middle Tunnel Cage Enemy 1"
        region="Aztec Caves"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2411}
        name="Photo of Middle Tunnel Cage Enemy 2"
        region="Aztec Caves"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2412}
        name="Photo of Middle Tunnel Cage Enemy 3"
        region="Aztec Caves"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
    </DropPool>
  )
}

export default ConnectorTunnelEnemies
