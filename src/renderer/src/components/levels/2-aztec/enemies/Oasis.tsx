import DropPool from '@renderer/components/pools/Drops'
import { useAztecFront } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const OasisEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecFront()
  const zinger = useDefeatZinger()
  const hasFairyCam = useCamera()
  return (
    <DropPool>
      <AztecCheck
        id={2320}
        name="Enemy Near Candy's"
        region="Aztec Main Area"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={logicBreak(inStage) && zinger.out}
      />
      <AztecCheck
        id={2321}
        name="Enemy Near Llama's Prison"
        region="Aztec Main Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
    </DropPool>
  )
}

export default OasisEnemies
