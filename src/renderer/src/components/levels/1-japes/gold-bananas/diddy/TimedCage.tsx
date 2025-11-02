import GBPool from '@renderer/components/pools/GB'
import { useDiddyCagedGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const DiddyTimedCage: React.FC = () => (
<GBPool>
  <JapesCheck
    id={1010}
    name="Diddy's Timed Caged Banana"
    region="Japes Hillside"
    canGetLogic={useDiddyCagedGb()}
  />
  </GBPool>
)

export default DiddyTimedCage
