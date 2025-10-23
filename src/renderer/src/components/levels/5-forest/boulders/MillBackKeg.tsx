import BoulderPool from '@renderer/components/pools/Boulders'
import { useMillBackKeg } from '@renderer/hooks/forest'
import ForestCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the kegs in Fungi Forest.*/
const MillBackKeg: React.FC = () => {
const logic = useMillBackKeg()
  return (
    <BoulderPool>
        <ForestCheck
          id={5008}
          name="Back Mill Keg"
          region="Forest Area 1"
          canGetLogic={logic.in}
          canGetBreak={logic.out}
        />
    </BoulderPool>
  )
}

export default MillBackKeg
