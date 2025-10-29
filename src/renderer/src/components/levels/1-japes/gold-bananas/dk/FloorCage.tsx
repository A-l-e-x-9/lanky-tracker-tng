import GBPool from '@renderer/components/pools/GB'
import { useDkCagedGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

export const FloorCage: React.FC = () => (
<GBPool>
  <JapesCheck
    id={1003}
    name="DK's Floor Cage Banana"
    region="Japes Lowlands"
    canGetLogic={useDkCagedGb()}
  />
  </GBPool>
)

export default FloorCage
