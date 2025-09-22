import BoulderPool from '@renderer/src/components/pools/Boulders'
import { useVases } from '@renderer/src/hooks/aztec'
import AztecCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the urns in the urn room at the level start.*/
const CircleVase: React.FC = () => {
  const hasLogic = useVases()
  return (
    <BoulderPool>
        <AztecCheck
          id={2006}
          name="Aztec Boulder: Circle Vase"
          region="Various Aztec Tunnels"
          canGetLogic={hasLogic.in}
          canGetBreak={hasLogic.out}
        />
    </BoulderPool>
  )
}

export default CircleVase
