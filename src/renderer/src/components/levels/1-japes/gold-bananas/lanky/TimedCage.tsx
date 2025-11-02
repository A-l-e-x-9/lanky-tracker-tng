import GBPool from '@renderer/components/pools/GB'
import { useLankyCagedGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const LankyTimedCage: React.FC = () => (
<GBPool>
  <JapesCheck
    id={1020}
    name="Lanky's Timed Cage Banana"
    region="Japes Hillside"
    canGetLogic={useLankyCagedGb()}
  />
  </GBPool>
)

export default LankyTimedCage
