import BoulderPool from '@renderer/src/components/pools/Boulders'
import { useMillBackKeg } from '@renderer/src/hooks/forest'
import ForestCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the kegs in Fungi Forest.*/
const MillBackKeg: React.FC = () => {
  return (
    <BoulderPool>
        <ForestCheck
          id={5008}
          name="Forest Boulder: Mill Back Keg"
          region="Forest Mills"
          canGetLogic={useMillBackKeg()}
        />
    </BoulderPool>
  )
}

export default MillBackKeg
