import GBPool from '@renderer/components/pools/GB'
import { useDiddyCagedGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const DiddyTimedCage: React.FC = () => {
const canDo = useDiddyCagedGb()
return (
<GBPool>
  <JapesCheck
    id={1010}
    name="Diddy's Timed Caged Banana"
    region="Japes Hillside"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default DiddyTimedCage
