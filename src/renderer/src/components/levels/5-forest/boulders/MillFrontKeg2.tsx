import BoulderPool from '@renderer/components/pools/Boulders'
import { useMillFrontKegs } from '@renderer/hooks/forest'
import ForestCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the kegs in Fungi Forest.*/
const MillFrontKeg2: React.FC = () => {
const logic = useMillFrontKegs()
  return (
    <BoulderPool>
        <ForestCheck
          id={5007}
          name="Front Mill Keg in Back of Room"
          region="Forest Area 1"
          canGetLogic={logic.in}
          canGetBreak={logic.out}
        />
    </BoulderPool>
  )
}

export default MillFrontKeg2
