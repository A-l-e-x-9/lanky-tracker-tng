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
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
      <AztecCheck
        id={2308}
        name="Middle Tunnel Pad Enemy 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
      <AztecCheck
        id={2309}
        name="Middle Tunnel Cage Enemy 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2310}
        name="Middle Tunnel Cage Enemy 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2311}
        name="Middle Tunnel Cage Enemy 2"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2312}
        name="Middle Tunnel Cage Enemy 3"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
    </DropPool>
  )
}

export default ConnectorTunnelEnemies

/*      <AztecCheck
        id={2402}
        name="Aztec Enemy Photo: Tunnel Pad 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && hasFairyCam}
        canGetBreak={logicBreak(inStage) && hasFairyCam}
      />
      <AztecCheck
        id={2403}
        name="Aztec Enemy Photo: Tunnel Pad 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && hasFairyCam}
        canGetBreak={logicBreak(inStage) && hasFairyCam}
      />
      <AztecCheck
        id={2404}
        name="Aztec Enemy Photo: Tunnel Cage 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2405}
        name="Aztec Enemy Photo: Tunnel Cage 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2406}
        name="Aztec Enemy Photo: Tunnel Cage 2"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2407}
        name="Aztec Enemy Photo: Tunnel Cage 3"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />*/
