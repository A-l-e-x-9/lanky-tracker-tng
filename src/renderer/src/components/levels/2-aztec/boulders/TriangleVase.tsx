import BoulderPool from '@renderer/components/pools/Boulders'
import { useVases } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the urns in the urn room at the level start.*/
const TriangleVase: React.FC = () => {
  const hasLogic = useVases()
  return (
    <BoulderPool>
        <AztecCheck
          id={2008}
          name="Triangle Vase"
          region="Aztec Caves"
          canGetLogic={hasLogic.in}
          canGetBreak={hasLogic.out}
        />
    </BoulderPool>
  )
}

export default TriangleVase
