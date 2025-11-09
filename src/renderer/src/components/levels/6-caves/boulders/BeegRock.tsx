import BoulderPool from '@renderer/components/pools/Boulders'
import { useOrin } from '@renderer/hooks/caves'
import CavesCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the rocks in Crystal Caves.*/
const Okuu: React.FC = () => {
const canDo = useOrin()
  return (
    <BoulderPool>
        <CavesCheck
          id={5009}
          name="Big Boulder Near Cranky's"
          region="Crystal Caves Main"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </BoulderPool>
  )
}

export default Okuu
