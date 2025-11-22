import DropPool from '@renderer/components/pools/Drops'
import { useAztecBack } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import AztecCheck from '../check'

const TotemEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecBack()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <AztecCheck
        id={2313}
        name="Enemy Near the Llama Temple"
        region="Aztec Main Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <AztecCheck
        id={2314}
        name="Enemy Near the Gong Tower"
        region="Aztec Main Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <AztecCheck
        id={2315}
        name="Enemy in Front of Snide's"
        region="Aztec Main Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <AztecCheck
        id={2316}
        name="Enemy Near the Quicksand Tunnel"
        region="Aztec Main Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
      <AztecCheck
        id={2317}
        name="Enemy Near the 5DT"
        region="Aztec Main Area"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <AztecCheck
        id={2318}
        name="Enemy Near Funky's"
        region="Aztec Main Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
    </DropPool>
  )
}

export default TotemEnemies
