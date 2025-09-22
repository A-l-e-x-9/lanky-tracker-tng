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
        name="Aztec Enemy: Vase 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple && zinger.in}
        canGetBreak={logicBreak(inStage) && pineapple && zinger.out}
      />
      <AztecCheck
        id={2301}
        name="Aztec Enemy: Vase 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple && zinger.in}
        canGetBreak={logicBreak(inStage) && pineapple && zinger.out}
      />
      <AztecCheck
        id={2402}
        name="Aztec Enemy: Vase 2"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple && zinger.in}
        canGetBreak={logicBreak(inStage) && pineapple && zinger.out}
      />
      <AztecCheck
        id={2308}
        name="Aztec Enemy: Starting Tunnel 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2309}
        name="Aztec Enemy: Starting Tunnel 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2310}
        name="Aztec Enemy: Starting Tunnel 2"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
      <AztecCheck
        id={2311}
        name="Aztec Enemy: Starting Tunnel 3"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
      <AztecCheck
        id={2400}
        name="Aztec Enemy Photo: Vase 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple && hasFairyCam}
        canGetBreak={logicBreak(inStage) && pineapple && hasFairyCam}
      />
      <AztecCheck
        id={2401}
        name="Aztec Enemy Photo: Vase 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple && hasFairyCam}
        canGetBreak={logicBreak(inStage) && pineapple && hasFairyCam}
      />
      <AztecCheck
        id={2502}
        name="Aztec Enemy Photo: Vase 2"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple && hasFairyCam}
        canGetBreak={logicBreak(inStage) && pineapple && hasFairyCam}
      />
      <AztecCheck
        id={2408}
        name="Aztec Enemy Photo: Starting Tunnel 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2409}
        name="Aztec Enemy Photo: Starting Tunnel 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2410}
        name="Aztec Enemy Photo: Starting Tunnel 2"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && hasFairyCam}
        canGetBreak={logicBreak(inStage) && hasFairyCam}
      />
      <AztecCheck
        id={2411}
        name="Aztec Enemy Photo: Starting Tunnel 3"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && hasFairyCam}
        canGetBreak={logicBreak(inStage) && hasFairyCam}
      />
    </DropPool>
  )
}

export default BeforeOasisEnemies
