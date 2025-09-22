import DropPool from '@renderer/src/components/pools/Drops'
import { useAztecFront } from '@renderer/src/hooks/aztec'
import { useDefeatZinger } from '@renderer/src/hooks/enemies'
import { useAnyKong, useCamera } from '@renderer/src/hooks/kongs'
import { logicBreak } from '@renderer/src/hooks/world'
import AztecCheck from '../check'

const OasisEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecFront()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <AztecCheck
        id={2315}
        name="Aztec Enemy: Near Candy"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
      <AztecCheck
        id={2312}
        name="Aztec Enemy: Oasis Door"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2415}
        name="Aztec Enemy Photo: Near Candy"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && hasFairyCam}
        canGetBreak={logicBreak(inStage) && hasFairyCam}
      />
      <AztecCheck
        id={2412}
        name="Aztec Enemy Photo: Oasis Door"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
    </DropPool>
  )
}

export default OasisEnemies
