import DropPool from '@renderer/components/pools/Drops'
import { useAztecFront } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong, usePineapple } from '@renderer/hooks/kongs'
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
        region="Aztec Caves"
        canGetLogic={inStage.in && pineapple && zinger.in}
        canGetBreak={logicBreak(inStage) && pineapple && zinger.out}
      />
      <AztecCheck
        id={2301}
        name="Vase Room Enemy 1"
        region="Aztec Caves"
        canGetLogic={inStage.in && pineapple && zinger.in}
        canGetBreak={logicBreak(inStage) && pineapple && zinger.out}
      />
      <AztecCheck
        id={2302}
        name="Vase Room Enemy 2"
        region="Aztec Caves"
        canGetLogic={inStage.in && pineapple && zinger.in}
        canGetBreak={logicBreak(inStage) && pineapple && zinger.out}
      />
      <AztecCheck
        id={2303}
        name="Starting Tunnel Area Enemy 0"
        region="Aztec Caves"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2304}
        name="Starting Tunnel Area Enemy 1"
        region="Aztec Caves"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2305}
        name="Starting Tunnel Area Enemy 2"
        region="Aztec Caves"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
      <AztecCheck
        id={2306}
        name="Starting Tunnel Area Enemy 3"
        region="Aztec Caves"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
    </DropPool>
  )
}

export default BeforeOasisEnemies
