import GBPool from '@renderer/components/pools/GB'
import { useTinyCagedGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const TinyTimedCage: React.FC = () => (
<GBPool>
  <JapesCheck
    id={1030}
    name="Tiny's Timed Cage Banana"
    region="Japes Hillside"
    canGetLogic={useTinyCagedGb()}
  />
  </GBPool>
)

export default TinyTimedCage
