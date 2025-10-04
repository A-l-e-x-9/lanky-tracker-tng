import DropPool from '@renderer/components/pools/Drops'
import { useAztecFront } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong, usePineapple, useCamera } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const BeforeOasisEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecFront()
  const pineapple = usePineapple()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <AztecCheck
        id={2300}
        name="Vase Room Enemy 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple && zinger.in}
        canGetBreak={logicBreak(inStage) && pineapple && zinger.out}
      />
      <AztecCheck
        id={2301}
        name="Vase Room Enemy 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple && zinger.in}
        canGetBreak={logicBreak(inStage) && pineapple && zinger.out}
      />
      <AztecCheck
        id={2302}
        name="Vase Room Enemy 2"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple && zinger.in}
        canGetBreak={logicBreak(inStage) && pineapple && zinger.out}
      />
      <AztecCheck
        id={2303}
        name="Starting Tunnel Area Enemy 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2304}
        name="Starting Tunnel Area Enemy 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2305}
        name="Starting Tunnel Area Enemy 2"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
      <AztecCheck
        id={2306}
        name="Starting Tunnel Area Enemy 3"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
      <AztecCheck
        id={2400}
        name="Vase Room Enemy 0 Photo"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple && hasFairyCam}
        canGetBreak={logicBreak(inStage) && pineapple && hasFairyCam}
      />
      <AztecCheck
        id={2401}
        name="Vase Room Enemy 1 Photo"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple && hasFairyCam}
        canGetBreak={logicBreak(inStage) && pineapple && hasFairyCam}
      />
      <AztecCheck
        id={2402}
        name="Vase Room Enemy 2 Photo"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple && hasFairyCam}
        canGetBreak={logicBreak(inStage) && pineapple && hasFairyCam}
      />
      <AztecCheck
        id={2403}
        name="Starting Tunnel Area Enemy 0 Photo"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2404}
        name="Starting Tunnel Area Enemy 1 Photo"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2405}
        name="Starting Tunnel Area Enemy 2 Photo"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && hasFairyCam}
        canGetBreak={logicBreak(inStage) && hasFairyCam}
      />
      <AztecCheck
        id={2406}
        name="Starting Tunnel Area Enemy 3 Photo"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && hasFairyCam}
        canGetBreak={logicBreak(inStage) && hasFairyCam}
      />
    </DropPool>
  )
}

export default BeforeOasisEnemies
