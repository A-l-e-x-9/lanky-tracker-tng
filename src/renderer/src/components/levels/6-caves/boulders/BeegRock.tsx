import BoulderPool from '@renderer/src/components/pools/Boulders'
import { useOrin } from '@renderer/src/hooks/caves'
import CavesCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the rocks in Crystal Caves.*/
const Okuu: React.FC = () => {
  return (
    <BoulderPool>
        <CavesCheck
          id={5009}
          name="Caves Boulder: Big Boulder Near Cranky's"
          region="Main Caves Area"
          canGetLogic={useOrin()}
        />
    </BoulderPool>
  )
}

export default Okuu
