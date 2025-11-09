import GBPool from '@renderer/components/pools/GB'
import { useTinyCagedGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const TinyTimedCage: React.FC = () => {
const canDo = useTinyCagedGb()
return (
<GBPool>
  <JapesCheck
    id={1030}
    name="Tiny's Timed Cage Banana"
    region="Japes Hillside"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default TinyTimedCage
