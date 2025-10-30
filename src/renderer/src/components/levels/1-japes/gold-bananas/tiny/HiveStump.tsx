import GBPool from '@renderer/components/pools/GB'
import { useTinyStumpGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const HiveStump: React.FC = () => (
<GBPool>
  <JapesCheck
    id={1032}
    name="Tiny's Stump"
    region="Hive Area"
    canGetLogic={useTinyStumpGb()}
  />
  </GBPool>
)

export default HiveStump
