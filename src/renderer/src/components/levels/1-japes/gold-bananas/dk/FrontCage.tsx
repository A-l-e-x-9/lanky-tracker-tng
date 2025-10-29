import GBPool from '@renderer/components/pools/GB'
import { useDkFreebieGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const FrontCage: React.FC = () => (
<GBPool>
  <JapesCheck
    id={1001}
    name="In Front of Diddy's Cage"
    region="Japes Hillside"
    canGetLogic={useDkFreebieGb()}
  />
  </GBPool>
)

export default FrontCage
