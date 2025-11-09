import GBPool from '@renderer/components/pools/GB'
import { useDkCagedGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const FloorCage: React.FC = () => {
const canDo = useDkCagedGb()
return (
<GBPool>
  <JapesCheck
    id={1003}
    name="DK's Floor Cage Banana"
    region="Japes Lowlands"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default FloorCage
