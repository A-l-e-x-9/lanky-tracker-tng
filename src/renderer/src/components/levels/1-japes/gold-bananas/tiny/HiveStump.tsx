import { useTinyStumpGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const HiveStump: React.FC = () => (
  <JapesCheck
    id={1032}
    name="Tiny's Stump"
    region="Hive Area"
    canGetLogic={useTinyStumpGb()}
  />
)

export default HiveStump
