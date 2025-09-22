import { useAztecBack } from '@renderer/src/hooks/aztec'
import { useDefeatZinger } from '@renderer/src/hooks/enemies'
import { useAnyKong, useCamera } from '@renderer/src/hooks/kongs'
import { logicBreak } from '@renderer/src/hooks/world'
import AztecCheck from '../check'
import DropPool from '@renderer/src/components/pools/Drops'

const ConnectorTunnelEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecBack()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <AztecCheck
        id={2302}
        name="Aztec Enemy: Tunnel Pad 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
      <AztecCheck
        id={2303}
        name="Aztec Enemy: Tunnel Pad 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
      <AztecCheck
        id={2304}
        name="Aztec Enemy: Tunnel Cage 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2305}
        name="Aztec Enemy: Tunnel Cage 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2306}
        name="Aztec Enemy: Tunnel Cage 2"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2307}
        name="Aztec Enemy: Tunnel Cage 3"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
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
      />
    </DropPool>
  )
}

export default ConnectorTunnelEnemies
