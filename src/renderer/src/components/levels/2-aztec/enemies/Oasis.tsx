import DropPool from '@renderer/components/pools/Drops'
import { useAztecFront } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import AztecCheck from '../check'

const OasisEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecFront()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <AztecCheck
        id={2320}
        name="Enemy Near Candy's"
        region="Aztec Main Area"
        canGetLogic={inStage.in && zinger.in}
        canGetBreak={inStage.out && zinger.out}
      />
      <AztecCheck
        id={2321}
        name="Enemy Near Llama's Prison"
        region="Aztec Main Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={inStage.out && anyKong}
      />
    </DropPool>
  )
}

export default OasisEnemies
