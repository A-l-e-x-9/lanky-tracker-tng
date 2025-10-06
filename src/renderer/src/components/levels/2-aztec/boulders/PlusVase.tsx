import BoulderPool from '@renderer/components/pools/Boulders'
import { useVases } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the urns in the urn room at the level start.*/
const PlusVase: React.FC = () => {
  const hasLogic = useVases()
  return (
    <BoulderPool>
        <AztecCheck
          id={2009}
          name="Plus Vase"
          region="Aztec Caves"
          canGetLogic={hasLogic.in}
          canGetBreak={hasLogic.out}
        />
    </BoulderPool>
  )
}

export default PlusVase
