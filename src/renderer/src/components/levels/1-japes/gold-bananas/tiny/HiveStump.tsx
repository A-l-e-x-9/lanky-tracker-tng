import GBPool from '@renderer/components/pools/GB'
import { useTinyStumpGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const HiveStump: React.FC = () => {
const canDo = useTinyStumpGb()
return (
<GBPool>
  <JapesCheck
    id={1032}
    name="Tiny's Stump"
    region="Hive Area"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default HiveStump
