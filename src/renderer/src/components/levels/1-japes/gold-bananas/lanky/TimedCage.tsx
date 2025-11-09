import GBPool from '@renderer/components/pools/GB'
import { useLankyCagedGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const LankyTimedCage: React.FC = () => {
const canDo = useLankyCagedGb()
return (
<GBPool>
  <JapesCheck
    id={1020}
    name="Lanky's Timed Cage Banana"
    region="Japes Hillside"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default LankyTimedCage
