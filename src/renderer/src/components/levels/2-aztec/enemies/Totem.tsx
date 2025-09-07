import DropPool from '@renderer/components/pools/Drops'
import { useAztecBack } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong, useCamera } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const TotemEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecBack()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <AztecCheck
        id={2313}
        name="Aztec Enemy: Outside Llama Temple"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2314}
        name="Aztec Enemy: Outside the Gong Tower"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2414}
        name="Aztec Enemy: In Front of Snide's"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2316}
        name="Aztec Enemy: Between Totem and Quicksand Tunnel"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2317}
        name="Aztec Enemy: Outside 5DT"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && zinger}
        canGetBreak={logicBreak(inStage) && zinger}
      />
      <AztecCheck
        id={2318}
        name="Aztec Enemy: Near Funky's"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2413}
        name="Aztec Enemy Photo: Outside Llama Temple"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2514}
        name="Aztec Enemy Photo: Outside the Gong Tower"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2515}
        name="Aztec Enemy Photo: In Front of Snide's"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2416}
        name="Aztec Enemy Photo: Between Totem and Quicksand Tunnel"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
      <AztecCheck
        id={2417}
        name="Aztec Enemy Photo: Outside 5DT"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && zinger && hasFairyCam}
        canGetBreak={logicBreak(inStage) && zinger && hasFairyCam}
      />
      <AztecCheck
        id={2418}
        name="Aztec Enemy Photo: Near Funky's"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong && hasFairyCam}
        canGetBreak={logicBreak(inStage) && anyKong && hasFairyCam}
      />
    </DropPool>
  )
}

export default TotemEnemies
